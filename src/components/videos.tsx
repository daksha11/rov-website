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
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundImage: "url('/StarBack.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    fontSize: isMobile ? "40px" : "70px", // Responsive font size
    margin: isMobile ? "0 20px" : "0 50px", // Responsive margin
    textAlign: "center",
  };

  const verticalTextStyle360: React.CSSProperties = {
    writingMode: "vertical-rl",
    transform: "rotate(360deg)",
    fontSize: isMobile ? "40px" : "70px", // Responsive font size
    margin: isMobile ? "0 20px" : "0 50px", // Responsive margin
    textAlign: "center",
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
          <div style={verticalTextStyle180}>Latest videos</div>
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
          <div style={verticalTextStyle360}>Latest videos</div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;