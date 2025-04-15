import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiVideo, FiExternalLink } from 'react-icons/fi';
import presentation from '../assets/documents/TextEvolve_Dynamic_Dreamers.pdf'; // Check path

const resources = [
  {
    icon: FiDownload,
    title: "Project Presentation",
    description: "Download the detailed project overview (PDF).", // Changed PPT to PDF based on import
    link: presentation, // Use the imported variable
    download: true,
  },
  {
    icon: FiVideo,
    title: "Watch Demo Video",
    description: "See TextEvolve in action in our short promo.",
    link: "#hero", // Link to the Hero section ID
    action: "openModal", // Use this action key
  },
  {
    icon: FiExternalLink,
    title: "Explore the Platform",
    description: "Try out the live TextEvolve application.",
    link: "http://www.textevolve.in",
    external: true,
  },
];

// Accept openModal prop from App.jsx
function Resources({ openModal }) {
   const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
    };

   // Updated handler
   const handleResourceClick = (action, link, e) => {
    if (action === 'openModal') {
      e.preventDefault(); // Prevent default anchor behavior

      // 1. Find the target section
      const targetSection = document.getElementById(link.replace('#', '')); // Get ID from link

      // 2. Scroll to the target section
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll smoothly

        // 3. Open the modal (might need slight delay for scroll to start)
        // setTimeout(openModal, 50); // Optional small delay
        openModal(); // Call the passed-in function

      } else {
        // Fallback or error if section not found
        console.warn(`Target section "${link}" not found for modal trigger.`);
        // Still open modal if section not found? Maybe...
        openModal();
      }
    }
    // No 'else if' needed here, regular link clicks will proceed normally
  };

  return (
    <section id="resources" className="py-24 px-6 bg-orange-50/50">
      <div className="container mx-auto text-center">
        <motion.h2
             className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-16 md:mb-20"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Explore Further
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-orange-100 hover:border-orange-200 hover:shadow-xl flex flex-col text-left"
              variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}
               whileHover={{ y: -6 }}
            >
              <div className="text-3xl text-orange-600 mb-4"><resource.icon /></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex-grow">{resource.title}</h3>
              <p className="text-gray-600 mb-6 text-sm flex-grow">{resource.description}</p>
              <a
                href={resource.link} // Keep href for scrolling or external link
                target={resource.external ? '_blank' : '_self'}
                rel={resource.external ? 'noopener noreferrer' : ''}
                // Use imported variable for download name
                download={resource.download ? `TextEvolve_Presentation.pdf` : undefined}
                className="mt-auto inline-block bg-orange-100 hover:bg-orange-200 text-orange-700 py-2 px-5 rounded-md text-sm font-semibold transition-colors duration-300 text-center self-start"
                // Call updated handler
                onClick={(e) => handleResourceClick(resource.action, resource.link, e)}
              >
                {resource.download ? 'Download PDF' : (resource.external ? 'Visit Link' : 'Watch Demo')}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;