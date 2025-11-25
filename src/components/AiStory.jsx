import React, { useState } from 'react';
import { Sparkles, Wand2 } from 'lucide-react';

const AIStoryHighlight = () => {
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [generatingStory, setGeneratingStory] = useState(false);
  const [selectedUser, setSelectedUser] = useState('Ali Khan');
  const [generatedStory, setGeneratedStory] = useState(null);

  const handleGenerateStory = () => {
    setGeneratingStory(true);
    setTimeout(() => {
      setGeneratedStory({
        userName: selectedUser,
        story: `${selectedUser} finished 2 challenges and shared a beautiful drawing. The family loved it and gave 15 hearts!`,
        achievements: ['2 Challenges', '1 Drawing', '15 Hearts']
      });
      setGeneratingStory(false);
    }, 2000);
  };

  const handleClose = () => {
    setShowGenerateModal(false);
    setGeneratedStory(null);
    setSelectedUser('Ali Khan');
  };

  return (
    <div className="min-h-screen bg-[#EEEAFB] p-1 flex items-center justify-center">
      <div className="h-[800px] w-[200px] mt-12">

        {/* Story Card */}
        <div
          onClick={() => setShowGenerateModal(true)}
          className="bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all hover:scale-105"
        >
          <div className="p-4 text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-3 border-4 border-white border-opacity-30">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>

            <h2 className="text-xl font-bold mb-1">AI Story Highlight!</h2>
            <p className="text-white text-opacity-90 text-sm mb-3">
              AI will create a personalized story highlight
            </p>

            <button className="bg-white text-purple-600 px-5 py-2 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all shadow">
              Generate Story
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
          <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-4">
            <div className="text-center">

              <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-full mb-3">
                {generatingStory ? (
                  <Sparkles className="w-8 h-8 text-white animate-spin" />
                ) : (
                  <Wand2 className="w-8 h-8 text-white" />
                )}
              </div>

              {/* Generating Animation */}
              {generatingStory ? (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Generating Story...</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    AI is analyzing activities
                  </p>

                  <div className="flex justify-center space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </>
              ) : generatedStory ? (

                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Your Story is Ready! ✨
                  </h3>

                  <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-3 mb-4 border-2 border-purple-200 text-left">
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-9 h-9 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                        {generatedStory.userName.split(' ').map(n => n[0]).join('')}
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{generatedStory.userName}</h4>
                        <p className="text-xs text-gray-600">This week</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm mb-3 leading-snug">
                      {generatedStory.story}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {generatedStory.achievements.map((ach, i) => (
                        <div key={i} className="bg-white px-2 py-1 rounded-full border-2 border-purple-300">
                          <span className="text-xs font-semibold text-purple-700">
                            {ach}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="w-full py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-sm hover:opacity-90 transition"
                  >
                    Done
                  </button>
                </>

              ) : (

                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Generate Story Highlight
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    Select a family member
                  </p>

                  <div className="space-y-2 mb-4">
                    {['Ali Khan', 'Grandma Maria', 'Uncle Tom', 'Aunt Lisa'].map((user) => (
                      <button
                        key={user}
                        onClick={() => setSelectedUser(user)}
                        className={`w-full py-2 px-3 rounded-xl text-sm font-semibold transition-all ${
                          selectedUser === user
                            ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {user}
                      </button>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={handleClose}
                      className="flex-1 py-2 border-2 border-gray-300 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={handleGenerateStory}
                      className="flex-1 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-semibold hover:opacity-90 shadow transition"
                    >
                      Generate
                    </button>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AIStoryHighlight;
