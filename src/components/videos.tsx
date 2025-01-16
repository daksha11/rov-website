"use client";

import React, { useEffect, useState } from "react";

const VideoPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  // Styles
  const pageStyle: React.CSSProperties = {
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Rhino, Arial, sans-serif", // Updated font family
    padding: "20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url('/paper_texture_back_2.png')",
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed'
  };

  const mainContainerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: isMobile ? "50px" : "200px", // Responsive gap
  };

  const verticalTextStyle180: React.CSSProperties = {
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    fontSize: isMobile ? "30px" : "50px", // Adjusted font size
    margin: isMobile ? "0 10px" : "0 20px", // Adjusted margin
    textAlign: "center",
    fontFamily: "Rhino, Arial, sans-serif", // Updated font family
    fontWeight: "bold", // Make text bolder
    maxHeight: isMobile ? "270px" : "450px", // Match iPod height
    overflow: "hidden", // Prevent text overflow
  };

  const verticalTextStyle360: React.CSSProperties = {
    writingMode: "vertical-rl",
    transform: "rotate(360deg)",
    fontSize: isMobile ? "30px" : "50px", // Adjusted font size
    margin: isMobile ? "0 10px" : "0 20px", // Adjusted margin
    textAlign: "center",
    fontFamily: "Rhino, Arial, sans-serif", // Updated font family
    fontWeight: "bold", // Make text bolder
    maxHeight: isMobile ? "270px" : "450px", // Match iPod height
    overflow: "hidden", // Prevent text overflow
  };

  const videoContainerStyle: React.CSSProperties = {
    width: isMobile ? "150px" : "250px", // Responsive width
    height: isMobile ? "270px" : "450px", // Responsive height
    position: "relative",
    backgroundImage: "url('/ipod.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
  };

  const videoStyle: React.CSSProperties = {
    position: "absolute",
    top: isMobile ? "6%" : "7%", // Responsive positioning
    left: isMobile ? "6%" : "6.3%", // Responsive positioning
    width: isMobile ? "88%" : "87%", // Responsive width
    height: isMobile ? "60%" : "62%", // Responsive height
    backgroundColor: "black",
    borderRadius: "5px",
  };

  return (
    <div style={pageStyle}>
      {/* Main Container with Flexible Layout */}
      <div style={mainContainerStyle}>
        {/* Left Section */}
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={verticalTextStyle180}>LATEST VIDEOS</div>
          <div style={videoContainerStyle}>
            <video 
              style={videoStyle} 
              src="/DiscRec.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline // Ensures video plays inline on mobile devices
            />
          </div>
        </div>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={videoContainerStyle}>
            <video 
              style={videoStyle} 
              src="/DiscRec.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline // Ensures video plays inline on mobile devices
            />
          </div>
          <div style={verticalTextStyle360}>LATEST VIDEOS</div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;