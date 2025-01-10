"use client";

import React from "react";

const VideoPage: React.FC = () => {
  return (
    <div
      style={{
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
      }}
    >
      {/* Main Container with Flexible Layout */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "200px",
        }}
      >
        {/* Left Section */}
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={verticalTextStyle180}>Latest videos</div>
          <VideoPlayer />
        </div>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <VideoPlayer />
          <div style={verticalTextStyle360}>Latest videos</div>
        </div>
      </div>
    </div>
  );
};

// Common Styles
const verticalTextStyle180: React.CSSProperties = {
  writingMode: "vertical-rl",
  transform: "rotate(180deg)",
  fontSize: "70px",
  margin: "0 50px",
  textAlign: "center",
};

const verticalTextStyle360: React.CSSProperties = {
  writingMode: "vertical-rl",
  transform: "rotate(360deg)",
  fontSize: "70px",
  margin: "0 50px",
  textAlign: "center",
};

// Video Player Component
const VideoPlayer: React.FC = () => {
  return (
    <div
      className="video-container"
      style={{
        width: "250px",
        height: "450px",
        position: "relative",
        backgroundImage: "url('/ipod.png')", // Replace with the actual path to your iPod image
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Video on Black Screen */}
      <video
        style={{
          position: "absolute",
          top: "7%", // Adjust to position the video correctly within the iPod screen
          left: "6.3%", // Adjust to position the video correctly within the iPod screen
          width: "87%", // Adjust to fit the black screen area
          height: "62%", // Adjust to fit the black screen area
          backgroundColor: "black",
          borderRadius: "5px",  
        }}
        src="/DiscRec.mp4" // Replace with your video file
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoPage;