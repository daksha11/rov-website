"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Mail: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isSuccess, setSuccess] = useState<boolean>(false); // State for success animation
  const [isDuplicate, setDuplicate] = useState<boolean>(false); // State for duplicate email
  const [isMobile, setIsMobile] = useState<boolean>(false); // State to check if the screen is mobile

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

  const handleSignUpClick = (): void => {
    setPopupVisible(true);
    setSuccess(false); // Reset success state when popup is opened
    setDuplicate(false); // Reset duplicate state when popup is opened
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    // Validate email (simple validation)
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      // Send the email to the backend
      const response = await axios.post('http://localhost:5000/subscribe', { email });

      // Simulate a successful registration
      setSuccess(true);
      setDuplicate(false); // Reset duplicate state
      setTimeout(() => {
        setPopupVisible(false); // Close the popup after 2 seconds
        setSuccess(false); // Reset success state
      }, 2000); // Delay to show the tick animation
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 409) {
          setDuplicate(true); // Set duplicate state
          setTimeout(() => {
            setDuplicate(false); // Reset duplicate state after 5 seconds
            setPopupVisible(false); // Close the popup after 5 seconds
          }, 3000); // Delay to show the duplicate animation for 5 seconds
        } else {
          console.error('Error subscribing:', error);
          alert('Failed to subscribe. Please try again.');
        }
      } else {
        console.error('Unexpected error:', error);
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };

  const handleClosePopup = (): void => {
    setPopupVisible(false);
  };

  // Responsive Styles
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#3c97a5',
    width: '100%',
    padding: isMobile ? '10px 0' : '7px 0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: isMobile ? '20px' : '40px',
    fontWeight: '800', // Bolder font weight
    marginBottom: isMobile ? '50px' : '100px',
    marginTop: '0',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    fontFamily: 'Rhino, Arial, sans-serif', // Updated font family
  };

  const tvContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '85%',
    maxWidth: '900px',
    marginTop: isMobile ? '20px' : '40px',
    gap: isMobile ? '20px' : '30px',
  };

  const tvStyle: React.CSSProperties = {
    position: 'relative',
    width: isMobile ? '200px' : '300px',
    height: isMobile ? '180px' : '270px',
    backgroundImage: `url('tv.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const contentImageStyle: React.CSSProperties = {
    position: 'absolute',
    top: isMobile ? '20px' : '30px',
    left: isMobile ? '20px' : '30px',
    width: isMobile ? '150px' : '230px',
    height: isMobile ? '120px' : '180px',
    objectFit: 'cover',
    zIndex: '1',
    borderRadius: '10px',
  };

  const rightTextStyle: React.CSSProperties = {
    maxWidth: '400px',
    textAlign: isMobile ? 'center' : 'right',
    fontSize: isMobile ? '24px' : '35px',
    fontWeight: '700', // Bolder font weight
    color: '#3c97a5',
    paddingLeft: isMobile ? '0' : '60px',
    fontFamily: 'Rhino, Arial, sans-serif', // Updated font family
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: '2px solid #3c97a5',
    color: 'white',
    padding: '15px 20px',
    borderRadius: '30px',
    fontSize: isMobile ? '16px' : '18px',
    cursor: 'pointer',
    marginTop: isMobile ? '20px' : '30px',
    width: '80%',
    maxWidth: '1000px',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
    fontFamily: 'Rhino, Arial, sans-serif', // Updated font family
    fontWeight: '900', // Bolder font weight
  };

  return (
    <div style={{
      color: 'white',
      fontFamily: 'Rhino, Arial, sans-serif', // Updated font family
      padding: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundImage: "url('/paper_texture_back_2.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed'
    }}>

      {/* Header */}
      <div style={headerStyle}>
        <span>RANGE OF VIEW</span>
        <span>RANGE OF VIEW</span>
        {!isMobile && <span>RANGE OF VIEW</span>} {/* Conditionally render the third span */}
      </div>

      {/* TV and Right Text Container */}
      <div style={tvContainerStyle}>

        {/* TV Section */}
        <div style={tvStyle}>
          <img
            src="cover2.png"
            alt="Content inside TV"
            style={contentImageStyle}
          />
        </div>

        {/* Right Text Section */}
        <div style={rightTextStyle}>
          Catch the latest updates about R.O.V by signing yourself up on our email list.
        </div>
      </div>

      {/* Mailing List Button */}
      <button
        style={buttonStyle}
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
          zIndex: '1000',
        }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '30px',
            borderRadius: '15px',
            width: isMobile ? '80%' : '350px',
            textAlign: 'center',
            boxShadow: '0px 0px 20px rgba(60, 151, 165, 0.5)',
            border: '1px solid #3c97a5',
            position: 'relative',
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
                fontWeight: '900', // Bolder font weight
                transition: 'color 0.3s ease-in-out',
                fontFamily: 'Rhino, Arial, sans-serif', // Updated font family
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#ff4d4d')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#3c97a5')}
            >
              X
            </button>

            {/* Success Tick Animation */}
            {isSuccess ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '3px solid #3c97a5',
                  margin: '0 auto 20px',
                  position: 'relative',
                  animation: 'tickAnimation 0.6s ease-in-out',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '20px',
                    height: '40px',
                    borderBottom: '3px solid #3c97a5',
                    borderRight: '3px solid #3c97a5',
                    transform: 'translate(-50%, -60%) rotate(45deg)',
                  }} />
                </div>
                <h2 style={{
                  color: '#3c97a5',
                  fontSize: '24px',
                  fontWeight: '900', // Bolder font weight
                  marginBottom: '20px',
                  fontFamily: 'Rhino, Arial, sans-serif', // Updated font family
                }}>
                  Thank You!
                </h2>
                <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Rhino, Arial, sans-serif', fontWeight: '900' }}>
                  You've successfully subscribed.
                </p>
              </div>
            ) : isDuplicate ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '3px solid #ff4d4d',
                  margin: '0 auto 20px',
                  position: 'relative',
                  animation: 'wrongAnimation 0.6s ease-in-out',
                }}>
                  {/* First diagonal line (top-left to bottom-right) */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '30px',
                    height: '3px',
                    backgroundColor: '#ff4d4d',
                    transform: 'translate(-50%, -50%) rotate(45deg)',
                  }} />
                  {/* Second diagonal line (top-right to bottom-left) */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '30px',
                    height: '3px',
                    backgroundColor: '#ff4d4d',
                    transform: 'translate(-50%, -50%) rotate(-45deg)',
                  }} />
                </div>
                <h2 style={{
                  color: '#ff4d4d',
                  fontSize: '24px',
                  fontWeight: '900', // Bolder font weight
                  marginBottom: '20px',
                  fontFamily: 'Rhino, Arial, sans-serif', // Updated font family
                }}>
                  Email Already Subscribed
                </h2>
                <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Rhino, Arial, sans-serif', fontWeight: '900' }}>
                  This email is already on our list.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{
                  color: '#3c97a5',
                  fontSize: '24px',
                  fontWeight: '900', // Bolder font weight
                  marginBottom: '20px',
                  fontFamily: 'Rhino, Arial, sans-serif', // Updated font family
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
                      transition: 'border-color 0.3s ease-in-out',
                      fontFamily: 'Rhino, Arial, sans-serif', // Updated font family
                      fontWeight: '900', // Bolder font weight
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
                      fontWeight: '900', // Bolder font weight
                      marginTop: '15px',
                      width: '100%',
                      transition: 'background-color 0.3s ease-in-out',
                      fontFamily: 'Rhino, Arial, sans-serif', // Updated font family
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2c7a8a')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3c97a5')}
                  >
                    Subscribe
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* CSS for Animations */}
      <style>
        {`
          @keyframes tickAnimation {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes wrongAnimation {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Mail;