import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="btn">
        <span>Contact Us</span>
        <div className="container">
          {/* Gmail SVG */}
          <img src="/gmail.svg" alt="Gmail" className="icon gmail" />
          {/* Instagram SVG */}
          <img src="/insta.svg" alt="Instagram" className="icon insta" />
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    position: relative;
    display: flex;
    overflow: hidden;
    cursor: pointer;
    width: 150px;
    height: 50px;
    background-color: #eeeeed;
    border-radius: 80px;
    border: none;
    padding: 0 80px;
    transition: all 0.2s ease;
    justify-content: center;
    align-items: center;
  }

  .btn:hover {
    transform: scale(1.1);
  }

  .btn span {
    position: absolute;
    z-index: 2; /* Ensure text is above the icons */
    width: 150px;
    height: 50px;
    border-radius: 80px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-size: 17px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 2px;
    color: #eeeeed;
    background-color: #1f1f1f;
    padding: 0 10px;
    transition: all 0.2s ease;
  }

  .btn .container {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 80px;
    justify-content: center; /* Center the icons */
    align-items: center;
    gap: 10px; /* Add a small gap between the logos */
  }

  .btn img.icon {
    opacity: 0; /* Start with icons invisible */
    transition: opacity 0.3s ease;
    z-index: 1; /* Ensure icons are below the text */
  }

  .btn img.gmail {
    height: 40px; /* Size for Gmail logo */
    width: 40px;
  }

  .btn img.insta {
    height: 35px; /* Smaller size for Instagram logo */
    width: 35px;
  }

  .btn:hover span {
    opacity: 0; /* Hide text on hover */
  }

  .btn:hover img.icon {
    opacity: 1; /* Show icons on hover */
  }
`;

export default Button;