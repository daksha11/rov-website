"use client";

import React, { useEffect, useRef, useState } from "react";

interface CarouselItemProps {
  title: string;
  imageUrl: string;
  category: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ title, imageUrl, category }) => (
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
      title: "Save Me (feat. Ave, Ro$e$, NSU AJ, YDXX & Maliikai) - Single",
      imageUrl: "/rov_album_1.webp",
      category: "Apple Music",
    },
    {
      title: "R.O.V. Summer Tape (feat. Basu) - EP",
      imageUrl: "/rov_album_2.webp",
      category: "Apple Music",
    },
    {
      title: "R.O.V. TAPE, Vol. 2 - EP",
      imageUrl: "/rov_album_3.webp",
      category: "Apple Music",
    },
    {
      title: "Blind In Love Again (feat. Ave, Basu & FLOWERZ) - Single",
      imageUrl: "/rov_album_4.webp",
      category: "Apple Music",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [clonedItems, setClonedItems] = useState<CarouselItemProps[]>(items);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalItems = items.length;
    const itemWidth = 320; // Width of each item including gap
    const totalWidth = itemWidth * totalItems; // Total width of all items without clones
    let currentTranslateX = -itemWidth; // Start from the first real item

    // Function to dynamically clone items as needed
    const updateClones = () => {
      const newClonedItems = [
        items[items.length - 1], // Clone last item at the beginning
        ...items,
        items[0], // Clone first item at the end
      ];
      setClonedItems(newClonedItems);
    };

    // Continuous animation logic
    const animateCarousel = () => {
      if (!carousel) return;

      currentTranslateX -= 1; // Decrease the translate value for continuous movement
      if (Math.abs(currentTranslateX) >= totalWidth) {
        // Once the carousel moves past all the items, update clones dynamically
        currentTranslateX = -itemWidth;
        updateClones(); // Update cloned items
      }
      carousel.style.transform = `translateX(${currentTranslateX}px)`;
      requestAnimationFrame(animateCarousel);
    };

    // Start animation
    const animationFrame = requestAnimationFrame(animateCarousel);

    return () => cancelAnimationFrame(animationFrame); // Cleanup on component unmount
  }, [items]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        height: "400px",
        position: "relative",
      }}
    >
      <div
        ref={carouselRef}
        style={{
          display: "flex",
          gap: "20px",
          willChange: "transform",
        }}
      >
        {clonedItems.map((item, index) => (
          <CarouselItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
