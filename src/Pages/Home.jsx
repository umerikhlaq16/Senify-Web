import React from 'react'
import Navbar from '../components/Navbar.jsx'
import TalentShowcase from "../components/TalentShowcase.jsx";
import FamilyFeed from '../components/FaimlyFeed.jsx';
import Footer from '../components/Footer.jsx';
import MicroChallenges from '../components/MicroChallenges.jsx';
import AiStory from '../components/AiStory.jsx';

function Home() {
  return (

     <div className="min-h-screen bg-[#EEEAFB]">
        <Navbar />
        <TalentShowcase />
        <FamilyFeed />
        <div className="flex gap-6 px-[70px]">
        <MicroChallenges />
        <AiStory />
        </div>
        <Footer />
    </div>
  )
}

export default Home
