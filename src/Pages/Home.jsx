import React from 'react'
import Navbar from '../components/Navbar.jsx'
import TalentShowcase from "../components/TalentShowcase.jsx";
import FamilyFeed from '../components/FaimlyFeed.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (

     <div className="min-h-screen bg-[#EEEAFB]">
        <Navbar />
        <TalentShowcase />
        <FamilyFeed />
        <Footer />
    </div>
  )
}

export default Home
