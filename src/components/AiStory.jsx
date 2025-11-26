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
    <div className="h-[400px] w-[250px] mt-12 p-4 rounded-3xl flex items-center justify-center">
  <div >

        {/* Generate New Story Card */}
        <div 
          onClick={() => setShowGenerateModal(true)}
          className="bg-linear-to-br from-purple-600 via-purple-700 to-purple-700 rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105"
        >
          <div className="p-8 text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500 bg-opacity-20 backdrop-blur-sm rounded-full mb-4 border-4 border-white border-opacity-30">
              <Sparkles className="w-10 h-10 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold mb-2">AI Story Highlight!</h2>
            <p className="text-white text-opacity-90 mb-4">
              AI will create a personalized story highlight for you
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
              Generate Story
            </button>
          </div>
        </div>
      </div>

      {/* Generate Story Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-purple-700 to-purple-800 rounded-full mb-4">
                {generatingStory ? (
                  <Sparkles className="w-10 h-10 text-white animate-spin" />
                ) : (
                  <Wand2 className="w-10 h-10 text-white" />
                )}
              </div>
              
              {generatingStory ? (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Generating Story...</h3>
                  <p className="text-gray-600 mb-6">AI is analyzing activities and creating your personalized story highlight</p>
                  <div className="flex justify-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-purple-700 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-3 h-3 bg-purple-800 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-3 h-3 bg-purple-700 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </>
              ) : generatedStory ? (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Story is Ready! ✨</h3>
                  
                  {/* Generated Story Card */}
                  <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6 text-left border-2 border-purple-200">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-800 to-purple-900 flex items-center justify-center text-white font-bold">
                        {generatedStory.userName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{generatedStory.userName}</h4>
                        <p className="text-xs text-gray-600">This week</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {generatedStory.story}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {generatedStory.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="bg-white px-3 py-1.5 rounded-full border-2 border-purple-300"
                        >
                          <span className="text-xs font-semibold text-purple-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="w-full py-3 bg-linear-to-r from-purple-800 to-purple-900 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-md"
                  >
                    Done
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Generate Story Highlight</h3>
                  <p className="text-gray-600 mb-6">Select a family member to generate their weekly story highlight</p>
                  
                  <div className="space-y-3 mb-6">
                    {['Ali Khan', 'Grandma Maria', 'Uncle Tom', 'Aunt Lisa'].map((user) => (
                      <button
                        key={user}
                        onClick={() => setSelectedUser(user)}
                        className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                          selectedUser === user
                            ? 'bg-linear-to-r from-purple-500 to-purple-700 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {user}
                      </button>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={handleClose}
                      className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleGenerateStory}
                      className="flex-1 py-3 bg-linear-to-r from-purple-500 to-purple-700 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-md"
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