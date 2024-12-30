"use client";

import React, { useEffect, useRef, useState } from "react";


interface CarouselItemProps {
  imageUrl: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ imageUrl }) => (
    <div
      style={{
        flex: "0 0 300px",
        position: "relative",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
      className="carousel-item"
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
        }}
      >
        <h4 style={{ margin: 0, fontSize: "1.2rem" }}>{title}</h4>
        <p style={{ margin: "5px 0 0", fontSize: "0.9rem" }}>{category}</p>
      </div>
    </div>
);

const Carousel: React.FC = () => {
  const items: CarouselItemProps[] = [
    {
        imageUrl: "/rov_album_4.webp",
        },
    {
        imageUrl: "/rov_album_1.webp",
      },
      {
        imageUrl: "/rov_album_2.webp",
      },
      {
        imageUrl: "/rov_album_3.webp",
      },
      {
        imageUrl: "/rov_album_4.webp",
      },
      {
        imageUrl: "/rov_album_1.webp",
      },
      {
        imageUrl: "/rov_album_2.webp",
      },
      {
        imageUrl: "/rov_album_3.webp",
      },
      {
        imageUrl: "/rov_album_4.webp",
      },
      {
        imageUrl: "/rov_album_1.webp",
      },
      {
        imageUrl: "/rov_album_2.webp",
      },
      {
        imageUrl: "/rov_album_3.webp",
      },
      {
        imageUrl: "/rov_album_4.webp",
      },
      {
        imageUrl: "/rov_album_1.webp",
      },
      {
        imageUrl: "/rov_album_2.webp",
      },
      {
        imageUrl: "/rov_album_3.webp",
      },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const visibleItems = 10;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const itemWidth = 300; // Width of each item including gap
    const totalWidth = itemWidth * visibleItems;

    let currentTranslateX = -itemWidth;

    const animateCarousel = () => {
      if (!carousel) return;

      currentTranslateX -= 1;
      if (currentTranslateX < -totalWidth) {
        // Move first item to the end when it exits view
        const newIndex = currentIndex + visibleItems;
        setCurrentIndex(newIndex);
        currentTranslateX = -itemWidth * newIndex;
      }
      carousel.style.transform = `translateX(${currentTranslateX}px)`;
      requestAnimationFrame(animateCarousel);
    };

    // Start animation
    const animationFrame = requestAnimationFrame(animateCarousel);

    return () => cancelAnimationFrame(animationFrame);
  }, [items]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", width: "100%", height: "400px", position: "relative" }}>
      <div ref={carouselRef} style={{ display: "flex", gap: "20px", willChange: "transform" }}>
        {items.map((_, index) => (
          <CarouselItem key={index} {...items[(currentIndex + index) % items.length]} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;