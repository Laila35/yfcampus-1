"use client";
import React, { useRef, useEffect } from "react";

// Reusable SuccessStory Card
const SuccessStory = ({ quote, name, location }) => {
  return (
    <div className="bg-white p-6 border rounded-lg shadow-md w-80 h-80 flex-shrink-0 flex flex-col">
      <div className="mb-4 flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm mb-3">{location}</p>
        <div className="flex text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700">{quote}</p>
      </div>
    </div>
  );
};
const SuccessStories = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const intervalRef = useRef(null);

  const stories = [
    { quote: "YFC helped me improve my grades in Maths and Science...", name: "Amina", location: "United States" },
    { quote: "The test preparation for SAT was exactly what I needed...", name: "Omar", location: "Canada" },
    { quote: "The personalized tutoring sessions gave me the confidence...", name: "Fatima", location: "United Kingdom" },
    { quote: "Thanks to YFC's support, I was able to improve my writing...", name: "Zainab", location: "Australia" },
    { quote: "The tutors were amazing! They explained complex concepts...", name: "Hassan", location: "United States" },
    { quote: "I was struggling with my history exams, but after a few weeks...", name: "Layla", location: "Canada" },
    { quote: "YFC's math tutoring helped me go from failing to passing...", name: "Bilal", location: "Australia" },
    { quote: "The personalized test prep helped me raise my GRE score...", name: "Rania", location: "United Kingdom" },
    { quote: "I was initially doubtful about online tutoring, but the interactive...", name: "Ibrahim", location: "Ireland" },
    { quote: "YFC helped me prepare for my college entrance exams...", name: "Khadija", location: "United States" }
  ];

  // Arrow key scrolling
  useEffect(() => {
    const container = containerRef.current;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        container.scrollBy({ left: 300, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -300, behavior: "smooth" });
      }
    };
    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Drag to scroll
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Autoplay scroll every 3 seconds
  useEffect(() => {
    const container = containerRef.current;

    const autoScroll = () => {
      if (!container) return;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" }); // Reset to start
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" }); // Scroll next
      }
    };

    intervalRef.current = setInterval(autoScroll, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-teal-700 text-center mb-10">
          Student Reviews
        </h2>
        <p className="text-center text-gray-600 mb-8">
          See what our students say about their learning experience
        </p>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto pb-6 gap-6 px-2 focus:outline-none"
            tabIndex="0"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
          >
            {stories.map((story, index) => (
              <SuccessStory
                key={index}
                quote={story.quote}
                name={story.name}
                location={story.location}
              />
            ))}
          </div>

          {/* Gradient fade effect on sides */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
