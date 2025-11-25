import React, { useState } from "react";

export default function TalentShowcase() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const uploaded = e.target.files[0];
    setFile(uploaded);

    if (uploaded) {
      const fileURL = URL.createObjectURL(uploaded);
      setPreview(fileURL);
    }
  };

  return (
    <div className="px-20 py-5">
      <div className="flex items-start justify-between gap-14 w-full">

        {/* -------- LEFT -------- */}
        <div className="w-[40%]">
          <h1 className="text-4xl font-bold">Talent Showcase</h1>
          <p className="text-gray-600 text-md mt-3 leading-relaxed">
  Share your gift with the world 🌟 <br />
  Inspire others with your creativity and passion! <br />
  Let your talent shine and become the spark that lights up someone’s journey ✨
</p>

        </div>

        {/* -------- CARDS SECTION -------- */}
        <div className="flex gap-4">

          {/* --- UPLOAD BOX CARD --- */}
          <div className="w-[180px] h-[180px] bg-gray-50 border-2 border-purple-300 rounded-2xl flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition relative">

            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="absolute opacity-0 w-full h-full cursor-pointer"
            />

            {!preview ? (
              <span className="text-5xl text-purple-800 font-bold">+</span>
            ) : file?.type?.startsWith("image") ? (
              <img src={preview} alt="preview" className="w-full h-full object-cover rounded-2xl" />
            ) : (
              <video src={preview} controls className="w-full h-full rounded-2xl" />
            )}
          </div>

          {/* --- SAMPLE TALENT CARD 1 --- */}
          <div className="w-[180px] h-[180px] bg-gray-50 shadow-md border border-purple-200 rounded-2xl p-5 text-center">
            <div className="text-4xl text-purple-700 mb-3">🎨</div>
            <h3 className="font-bold text-lg">Art Showcase</h3>
            <p className="text-gray-500 text-sm mt-1">
              Upload drawings, sketches & digital art
            </p>
          </div>

          {/* --- SAMPLE TALENT CARD 2 --- */}
          <div className="w-[180px] h-[180px] bg-gray-50 shadow-md border border-purple-200 rounded-2xl p-5 text-center">
            <div className="text-4xl text-purple-700 mb-3">🎤</div>
            <h3 className="font-bold text-lg">Singing Talent</h3>
            <p className="text-gray-500 text-sm mt-1">
              Share your voice with the world
            </p>
          </div>

          {/* --- SAMPLE TALENT CARD 3 --- */}
          <div className="w-[180px] h-[180px] bg-gray-50 shadow-md border border-purple-200 rounded-2xl p-5 text-center">
            <div className="text-4xl text-purple-700 mb-3">✂</div>
            <h3 className="font-bold text-lg">Craft & DIY</h3>
            <p className="text-gray-500 text-sm mt-1">
              Showcase creative handmade work
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
