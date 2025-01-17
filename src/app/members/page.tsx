"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for useRouter
import Navbar from '@/components/navbar';
import Footer from '@/components/footer'; // Import the Footer component

const TeamMembersPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter(); // Initialize useRouter

  // Check if the screen is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const teamMembers = [
    { id: 'member1', image: '/temp.png' },
    { id: 'member2', image: '/temp.png' },
    { id: 'member3', image: '/temp.png' },
    { id: 'member4', image: '/temp.png' },
    { id: 'member5', image: '/temp.png' }
  ];

  return (
    <div className="min-h-screen bg-black" id='members' 
    style={{backgroundImage: "url('/paper_texture_back_2.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed', }}>
      {/* Navbar */}
      <Navbar />

      {/* Grid Container with wider spacing */}
      <div className="flex flex-wrap justify-between p-10 max-w-6xl mx-auto pt-20"> {/* Added pt-20 for padding-top */}
        {teamMembers.map((member, index) => (
          <div 
            key={member.id}
            className={`relative w-[40%] h-64 rounded-lg overflow-hidden mb-8 ${index % 2 === 0 ? 'mt-12' : 'mt-4'}`}
            style={{ marginBottom: '2rem', marginTop: index % 2 === 0 ? '1.5rem' : '10rem' }}
          >
            <img
              src={member.image}
              alt={`Team Member ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamMembersPage;