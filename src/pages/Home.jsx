import React, { useState, useRef, useEffect } from 'react';

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Results from '../components/Results'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import Resources from '../components/Resources'
import ContactUs from '../components/ContactUs'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal(); 
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    // Cleanup listener
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <main>
        <Hero 
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
        <Features />
        <HowItWorks />
        <Results />
        <Roadmap />
        <Team />
        <Resources 
          openModal={openModal}
        />
        <ContactUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home
