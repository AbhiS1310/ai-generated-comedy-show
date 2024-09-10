import React, { useContext, useState } from 'react';
import OptionPanel from '../components/VideoPage/OptionPanel';
import VideoContainer from '../components/VideoPage/VideoContainer';
import { toast } from 'react-toastify';
import axios from 'axios';
import { server } from '../server';
import { AuthContext } from '../context/AuthContext';


const VideoPage = () => {
  const [avatar, setAvatar] = useState(null);
  const [audio, setAudio] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const {script} = useContext(AuthContext);

  // Sample avatars and audios (can be fetched from API)
  const avatars = [
    { id: 1, url: 'https://clips-presenters.d-id.com/v2/alex/qcvo4gupoy/e3nbserss8/image.png' },
    { id: 2, url: 'https://clips-presenters.d-id.com/v2/benjamin/vxbdlxieyn/vlybvchhwz/image.png' },
  ];

  const audios = [
    { id: 1, url: 'https://peregrine-samples.s3.amazonaws.com/parrot-samples/russell.wav', name: 'Audio 1' },
    { id: 2, url: 'https://peregrine-samples.s3.amazonaws.com/parrot-samples/sarah.wav', name: 'Audio 2' },
  ];

  // Function to generate video
  const generateVideo = async () => {
    if (!avatar || !audio) {
      toast.warning('Please select an avatar and an audio first!');
      return;
    }
    if(!script){
      toast.warning('Please first generate your script with our script generator');
      return;
    }
    await axios.get(`${server}/get-video/id`,{
      withCredentials: true
    }).then((res)=>{
      setVideoUrl(res.data.vid_url);
    }).catch((err)=>{
      toast.error(err.response.data.message)
    })
    
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex p-4">
      {/* Left Container: Options */}
      <OptionPanel
        avatars={avatars}
        audios={audios}
        avatar={avatar}
        audio={audio}
        setAvatar={setAvatar}
        setAudio={setAudio}
        generateVideo={generateVideo}
      />

      {/* Right Container: Video Display */}
      <VideoContainer videoUrl={videoUrl} />
    </div>
    </>
  );
};

export default VideoPage;
