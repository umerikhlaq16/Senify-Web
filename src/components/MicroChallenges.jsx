import React, { useState } from 'react';
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
    if (selectedChallenge) {
      setChallenges(challenges.map(c => 
        c.id === selectedChallenge.id ? { ...c, completed: true, progress: 100 } : c
      ));
    }
    setShowUploadModal(false);
    setSelectedChallenge(null);
  };

  return (
    <div className="h-[400px] w-[500px] bg-gray-50 shadow-2xl p-6 mx-[72px] rounded-4xl mt-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-gray-900">Today tasks</h1>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-600">8</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-yellow-100 border-2 border-white flex items-center justify-center -ml-2">
                  <Star className="w-3 h-3 text-yellow-600 fill-current" />
                </div>
                <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center -ml-2">
                  <Heart className="w-3 h-3 text-pink-600 fill-current" />
                </div>
              </div>
            </div>
           
          </div>
        </div>

        {/* Challenge Cards */}
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
                    {/* Checkbox */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleComplete(challenge.id);
                      }}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        challenge.completed 
                          ? 'bg-purple-800 border-white' 
                          : 'border-gray-300 hover:border-purple-400'
                      }`}
                    >
                      {challenge.completed && (
                        <CheckCircle className="w-4 h-4 text-white fill-current" />
                      )}
                    </button>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base font-semibold mb-2">
                        {challenge.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <span className="text-xs">{challenge.dueDate}</span>
                          <span className="text-xs">•</span>
                          <span className="text-xs">{challenge.dueTime}</span>
                        </div>
                        
                        {/* Progress Bar */}
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

                  {/* Assignees and Menu */}
                  <div className="flex items-center space-x-3 ml-4">
                    {/* Assignees */}
                    <div className="flex -space-x-2">
                      {challenge.assignees.map((assignee, idx) => (
                        <div
                          key={idx}
                          className="w-7 h-7 rounded-full bg-linear-to-br from-purple-400 to-pink-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                        >
                          {assignee}
                        </div>
                      ))}
                      <button className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-gray-600 hover:bg-gray-200">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* More Menu */}
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="3" r="1.5" fill="currentColor"/>
                        <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
                        <circle cx="8" cy="13" r="1.5" fill="currentColor"/>
                      </svg>
                    </button>
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
            <div className="text-center mb-6">
              <div className={`${selectedChallenge.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedChallenge.title}</h3>
              <p className="text-gray-600 text-sm">Upload your submission to complete this challenge</p>
            </div>

            {/* Upload Options */}
            <div className="space-y-3 mb-6">
              <button className="w-full py-4 bg-linear-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-md flex items-center justify-center space-x-2">
                <Camera className="w-5 h-5" />
                <span>Take Photo</span>
              </button>
              
              <button className="w-full py-4 bg-linear-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-md flex items-center justify-center space-x-2">
                <Mic className="w-5 h-5" />
                <span>Record Audio</span>
              </button>
              
              <button className="w-full py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Upload File</span>
              </button>
            </div>

           

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-md"
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