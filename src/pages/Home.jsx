import React from 'react'

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
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Results />
      <Roadmap />
      <Team />
      <Resources />
      <ContactUs />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
