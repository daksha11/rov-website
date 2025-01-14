"use client";

import React, { useEffect, useState } from 'react';

const TeamMembersPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  // Header Style
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#ff96ee',
    width: '100%',
    padding: isMobile ? '10px 0' : '7px 0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: isMobile ? '20px' : '40px',
    fontWeight: 'bold',
    marginBottom: isMobile ? '50px' : '100px',
    marginTop: '0',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    color: "black"
  };

  return (
    <div className="min-h-screen bg-black" id='members' style={{ paddingTop: '50px' }}> {/* Added padding-top for gap */}
      {/* Header */}
      <div style={headerStyle}>
        <span>RANGE OF VIEW</span>
        <span>RANGE OF VIEW</span>
        {!isMobile && <span>RANGE OF VIEW</span>} {/* Conditionally render the third span */}
      </div>

      {/* Grid Container with wider spacing */}
      <div className="flex flex-wrap justify-between p-10 max-w-6xl mx-auto">
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
    </div>
  );
};

export default TeamMembersPage;