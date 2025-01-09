"use client";
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Card = () => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null); // Using useRef to persist intervalId between renders
  const totalDuration = 226; // 3:46 in seconds
  
  useEffect(() => {
    if (isPlaying) {
      intervalIdRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(intervalIdRef.current!);
            setIsPlaying(false);
            return 100;
          }
          return prev + (100 / (totalDuration * 4)); // Reduced increment size
        });
      }, 250); // Increased update frequency
    }
    
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [isPlaying]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = (x / width) * 100;
    
    setProgress(Math.min(Math.max(percentage, 0), 100));
  };

  const formatTime = (percentage: number) => {
    const seconds = Math.floor((percentage / 100) * totalDuration);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="top">
          <div className="pfp">
            <div className="playing">
              <div className="greenline line-1" />
              <div className="greenline line-2" />
              <div className="greenline line-3" />
              <div className="greenline line-4" />
              <div className="greenline line-5" />
            </div>
          </div>
          <div className="texts">
            <p className="title-1">Appreciation</p>
            <p className="title-2">Basu</p>
          </div>
        </div>
        <div className="controls">
          <div className="control-group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={36} width={36}>
              <path clipRule="evenodd" d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm.848-12.352a1.2 1.2 0 0 0-1.696-1.696l-3.6 3.6a1.2 1.2 0 0 0 0 1.696l3.6 3.6a1.2 1.2 0 0 0 1.696-1.696L11.297 13.2H15.6a1.2 1.2 0 1 0 0-2.4h-4.303l1.551-1.552Z" fillRule="evenodd" />
            </svg>
            <svg onClick={togglePlayPause} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={36} width={36}>
              <path clipRule="evenodd" d={isPlaying ? "M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0ZM8.4 9.6a1.2 1.2 0 1 1 2.4 0v4.8a1.2 1.2 0 1 1-2.4 0V9.6Zm6-1.2a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 1 0 2.4 0V9.6a1.2 1.2 0 0 0-1.2-1.2Z" : "M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm-2.4-13.2a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 0 0 1.85 1.008l4.8-2.4a1.2 1.2 0 0 0 0-2.016l-4.8-2.4a1.2 1.2 0 0 0-.65-.192Z"} fillRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={36} width={36}>
              <path clipRule="evenodd" d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z" fillRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" height={32} width={36}>
              <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z" />
            </svg>
          </div>
        </div>
        <div 
          className="time" 
          ref={progressBarRef}
          onClick={handleProgressClick}
        >
          <div 
            className="elapsed" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <p className="timetext time_now">{formatTime(progress)}</p>
        <p className="timetext time_full">3:46</p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 600px;
    height: 300px;
    background: #00000;
    border-radius: 16px;
    padding: 20px;
  }

  .top {
    position: relative;
    width: 100%;
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
  }

  .pfp {
    position: relative;
    top: 10px;
    left: 10px;
    margin-right: 20px;
    height: 100px;
    width: 100px;
    background-color: #262626;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title-1 {
    color: white;
    font-size: 40px;
    font-weight: bolder;
  }

  .title-2 {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  .time {
    width: 90%;
    background-color: #262626;
    height: 12px;
    border-radius: 6px;
    position: absolute;
    left: 5%;
    bottom: 40px;
    cursor: pointer;
  }

  .elapsed {
    width: 42%;
    background-color: #1db954;
    height: 100%;
    border-radius: 6px;
    transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .controls {
    color: white;
    display: flex;
    position: absolute;
    bottom: 60px;
    left: 0;
    padding: 20px;
    width: 100%;
    justify-content: center;
  }

  .control-group {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  .controls svg {
    cursor: pointer;
    transition: 0.1s;
    width: 48px;
    height: 48px;
  }

  .controls svg:hover {
    color: #1db954;
  }

  .timetext {
    color: white;
    font-size: 14px;
    position: absolute;
  }

  .time_now {
    bottom: 20px;
    left: 20px;
  }

  .time_full {
    bottom: 20px;
    right: 20px;
  }

  .playing {
    display: flex;
    position: relative;
    justify-content: center;
    gap: 4px;
    width: 50px;
    height: 40px;
  }

  .greenline {
    background-color: #1db954;
    height: 40px;
    width: 4px;
    position: relative;
    transform-origin: bottom;
  }

  .line-1 {
    animation: infinite playing 1s ease-in-out;
    animation-delay: 0.2s;
  }

  .line-2 {
    animation: infinite playing 1s ease-in-out;
    animation-delay: 0.5s;
  }

  .line-3 {
    animation: infinite playing 1s ease-in-out;
    animation-delay: 0.6s;
  }

  .line-4 {
    animation: infinite playing 1s ease-in-out;
    animation-delay: 0s;
  }

  .line-5 {
    animation: infinite playing 1s ease-in-out;
    animation-delay: 0.4s;
  }

  @keyframes playing {
    0% {
      transform: scaleY(0.1);
    }

    33% {
      transform: scaleY(0.6);
    }

    66% {
      transform: scaleY(0.9);
    }

    100% {
      transform: scaleY(0.1);
    }
  }
`;

export default Card;