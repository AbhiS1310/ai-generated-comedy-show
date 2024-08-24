import React, { useState } from 'react';
import ComedyForm from './components/ComedyForm';
import axios from 'axios';
import ScriptPreview from './components/ScriptPreview';

function App() {
  const [formData, setFormData] = useState({
    comedyType: '',
    theme: '',
    tone: '',
    audience: '',
    cprompt: '',
    duration: '5',
  });

  const [script, setScript] = useState('');
  const [showScript, setShowScript] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setScript(data.script);
    setShowScript(true);
  };

  const handleConfirm = async () => {
    setIsConfirmed(true);
    setLoading(true);
    console.log('Proceeding to video generation...');
    try {
      const response = await axios.post('http://localhost:5000/create-video', { script });
      setTimeout(async ()=>{
        const res = await axios.get(`http://localhost:5000/get-video/${response.data.vid_id}`)
        setLoading(false);
        setVideoUrl(res.data.vid_url);
      },10000); // Set the video URL from backend
      
    } catch (error) {
      console.error('Error generating video:', error);
      setLoading(false);
      setIsConfirmed(false);
      setShowScript(false);
      alert(error);
    }
  };

  const handleModifyScript = () => {
    setShowScript(false);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center p-4">
      <header className="w-full  max-w-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">AI Comedy Show Generator</h1>
        
        {!showScript && !isConfirmed && (
          <ComedyForm formData={formData} onSubmit={handleFormSubmit} />
        )}

        {showScript && !isConfirmed && (
          <ScriptPreview 
            script={script}
            onConfirm={handleConfirm}
            onModify={handleModifyScript}
          />
        )}

        {isConfirmed && (
          <div className="text-center mt-6">
            {loading && (<h2 className="text-2xl font-semibold">Generating Your Comedy Show Video...</h2>)}
            {videoUrl && (
        <div className="mt-6 w-full max-w-lg">
          <video controls className="w-full h-auto rounded">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
