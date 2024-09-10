import React, { useState, useContext } from 'react';
import Modal from './Modal';
import { AuthContext } from '../../context/AuthContext';
// import SelectedAvatar from './SelectedAvatar';
// import SelectedAudio from './SelectedAudio';

const OptionPanel = ({ avatars, audios, setAvatar, setAudio, avatar, audio, generateVideo }) => {
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showAudioModal, setShowAudioModal] = useState(false);
  const {script} = useContext(AuthContext);
  return (
    <div className="w-1/3 bg-white shadow-md rounded-lg p-6 space-y-6">
      <h2 className="text-xl font-bold mb-4">Options</h2>
      <div className="bg-gray-100 p-4 rounded-lg h-60 overflow-y-auto">
        <pre className="whitespace-pre-wrap">{ script || "No script generated yet. Please generate a script."}</pre>
      </div>
      {/* Display Selected Avatar */}
      {avatar &&  (
    <div className="flex items-center space-x-4">
      <img
        src={avatars.find(a => a.id === avatar).url}
        alt="Selected Avatar"
        className="w-12 h-12 rounded-full border border-gray-300"
      />
      <p className="text-gray-700">Avatar Selected</p>
    </div>
  )}

      {/* Button to Select Avatar */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-4"
        onClick={() => setShowAvatarModal(true)} // Open Avatar Modal
      >
        {avatar ? 'Change Avatar' : 'Select Avatar'}
      </button>

      {/* Avatar Modal */}
      {showAvatarModal && (
        <Modal title="Select Avatar" closeModal={() => setShowAvatarModal(false)}>
          <div className="grid grid-cols-2 gap-4">
            {avatars.map((avatarOption) => (
              <img
                key={avatarOption.id}
                src={avatarOption.url}
                alt={`Avatar ${avatarOption.id}`}
                className={`cursor-pointer border-2 ${
                  avatar === avatarOption.id ? 'border-blue-500' : 'border-gray-300'
                }`}
                onClick={() => {
                  setAvatar(avatarOption.id);
                  setShowAvatarModal(false);
                }}
              />
            ))}
          </div>
        </Modal>
      )}

      {/* Display Selected Audio */}
      {audio && (
    <div className="flex items-center space-x-4">
      <p className="text-gray-700">Audio Selected: {audios.find(a => a.id === audio).name}</p>
    </div>
  )}

      {/* Button to Select Audio */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-4"
        onClick={() => setShowAudioModal(true)} // Open Audio Modal
      >
        {audio ? 'Change Audio' : 'Select Audio'}
      </button>

      {/* Audio Modal */}
      {showAudioModal && (
        <Modal title="Select Audio" closeModal={() => setShowAudioModal(false)}>
          <div className="grid grid-cols-1 gap-4">
            {audios.map((audioOption) => (
              <div
                key={audioOption.id}
                className={`cursor-pointer border-2 p-2 ${
                  audio === audioOption.id ? 'border-blue-500' : 'border-gray-300'
                }`}
                onClick={() => {
                  setAudio(audioOption.id);
                  setShowAudioModal(false);
                }}
              >
                <audio controls src={audioOption.url}></audio>
                <p className="mt-2">{audioOption.name}</p>
              </div>
            ))}
          </div>
        </Modal>
      )}

      {/* Generate Video Button */}
      <button
        className="bg-green-500 text-white py-2 px-4 rounded w-full"
        onClick={generateVideo}
      >
        Generate Video
      </button>
    </div>
  );
};

export default OptionPanel;
