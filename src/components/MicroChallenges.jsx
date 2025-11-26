import React, { useState, useRef } from 'react';
import { Heart, Award, Star, Camera, Mic, Palette, CheckCircle, Sparkles, Users, Upload, Plus } from 'lucide-react';

const MicroChallenges = () => {
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: 'Draw a small flower',
      dueDate: 'Oct 15',
      dueTime: '10:30 am',
      progress: 90,
      assignees: ['GJ', 'AL'],
      icon: Palette,
      color: 'bg-purple-500',
      completed: false,
      points: 10,
      type: 'Today'
    },
    {
      id: 2,
      title: 'Record a 20 second story',
      dueDate: 'Oct 15',
      dueTime: '12:15 pm',
      progress: 90,
      assignees: ['GM', 'UT'],
      icon: Mic,
      color: 'bg-purple-500',
      completed: false,
      points: 15,
      type: 'Today'
    },
    {
      id: 3,
      title: 'Say hello in your own style',
      dueDate: 'Oct 19',
      dueTime: '2:30 pm',
      progress: 10,
      assignees: ['AL', 'MK', 'SJ'],
      icon: Camera,
      color: 'bg-purple-500',
      completed: false,
      points: 10,
      type: 'This week'
    }
  ]);

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  // File Inputs
  const photoInputRef = useRef(null);
  const audioInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleChallengeClick = (challenge) => {
    setSelectedChallenge(challenge);
    setShowUploadModal(true);
  };

  const handleComplete = (id) => {
    setChallenges(challenges.map(c => 
      c.id === id ? { ...c, completed: !c.completed } : c
    ));
  };

  const handleSubmit = () => {
    if (selectedChallenge && uploadedFile) {
      setChallenges(challenges.map(c => 
        c.id === selectedChallenge.id ? { ...c, completed: true, progress: 100 } : c
      ));
      alert(`Uploaded: ${uploadedFile.name}`);
    }

    setShowUploadModal(false);
    setUploadedFile(null);
    setSelectedChallenge(null);
  };

  // Upload Handlers
  const handlePhotoSelect = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleAudioSelect = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleFileSelect = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  return (
    <div className="h-[400px] w-[480px] bg-gray-50 shadow-2xl p-4 rounded-4xl mt-12">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-gray-900">Today tasks</h1>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="space-y-3">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <div
                key={challenge.id}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
                onClick={() => handleChallengeClick(challenge)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">

                    {/* Complete Checkbox */}
                  <button
  onClick={(e) => {
    e.stopPropagation();
    handleComplete(challenge.id);
  }}
  className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
    challenge.completed 
      ? 'bg-white border-purple-800' 
      : 'border-gray-300 hover:border-purple-400'
  }`}
>
  {challenge.completed && (
    <CheckCircle className="w-4 h-4 text-purple-800 fill-purple-800" />
  )}
</button>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base font-semibold mb-2">
                        {challenge.title}
                      </h3>

                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="text-xs">{challenge.dueDate} • {challenge.dueTime}</span>

                        <div className="flex items-center space-x-2 flex-1">
                          <div className="flex-1 max-w-32 bg-gray-100 rounded-full h-1.5">
                            <div 
                              className={`h-full rounded-full ${challenge.color}`}
                              style={{ width: `${challenge.progress}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-600">{challenge.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Assignees */}
                  <div className="flex items-center -space-x-2 ml-4">
                    {challenge.assignees.map((a, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">{a}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && selectedChallenge && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">

            <h3 className="text-2xl font-bold text-center mb-5">{selectedChallenge.title}</h3>

            {/* Hidden Inputs */}
            <input 
              type="file" 
              accept="image/*" 
              capture="environment" 
              ref={photoInputRef}
              onChange={handlePhotoSelect}
              className="hidden"
            />

            <input 
              type="file" 
              accept="audio/*" 
              capture 
              ref={audioInputRef}
              onChange={handleAudioSelect}
              className="hidden"
            />

            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Buttons */}
            <div className="space-y-3 mb-6">

              {/* Take Photo */}
              <button
                onClick={() => photoInputRef.current.click()}
                className="w-full py-4 bg-purple-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2"
              >
                <Camera className="w-5 h-5" />
                <span>Take Photo</span>
              </button>

              {/* Record Audio */}
              <button
                onClick={() => audioInputRef.current.click()}
                className="w-full py-4 bg-purple-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2"
              >
                <Mic className="w-5 h-5" />
                <span>Record Audio</span>
              </button>

              {/* Upload File */}
              <button
                onClick={() => fileInputRef.current.click()}
                className="w-full py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold flex items-center justify-center space-x-2"
              >
                <Upload className="w-5 h-5" />
                <span>Upload File</span>
              </button>
            </div>

            {/* Preview */}
            {uploadedFile && (
              <div className="mb-4 text-center text-gray-700">
                <p className="font-semibold">Selected:</p>
                <p>{uploadedFile.name}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadedFile(null);
                }}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                disabled={!uploadedFile}
                className="flex-1 py-3 bg-green-600 text-white rounded-xl font-semibold disabled:bg-gray-400"
              >
                Submit
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default MicroChallenges;
