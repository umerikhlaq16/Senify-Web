import React, { useState } from 'react';
import { Heart, UserPlus, Hand, MessageSquarePlus, Clock, Trash2 } from 'lucide-react';

export default function VolunteerConnect() {
  const [volunteers, setVolunteers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [activeTab, setActiveTab] = useState('volunteers');
  const [showModal, setShowModal] = useState(null);
  const [formData, setFormData] = useState({ name: '', content: '' });

  const addVolunteer = () => {
    if (formData.name.trim() && formData.content.trim()) {
      setVolunteers([...volunteers, { 
        id: Date.now(), 
        name: formData.name, 
        skills: formData.content,
        date: new Date().toLocaleDateString()
      }]);
      setFormData({ name: '', content: '' });
      setShowModal(null);
    }
  };

  const addRequest = () => {
    if (formData.name.trim() && formData.content.trim()) {
      setRequests([...requests, { 
        id: Date.now(), 
        name: formData.name, 
        need: formData.content,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setFormData({ name: '', content: '' });
      setShowModal(null);
    }
  };

  const deleteItem = (id, type) => {
    if (type === 'volunteer') {
      setVolunteers(volunteers.filter(v => v.id !== id));
    } else {
      setRequests(requests.filter(r => r.id !== id));
    }
  };

  // Offer help function
  const offerHelp = (request) => {
    // Remove from requests
    setRequests(requests.filter(r => r.id !== request.id));

    // Add to volunteers as helper
    setVolunteers([
      ...volunteers,
      {
        id: Date.now(),
        name: `Helper for ${request.name}`, // Replace with actual helper if needed
        skills: request.need,
        date: new Date().toLocaleDateString()
      }
    ]);
  };

  return (
    <div className="h-[400px] w-[400px] bg-[#EEEAFB] pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        {/* Add New Card */}
        <div className="bg-gray-50 rounded-3xl p-6 text-black flex flex-col w-[450px] h-[400px]">
          <div className="flex items-center justify-center text-center gap-3 mb-4">
            <h3 className="text-[20px] font-bold items-center justify-center text-center">Community Connect</h3>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab('volunteers')}
              className={`flex-1 px-3 py-1.5 rounded-full font-semibold transition-all text-xs ${
                activeTab === 'volunteers' 
                  ? 'bg-purple-800 text-white hover:bg-purple-900 shadow-lg' 
                  : 'bg-purple-800 text-white hover:bg-purple-900'
              }`}
            >
              <div className="flex items-center justify-center gap-1">
                <UserPlus className="w-3 h-3" />
                <span>Volunteers ({volunteers.length})</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`flex-1 p-3 rounded-full font-semibold transition-all text-xs ${
                activeTab === 'requests' 
                  ? 'bg-purple-800 text-white hover:bg-purple-900 shadow-lg' 
                  : 'bg-purple-800 text-white hover:bg-purple-900'
              }`}
            >
              <div className="flex items-center justify-center gap-1">
                <Hand className="w-3 h-3" />
                <span>Requests ({requests.length})</span>
              </div>
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="bg-purple-800 text-white backdrop-blur-sm rounded-full p-4 mb-3 transition-all">
              {activeTab === 'volunteers' ? <UserPlus className="w-8 h-8" /> : <MessageSquarePlus className="w-8 h-8" />}
            </div>
            <h3 className="text-xl font-bold mb-2">
              {activeTab === 'volunteers' ? 'Become a Volunteer' : 'Request Help'}
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              {activeTab === 'volunteers' 
                ? 'Share your skills and help others in your community' 
                : 'Let the community know how they can support you'}
            </p>
          </div>

          <button 
            onClick={() => setShowModal(activeTab === 'volunteers' ? 'volunteer' : 'request')}
            className="w-full bg-purple-800 text-white py-2.5 rounded-2xl font-semibold hover:shadow-lg transition-all text-sm"
          >
            {activeTab === 'volunteers' ? 'Sign Up' : 'Submit Request'}
          </button>
        </div>

        {/* Volunteers List */}
        {activeTab === 'volunteers' && volunteers.map((volunteer) => (
          <div key={volunteer.id} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 w-[300px] h-[400px] flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-linear-to-br from-violet-400 to-purple-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">
                  {volunteer.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{volunteer.name}</h3>
                  <p className="text-xs text-gray-500">{volunteer.date}</p>
                </div>
              </div>
              <button 
                onClick={() => deleteItem(volunteer.id, 'volunteer')}
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 mb-4">
              <div className="text-sm text-gray-500 mb-2 font-semibold">Can help with:</div>
              <p className="text-gray-700 leading-relaxed">{volunteer.skills}</p>
            </div>
            
            <button className="w-full bg-linear-to-r from-violet-500 to-purple-500 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all">
              Connect
            </button>
          </div>
        ))}

        {/* Help Requests List */}
        {activeTab === 'requests' && requests.map((request) => (
          <div key={request.id} className="bg-gray-50 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 w-[300px] h-[400px] flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-linear-to-br from-purple-700 to-purple-800 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">
                  {request.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{request.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {request.time}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => deleteItem(request.id, 'request')}
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 mb-4">
              <div className="text-sm text-gray-500 mb-2 font-semibold">Needs help with:</div>
              <p className="text-gray-700 leading-relaxed">{request.need}</p>
            </div>
            
            <button
              onClick={() => offerHelp(request)}
              className="w-full bg-linear-to-r from-purple-800 to-purple-900 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all"
            >
              Offer Help
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setShowModal(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              {showModal === 'volunteer' ? 'Become a Volunteer' : 'Request Help'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-violet-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {showModal === 'volunteer' ? 'What can you help with?' : 'What do you need help with?'}
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder={showModal === 'volunteer' 
                    ? 'e.g., Art, Singing, Storytelling, Craft...' 
                    : 'e.g., Need help with groceries, looking for a tutor, need transportation...'}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-violet-500 focus:outline-none transition-colors h-32 resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowModal(null)}
                className="flex-1 px-6 py-3 rounded-2xl border-2 border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={showModal === 'volunteer' ? addVolunteer : addRequest}
                className="flex-1 px-6 py-3 rounded-2xl bg-linear-to-r from-purple-800 to-purple-900 text-white font-semibold hover:shadow-lg transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
