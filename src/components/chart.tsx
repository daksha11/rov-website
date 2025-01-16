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
          font-size: 70px !important; /* Significantly increased font size for mobile */
          font-weight: bold !important;
          margin-bottom: 30px !important;
        }
        .header-container div {
          font-size: 32px !important; /* Adjusted font size for the "MIX" circle */
        }
        .playlist-container {
          flex-direction: column !important;
          align-items: center !important;
          gap: 20px !important;
          width: 100% !important; /* Full width for better mobile responsiveness */
        }
        .album-art {
          width: 80% !important; /* Adjusted size of the album art */
          height: auto !important;
        }
        .tv-container {
          width: 100% !important;
          height: auto !important;
        }
        .vinyl {
          width: 200px !important; /* Reduced size of the vinyl disc */
          height: 200px !important; /* Reduced size of the vinyl disc */
        }
        table {
          font-size: 18px !important; /* Adjusted font size for better readability */
          width: 100% !important; /* Full width for better mobile responsiveness */
        }
        th, td {
          padding: 12px 0 !important; /* Adjusted padding for better spacing */
        }
      }
      @media (max-width: 480px) {
        .header-container h1 {
          font-size: 36px !important; /* Slightly smaller font size for very small screens */
        }
        .vinyl {
          width: 150px !important; /* Further reduced size of the vinyl disc */
          height: 150px !important;
        }
        iframe {
          height: 400px !important; /* Adjusted height for Spotify embed */
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
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
        marginTop: "40px",
        backgroundImage: "url('/paper_texture_back_2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div
        className="header-container"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          paddingRight: "0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12"> {/* Reduced margin-bottom */}
            MIX PLAYLIST
          </h1>
        </div>
      </div>

      <div
        className="playlist-container"
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1200px",
          gap: "40px",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "600px",
          }}
        >
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/6itkDdZEJw54d6ppIlXjgg?utm_source=generator&theme=0"
            width="100%"
            height="562"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <div
          className="tv-container"
          style={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "600px",
            position: "relative",
            height: "600px",
            backgroundImage: "url('/player.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="vinyl"
            style={{
              width: "90%",
              height: "90%",
              maxWidth: "450px",
              maxHeight: "450px",
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
      </div>
      {/*<Card />*/}
    </div>
  );
};

export default MixPlaylist;