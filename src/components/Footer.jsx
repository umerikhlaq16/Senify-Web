// footer.jsx
import React from 'react';
import { Heart, Users, Sparkles, Mail, Phone, Globe, Facebook, Instagram, Twitter, HeartHandshake } from 'lucide-react';
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-purple-900 mt-24 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Main Footer Card */}
        <div className="bg-white backdrop-blur-xl rounded-3xl shadow-lg border border-purple-100 py-10 px-14">
             <div className="flex space-x-4 mb-10 text-center justify-center">
                <a href="#" className="p-3 bg-purple-100 rounded-xl hover:bg-purple-200 transition">
                  <Facebook size={20} className="text-purple-800" />
                </a>
                <a href="#" className="p-3 bg-purple-100 rounded-xl hover:bg-purple-200 transition">
                  <Instagram size={20} className="text-purple-800" />
                </a>
                <a href="#" className="p-3 bg-purple-100 rounded-xl hover:bg-purple-200 transition">
                  <Twitter size={20} className="text-purple-800" />
                </a>
              </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand & Mission */}
            <div className="md:col-span-1">
              <div className="flex ">
                <img src={logo} alt="Senify Logo" className="h-40 w-auto mb-10 cursor-pointer" />
              </div>
              {/* <p className="text-gray-600 leading-relaxed">
                A warm digital home where elders and differently-abled loved ones 
                <span className="text-purple-600 font-semibold"> share their talents</span>, 
                feel seen, and stay connected with family
              </p> */}
             
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-5">Explore</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition flex items-center"> Talent Showcase</a></li>
                <li><a href="#" className="hover:text-purple-600 transition flex items-center"> Family Feed</a></li>
                <li><a href="#" className="hover:text-purple-600 transition flex items-center "> Daily Challenges</a></li>
                <li><a href="#" className="hover:text-purple-600 transition flex items-center"> Volunteer Help</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-5">Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition">How It Works</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Family Privacy</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Volunteer Guidelines</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact & Love Note */}
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-5">Get in Touch</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center">
                  <Mail size={18} className="mr-3 text-purple-600" />
                  <span>hello@senify.app</span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-purple-600" />
                  <span>+92 300 1234567</span>
                </div>
                <div className="flex items-center">
                  <Globe size={18} className="mr-3 text-purple-600" />
                  <span>www.senify.app</span>
                </div>
              </div>

    
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-16 pt-8 border-t border-gray-400 flex flex-col md:flex-row justify-center items-center text-gray-500 text-sm">
            <p>© 2025 Senify. All rights reserved. </p>
        
          </div>
        </div>
      </div>
    </footer>
  );
}