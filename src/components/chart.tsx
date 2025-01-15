"use client";
import { useEffect } from "react";
import Card from "./ui/musicplayer";

const MixPlaylist = () => {
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
      @media (max-width: 768px) {
        #mix-playlist {
          padding: 10px;
        }
        .header-container {
          justify-content: center !important;
          padding-right: 0 !important;
          text-align: center;
        }
        .header-container h1 {
          font-size: 24px !important; /* Decreased font size for the title */
        }
        .header-container div {
          font-size: 30px !important; /* Decreased font size for the "MIX" circle */
        }
        .playlist-container {
          flex-direction: column !important;
          align-items: center !important;
          gap: 20px !important;
          width: 90% !important; /* Increased width of the playlist container */
        }
        .album-art {
          width: 60% !important; /* Decreased size of the album art */
          height: auto !important;
        }
        .tv-container {
          width: 100% !important;
          height: auto !important;
        }
        .vinyl {
          width: 250px !important;
          height: 250px !important; /* Ensures it remains a perfect circle */
        }
        table {
          font-size: 18px !important; /* Increased font size for the playlist table */
          width: 320px !important; /* Ensures the table takes full width */
        }
        th, td {
          padding: 15px 0 !important; /* Increased padding for better spacing */
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      id="mix-playlist"
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
      <div
        className="header-container"
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

      <div
        className="playlist-container"
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1000px",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/6itkDdZEJw54d6ppIlXjgg?utm_source=generator&theme=0"
          width="100%"
          height="562" 
          frameBorder="0"
          allowFullScreen // Updated to camelCase for TypeScript
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <div
        className="tv-container"
        style={{
          marginTop: "50px",
          position: "relative",
          width: "600px",
          height: "650px",
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
        <div
          className="vinyl"
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
      </div>
      {/*<Card />*/}
    </div>
  );
};

export default MixPlaylist;