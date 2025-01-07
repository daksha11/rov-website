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
          <div style={verticalTextStyle360}>Latest videos</div>
          <VideoPlayer />
        </div>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <VideoPlayer />
          <div style={verticalTextStyle180}>Latest videos</div>
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
  transform: "rotate(3600deg)",
  fontSize: "70px",
  margin: "0 50px",
  textAlign: "center",
};

const scrollBoxStyle: React.CSSProperties = {
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#3b96a2",
  padding: "10px 0",
  marginTop: "20px",
  whiteSpace: "nowrap",
  position: "relative",
};

const scrollTextStyle: React.CSSProperties = {
  display: "inline-block",
  fontSize: "24px",
  color: "white",
  animation: "scrollText 10s linear infinite",
};

// Video Player Component
const VideoPlayer: React.FC = () => {
  return (
    <div
      className="video-container"
      style={{
        background: "linear-gradient(to bottom, #1e90ff, #87cefa)",
        width: "90%", // Responsive width
        maxWidth: "250px", // Limit max width
        height: "450px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <video
        style={{
          width: "90%",
          height: "65%",
          backgroundColor: "black",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
        src="/DiscRec.mp4"
        autoPlay
        loop
        muted
      />

      {/* Circular Control Section */}
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          border: "2px solid #ccc",
        }}
      >
        {/* MENU Button */}
        <div style={{ position: "absolute", top: "10px", fontSize: "12px", fontWeight: "bold", color: "black" }}>
          MENU
        </div>

        {/* Left & Right Buttons */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "100%",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "16px",
            color: "black",
            justifyContent: "space-between",
            padding: "0 15px",
          }}
        >
          <span>&lt;&lt;</span>
          <span>&gt;&gt;</span>
        </div>

        {/* Play Button */}
        <div style={{ position: "absolute", bottom: "10px", fontSize: "16px", fontWeight: "bold", color: "black" }}>
          ▶
        </div>

        {/* Center Non-Button Element */}
        <div
          style={{
            position: "absolute",
            width: "35px",
            height: "35px",
            backgroundColor: "#e0e0e0",
            borderRadius: "50%",
            border: "2px solid #ccc",
            zIndex: "-1",
          }}
        ></div>
      </div>
    </div>
  );
};

export default VideoPage;
