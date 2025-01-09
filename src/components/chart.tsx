"use client";
import React, { useEffect } from "react";
import Card from "./ui/musicplayer";

const MixPlaylist = () => {
  // Add the spinning effect CSS only on the client side
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);

    // Clean up the style when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          marginBottom: "20px",
          paddingRight: "120px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ff5cac, #af52ff)",
              color: "#000",
              padding: "7px 20px",
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            MIX
          </div>
          <h1 style={{ fontSize: "36px", margin: 0, textAlign: "right" }}>
            PLAYLIST
          </h1>
        </div>
      </div>

      {/* Playlist Container */}
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1000px",
          gap: "150px",
          alignItems: "flex-start",
        }}
      >
        {/* Album Art */}
        <div
          style={{
            flex: "1",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            src="/cover3.png"
            alt="Album Art"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Playlist */}
        <div style={{ flex: "2", display: "flex", flexDirection: "column" }}>
          <table
            style={{
              width: "100%",
              textAlign: "left",
              borderCollapse: "collapse",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid #fff" }}>
                <th
                  style={{
                    padding: "10px 0",
                    fontWeight: "bold",
                    fontSize: "18px",
                    borderBottom: "2px solid #fff",
                  }}
                >
                  Artist
                </th>
                <th
                  style={{
                    padding: "10px 0",
                    fontWeight: "bold",
                    fontSize: "18px",
                    borderBottom: "2px solid #fff",
                  }}
                >
                  Song
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { artist: "dafes, Wada!", song: "Do it", color: "blue" },
                { artist: "Adil Hassan, DDK", song: "Wanna Know", color: "cyan" },
                { artist: "Adil Hasan", song: "LAST TIME", color: "green" },
                { artist: "DDK", song: "Washed out", color: "orange" },
                { artist: "Sniper J, DDK", song: "Kiss of Death", color: "gold" },
              ].map((track, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: index !== 5 ? "1px solid #fff" : "none",
                  }}
                >
                  <td style={{ padding: "10px 0" }}>{track.artist}</td>
                  <td
                    style={{
                      padding: "10px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {track.song}
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: track.color,
                      }}
                    ></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TV Container with Spinning Vinyl */}
      <div
        style={{
          marginTop: "50px",
          position: "relative",
          width: "600px", // Adjust based on your TV image size
          height: "650px", // Adjust based on your TV image size
          backgroundImage: "url('/player.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Spinning Vinyl */}
        <div
          style={{
            width: "470px",
            height: "470px",
            borderRadius: "50%",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            animation: "spin 10s linear infinite",
          }}
        >
          <img
            src="/cover1.png"
            alt="Vinyl Art"
            style={{
              width: "90%",
              height: "90%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Player */}
        <div
          style={{
            transform: "scale(0.9)", // Slightly reduce size to fit TV
            marginTop: "0px", // Fine-tune position
          }}
        ></div>
      </div>
      <Card />
    </div>
  );
};

export default MixPlaylist;
