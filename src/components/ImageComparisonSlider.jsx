import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function ImageComparisonSlider({
  beforeImageUrl,
  afterImageUrl,
  beforeLabel = 'Original',
  afterLabel = 'Digitized',
}) { 

  const [sliderPositionPercentage, setSliderPositionPercentage] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null); 
  const handleX = useMotionValue(0);

  useEffect(() => {
    const updateContainerInfo = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
        handleX.set((sliderPositionPercentage / 100) * width);
      }
    };
    updateContainerInfo();
    window.addEventListener('resize', updateContainerInfo);
    return () => window.removeEventListener('resize', updateContainerInfo);
  }, [sliderPositionPercentage, handleX]);


  const positionPercentage = useTransform(handleX, (latestX) => {
    const clampedX = Math.max(0, Math.min(latestX, containerWidth));
    return containerWidth > 0 ? (clampedX / containerWidth) * 100 : 50;
  });

  // Handle drag 
  const handleDrag = (event, info) => { 
    if (!containerRef.current) return;
    setIsDragging(true);
    const containerRect = containerRef.current.getBoundingClientRect();
    const currentX = info.point.x - containerRect.left;
    const clampedX = Math.max(0, Math.min(currentX, containerWidth));
    handleX.set(clampedX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setSliderPositionPercentage(positionPercentage.get());
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8 ring-2 ring-offset-3 ring-orange-500/60 rounded-lg shadow-lg bg-white">
      <motion.div
        ref={containerRef}
        className="relative w-full aspect-video rounded-lg overflow-hidden select-none border border-gray-200 shadow-lg cursor-ew-resize"
      >
        {/* Before Image */}
        <img
          src={beforeImageUrl}
          alt={beforeLabel}
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          draggable="false"
        />

        {/* After Image Container */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full overflow-hidden pointer-events-none"
          style={{
            clipPath: useTransform(positionPercentage, v => `inset(0 ${100 - v}% 0 0)`),
          }}
        >
          {/* After Image */}
          <img
            src={afterImageUrl}
            alt={afterLabel}
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            style={{ minWidth: `${containerWidth}px` }}
            draggable="false"
          />
        </motion.div>

        {/* Labels */}
        <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded pointer-events-none z-20">
          {beforeLabel}
        </div>
        <motion.div
            className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded pointer-events-none z-20"
            style={{ opacity: useTransform(positionPercentage, [85, 95], [1, 0]) }}
        >
          {afterLabel}
        </motion.div>

        {/* Draggable Handle */}
        <motion.div
          className="absolute top-0 bottom-0 z-10 w-1 cursor-ew-resize flex items-center justify-center group"
           style={{
             x: handleX, 
           }}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleDrag} 
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        >
          {/* Visual line */}
          <div className={`w-1 h-full transition-colors duration-200 ${isDragging ? 'bg-orange-500' : 'bg-white/70 group-hover:bg-orange-500/80'}`}></div>
          {/* Grabber Icon */}
           <div className={`absolute flex items-center justify-center w-10 h-10 border-2 rounded-full shadow-lg cursor-ew-resize transform transition-all duration-200 ${isDragging ? 'bg-orange-500 border-orange-300 scale-110' : 'bg-white group-hover:bg-orange-50 border-white/50 group-hover:border-orange-300 group-hover:scale-105'}`}>
            <svg className={`w-4 h-4 rotate-90 transition-colors duration-200 ${isDragging ? 'text-white' : 'text-gray-600 group-hover:text-orange-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ImageComparisonSlider;