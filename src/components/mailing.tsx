"use client";

import React, { useState } from 'react';

const Mail: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const handleSignUpClick = (): void => {
    setPopupVisible(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Handle the email submission here
    console.log('Email submitted:', email);
    setPopupVisible(false); // Close the popup after submission
  };

  const handleClosePopup = (): void => {
    setPopupVisible(false); // Close the popup when X is clicked
  };

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
      <button 
        style={{
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
        onClick={handleSignUpClick}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#3c97a5')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        Sign Up Now
      </button>

      {/* Popup for Email Sign-up */}
      {isPopupVisible && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '1000'
        }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '30px',
            borderRadius: '15px',
            width: '350px',
            textAlign: 'center',
            boxShadow: '0px 0px 20px rgba(60, 151, 165, 0.5)',
            border: '1px solid #3c97a5',
            position: 'relative' // Added for positioning the close button
          }}>
            {/* Close Button (X) */}
            <button
              onClick={handleClosePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#3c97a5',
                fontSize: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'color 0.3s ease-in-out'
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#ff4d4d')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#3c97a5')}
            >
              X
            </button>

            <h2 style={{ 
              color: '#3c97a5', 
              fontSize: '24px', 
              fontWeight: 'bold', 
              marginBottom: '20px',
              fontFamily: 'Arial, sans-serif'
            }}>
              Join the R.O.V Community
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  margin: '10px 0',
                  borderRadius: '8px',
                  border: '1px solid #3c97a5',
                  backgroundColor: '#2a2a2a',
                  color: 'white',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease-in-out'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#3c97a5')}
                onBlur={(e) => (e.target.style.borderColor = '#3c97a5')}
              />
              <button 
                type="submit" 
                style={{
                  backgroundColor: '#3c97a5',
                  color: 'white',
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginTop: '15px',
                  width: '100%',
                  transition: 'background-color 0.3s ease-in-out'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2c7a8a')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3c97a5')}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}

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

    </div>
  );
};

export default Mail;