"use client";

import React from 'react';

const RangeOfView: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      fontFamily: 'Arial, sans-serif', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      
      {/* Header */}
      <div style={{ 
        backgroundColor: '#66b2ff', 
        width: '100%', 
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'space-around',  
        alignItems: 'center',
        fontSize: '22px',
        fontWeight: 'bold'
      }}>
        <span>Range of view</span>
        <span>Range of view</span>
        <span>Range of view</span>
      </div>

      {/* TV and Right Text Container */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '85%',
        maxWidth: '900px',
        marginTop: '40px',
        gap: '30px'
      }}>
        
        {/* TV Section */}
        <div style={{
          width: '300px',
          height: '270px',
          backgroundImage: `url('tv.png')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '14px',
          padding: '10px'
        }}>
          <p style={{ width: '70%' }}>a collection of diverse music artists.</p>
        </div>

        {/* Right Text Section */}
        <div style={{
          maxWidth: '400px',
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          Catch the latest updates about R.O.V by signing yourself up on our email list.
        </div>
      </div>

      {/* Mailing List Button */}
      <button style={{
        backgroundColor: 'transparent',
        border: '2px solid #66b2ff',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '30px',
        fontSize: '18px',
        cursor: 'pointer',
        marginTop: '30px',
        width: '80%',  // Extended width
        maxWidth: '600px',
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#66b2ff'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
        Mailing list button
      </button>

      {/* Images Section - Chakra & Collage */}
      <div style={{ 
        marginTop: '40px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '85%',  
        maxWidth: '900px', 
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        
        {/* Chakra Image */}
        <div>
          <img
            src="chakra.png"
            alt="Chakra"
            style={{ width: '250px', height: '350px', objectFit: 'contain' }}
          />
        </div>

        {/* Album Covers Collage */}
        <div style={{ position: 'relative', width: '350px', height: '350px' }}> 
          <img
            src="cover1.png"
            alt="Artwork 1"
            style={{ 
              width: '200px', 
              height: '200px', 
              objectFit: 'cover', 
              position: 'absolute', 
              top: '10px', 
              left: '20px', 
              transform: 'rotate(-15deg)', 
              zIndex: '1' 
            }}
          />
          <img
            src="rov_album_3.webp"
            alt="Artwork 2"
            style={{ 
              width: '200px', 
              height: '200px', 
              objectFit: 'cover', 
              position: 'absolute', 
              top: '60px', 
              right: '10px', 
              transform: 'rotate(10deg)', 
              zIndex: '2' 
            }}
          />
          <img
            src="cover2.png"
            alt="Artwork 3"
            style={{ 
              width: '200px', 
              height: '200px', 
              objectFit: 'cover', 
              position: 'absolute', 
              bottom: '10px', 
              left: '40px', 
              transform: 'rotate(25deg)', 
              zIndex: '3' 
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        marginTop: '80px', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px' 
      }}>
        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
          <img src="gmaillogo.png" alt="Gmail" style={{ width: '40px', height: '40px' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="instalogo.png" alt="Instagram" style={{ width: '40px', height: '40px' }} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="xlogo.png" alt="Twitter" style={{ width: '40px', height: '40px' }} />
        </a>
      </div>

    </div>
  );
};

export default RangeOfView;
