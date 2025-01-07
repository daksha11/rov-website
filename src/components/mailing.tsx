"use client";

import React from 'react';

const Mail: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      fontFamily: 'Arial, sans-serif', 
      padding: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      
      {/* Header */}
      <div style={{ 
        backgroundColor: '#3c97a5', 
        width: '100%', 
        padding: '7px 0 7px',
        display: 'flex',
        justifyContent: 'space-around',  
        alignItems: 'center',
        fontSize: '40px',
        fontWeight: 'bold',
        marginBottom: '100px',
        marginTop: '0'
      }}>
        <span>RANGE OF VIEW</span>
        <span>RANGE OF VIEW</span>
        <span>RANGE OF VIEW</span>
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
        position: 'relative',
        width: '300px',
        height: '270px',
        backgroundImage: `url('tv.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Content Image */}
        <img 
          src="cover2.png" 
          alt="Content inside TV" 
          style={{
            position: 'absolute',
            top: '30px', // Adjust to align with the TV screen
            left: '30px', // Adjust to align with the TV screen
            width: '230px', // Match the screen's width
            height: '180px', // Match the screen's height
            objectFit: 'cover',
            zIndex: '1', // Ensure it appears on top of the TV background
            borderRadius: '10px'
          }} 
        />
      </div>

        {/* Right Text Section */}
        <div style={{
          maxWidth: '400px',
          textAlign: 'right',
          fontSize: '35px',
          fontWeight: 'bold',
          color: '#3c97a5',
          paddingLeft: '60px'
        }}>
          Catch the latest updates about R.O.V by signing yourself up on our email list.
        </div>
      </div>

      {/* Mailing List Button */}
      <button style={{
        backgroundColor: 'transparent',
        border: '2px solid #3c97a5',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '30px',
        fontSize: '18px',
        cursor: 'pointer',
        marginTop: '30px',
        width: '80%',  // Extended width
        maxWidth: '1000px',
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3c97a5'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
        Sign Up Now
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
        gap: '130px'
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

export default Mail;
