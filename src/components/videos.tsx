"use client";

import React from "react";

const VideoPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px 15rem",
        backgroundImage: "url('/StarBack.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Vertical Text on Left */}
        <div
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "70px",
            marginRight: "100px",
          }}
        >
          Latest videos
        </div>

        {/* First Player */}
        <VideoPlayer />
      </div>

      {/* Right Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Second Player */}
        <VideoPlayer />

        {/* Vertical Text on Right */}
        <div
          style={{
            writingMode: "vertical-rl",
            fontSize: "70px",
            marginLeft: "100px",
          }}
        >
          Latest videos
        </div>
      </div>
    </div>
  );
};

const VideoPlayer: React.FC = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #1e90ff, #87cefa)",
        width: "250px",
        height: "450px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.14)")}
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
        <div
          style={{
            position: "absolute",
            top: "10px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          MENU
        </div>

        {/* Left & Right Buttons (Properly Positioned) */}
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
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          ▶
        </div>

        {/* Center Non-Button Element (Adjusted) */}
        <div
          style={{
            position: "absolute",
            width: "35px",
            height: "35px",
            backgroundColor: "#e0e0e0",
            borderRadius: "50%",
            border: "2px solid #ccc",
            zIndex: "-1", // Push it behind other elements
          }}
        ></div>
      </div>
    </div>
  );
};

export default VideoPage;
