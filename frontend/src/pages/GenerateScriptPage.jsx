import React, { useState, useContext } from 'react';
import ScriptDisplay from '../components/GenerateScriptPage/ScriptDisplay';
import OptionsPanel from '../components/GenerateScriptPage/OptionsPanel';
import { AuthContext } from '../context/AuthContext';

const GenerateScriptPage = () => {
  const [formData, setFormData] = useState({
        comedyType: '',
        theme: '',
        tone: '',
        audience: '',
        cprompt: '',
        duration: '5',
      });
    const {script} = useContext(AuthContext);

  return (
    <>
    <div className="flex flex-col md:flex-row p-8 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left container for script display */}
      <div className="w-full md:w-2/3">
        <ScriptDisplay script={script} />
      </div>

      {/* Right container for options panel */}
      <div className="w-full md:w-1/3">
        <OptionsPanel formData = {formData} />
      </div>
    </div>
    </>
  );
};

export default GenerateScriptPage;
