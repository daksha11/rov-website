"use client";
import React from 'react';

const TeamMembersPage = () => {
  const teamMembers = [
    { id: 'member1', image: '/temp.png' },
    { id: 'member2', image: '/temp.png' },
    { id: 'member3', image: '/temp.png' },
    { id: 'member4', image: '/temp.png' },
    { id: 'member5', image: '/temp.png' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="px-4 flex items-center h-24" style={{backgroundColor:"#ff96ee"}}>
        <div className="flex items-center gap-3 w-full justify-center">
          <img 
            src="/logoblack.png" 
            alt="Company Logo" 
            className="w-20 h-20 object-contain"
          />
          <h1 className="text-2xl text-black m-0 font-normal">Team Members</h1>
        </div>
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