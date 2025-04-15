import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import video_1 from '../assets/TextEvove-Video.mp4';
import video_1_poster from '../assets/video_poster.jpg';

function Hero({ isModalOpen, openModal, closeModal }) {

  const videoRef = useRef(null);

  const videoSource = video_1;
  const videoPoster = video_1_poster; 

  useEffect(() => {
    // If the modal was open but is now closed, pause the video
    if (!isModalOpen && videoRef.current?.played.length > 0 && !videoRef.current.paused) {
       videoRef.current.pause();
    }
  }, [isModalOpen]);

  // Animation Variants
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const backdropVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
  const modalVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 } };

  return (
    <>
      <section
        id="hero"
        className="relative w-full flex items-center justify-center min-h-screen px-6 py-24 pt-32 md:pt-40 lg:pt-24 bg-gradient-to-b from-orange-50 via-white to-white overflow-hidden select-none" 
      >
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-30 lg:opacity-50 transform -translate-x-1/4 skew-x-[-20deg] bg-gradient-to-r from-white via-orange-100/50 to-transparent z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-40 lg:opacity-60 transform translate-x-1/4 skew-y-[-15deg] bg-gradient-to-t from-white via-orange-100/60 to-transparent z-0 rounded-full filter blur-xl"></div>

        {/* Content */}
        <div className="w-max lg:w-full mx-auto flex flex-col items-center gap-12 relative z-10">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left mb-12 lg:mb-0 lg:mt-16"
            variants={containerVariants} initial="hidden" animate="visible"
          >
            <motion.h1 variants={itemVariants} className="w-full text-4xl md:text-6xl text-center font-extrabold text-gray-800 mb-5 leading-tight">
              Turn Ink, <br />into <span className='text-orange-500'>Intelligence.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-base md:text-xl text-center text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              TextEvolve uses AI to accurately transcribe historical handwritten documents into editable digital formats. Preserve the past, accelerate discovery.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a href="http://www.textevolve.in" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Explore App
              </motion.a>
              <motion.button onClick={openModal} className="bg-white hover:bg-orange-50 border border-orange-300 text-orange-600 py-3 px-8 rounded-full text-lg font-semibold transition-colors duration-300 shadow-sm hover:shadow-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Visual Element / Video Trigger */}
          <motion.div
            id='hero-video'
            className="w-full lg:w-1/2 flex justify-center ring-2 ring-offset-2 ring-orange-300 rounded-lg shadow-lg overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative w-full aspect-video rounded-lg shadow-2xl overflow-hidden cursor-pointer group border border-gray-200" onClick={openModal} style={{ backgroundImage: `url(${videoPoster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:bg-black/10 flex items-center justify-center transition-all duration-300">
                <div className="bg-white/80 group-hover:bg-white backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Modal --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4" aria-labelledby="videoModalTitle" role="dialog" aria-modal="true">
            {/* Use closeModal prop for backdrop click */}
            <motion.div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm" variants={backdropVariants} initial="hidden" animate="visible" exit="exit" onClick={closeModal}></motion.div>
            <motion.div className="relative bg-black rounded-lg shadow-xl overflow-hidden w-full max-w-4xl aspect-video" variants={modalVariants} initial="hidden" animate="visible" exit="exit">
              {/* Use closeModal prop for close button */}
              <button onClick={closeModal} className="absolute top-2 right-2 z-10 p-1 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200" aria-label="Close video modal">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              {/* Video player remains the same */}
              <video ref={videoRef} className="w-full h-full" controls autoPlay>
                   <source src={videoSource} type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- End Modal --- */}
    </>
  );
}

export default Hero;