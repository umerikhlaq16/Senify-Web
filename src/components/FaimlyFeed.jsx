import React, { useState } from 'react';
import { Heart, MessageCircle, Clock, Music } from 'lucide-react';

const FamilyFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Grandpa Joseph',
      avatar: 'bg-purple-800',
      initials: 'GJ',
      time: '2 hours ago',
      activity: 'Shared a painting',
      content: 'My latest watercolor of the old family farmhouse. Took me 3 days!',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
      likes: 24,
      comments: 8,
      liked: true,
      type: 'image'
    },
    {
      id: 2,
      author: 'Grandma Maria',
      avatar: 'bg-purple-800',
      initials: 'GM',
      time: '5 hours ago',
      activity: 'Completed singing challenge',
      content: 'Finished the 30-day singing challenge! Here\'s my final song for the family',
      video: true,
      likes: 31,
      comments: 12,
      liked: false,
      type: 'video'
    },
    {
      id: 3,
      author: 'Aunt Lisa',
      avatar: 'bg-purple-800',
      initials: 'AL',
      time: '1 day ago',
      activity: 'Shared a memory',
      content: 'Handmade photo frame with seashells from our Goa trip!',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      likes: 19,
      comments: 5,
      liked: false,
      type: 'image'
    }
  ]);

  const [commentText, setCommentText] = useState({});
  const [showComments, setShowComments] = useState({});

  const sampleComments = {
    1: [
      { author: 'Mom', text: 'Beautiful work, Dad! The colors are stunning 🎨', time: '1h ago' },
      { author: 'Uncle Tom', text: 'Takes me back to childhood memories', time: '30m ago' }
    ],
    2: [
      { author: 'Sarah', text: 'Your voice is beautiful Grandma! ❤️', time: '3h ago' },
      { author: 'David', text: 'So proud of you for completing the challenge!', time: '2h ago' }
    ],
    3: [
      { author: 'Cousin Mike', text: 'That\'s so creative! Love it', time: '12h ago' }
    ]
  };

  const toggleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const toggleComments = (id) => {
    setShowComments({ ...showComments, [id]: !showComments[id] });
  };

  return (
    <div className="min-h-screen bg-[#EEEAFB]">
      {/* Info Card */}
      <div className="rounded-2xl p-2 mt-8 text-center">
        <div className="w-12 h-12 bg-purple-900 rounded-full mx-auto mb-3 flex items-center justify-center">
          <Heart className="w-6 h-6 text-white fill-current" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Family Feed<br />Stay Connected with Family
        </h3>
      </div>

      {/* Main Feed */}
      <div className="max-w-8xl mx-auto px-4 py-8">
        <div className="flex gap-6 justify-center flex-wrap pb-4">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow w-96 flex flex-col"
              style={{ minHeight: '450px' }}
            >
              {/* Post Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full ${post.avatar} flex items-center justify-center text-white text-lg font-bold shadow-md`}>
                    {post.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{post.author}</h3>
                    <div className="flex items-center space-x-2 text-gray-500 text-xs mt-1">
                      <span className="font-medium text-purple-800 text-xs">{post.activity}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4 flex-1 overflow-hidden">
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{post.content}</p>

                {/* Media */}
                {post.type === 'image' && post.image && (
                  <img 
                    src={post.image} 
                    alt="Post content"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                )}
                {post.type === 'video' && (
                  <div className="relative bg-gray-800 h-48 flex items-center justify-center rounded-lg">
                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
                    <button className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                      <Music className="w-8 h-8 text-purple-600 ml-1" />
                    </button>
                  </div>
                )}
              </div>

              {/* Engagement & Actions */}
              <div className="px-4 py-2 border-t border-gray-100 text-xs">
                <div className="flex items-center justify-between text-gray-600 mb-2">
                  <span className="font-medium">{post.likes} loves</span>
                  <span className="font-medium">{post.comments} comments</span>
                </div>

                <div className="flex items-center space-x-1">
                  <button 
                    onClick={() => toggleLike(post.id)}
                    className={`flex-1 flex items-center justify-center space-x-1 py-2 rounded-lg font-semibold transition-all ${
                      post.liked 
                        ? 'bg-purple-50 text-purple-800' 
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${post.liked ? 'fill-current' : ''}`} />
                    <span>Like</span>
                  </button>
                  
                  <button 
                    onClick={() => toggleComments(post.id)}
                    className="flex-1 flex items-center justify-center space-x-1 py-2 rounded-lg hover:bg-gray-50 text-gray-600 font-semibold transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Comment</span>
                  </button>
                </div>
              </div>

              {/* Comments Section */}
              {showComments[post.id] && (
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 overflow-y-auto" style={{ maxHeight: '140px' }}>
                  {sampleComments[post.id]?.map((comment, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3 shadow-sm mb-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold shrink-0 text-xs">
                          {comment.author[0]}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-bold text-gray-800 text-xs">{comment.author}</span>
                            <span className="text-xs text-gray-500">{comment.time}</span>
                          </div>
                          <p className="text-gray-700 text-xs">{comment.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyFeed;
