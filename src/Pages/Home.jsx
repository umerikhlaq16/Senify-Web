import React from 'react'
import Navbar from '../components/Navbar.jsx'
import TalentShowcase from "../components/TalentShowcase.jsx";
import FamilyFeed from '../components/FaimlyFeed.jsx';
import Footer from '../components/Footer.jsx';
import MicroChallenges from '../components/MicroChallenges.jsx';
import AiStory from '../components/AiStory.jsx';
import Volunteer from '../components/Volunteer.jsx';
import AutoSlider from '../components/AutoSlider.jsx';

function Home() {
  return (

     <div className="min-h-screen bg-[#EEEAFB]">
       <Navbar />
        <AutoSlider />
        <TalentShowcase />
        <FamilyFeed />
        <div className="h-[550px] flex items-start justify-center p-2 space-x-3 mr-13 ">
      <MicroChallenges />
      <AiStory />
      <Volunteer />
    </div>
        <Footer />
    </div>
  )
}

export default Home
