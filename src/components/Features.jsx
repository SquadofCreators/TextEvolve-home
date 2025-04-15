import React from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiEdit3, FiGlobe, FiSearch, FiShare2, FiZap } from 'react-icons/fi'; // Using react-icons

const featuresData = [
  // ... (same feature data as before)
  { icon: FiDatabase, title: 'High-Accuracy Dual OCR', description: 'Combines custom ML and commercial APIs for superior transcription of varied scripts.' },
  { icon: FiEdit3, title: 'AI Text Polishing', description: 'Automatically refines extracted text for grammar, spelling, and clarity via Google Gemini.' },
  { icon: FiGlobe, title: 'Multi-Language Translation', description: 'Instantly translate documents into various regional languages with Google Translate.' },
  { icon: FiSearch, title: 'Interactive Query & Insights', description: 'Ask questions directly to your documents and get summaries or specific data points.' },
  { icon: FiShare2, title: 'Editable Multi-Format Export', description: 'Download your digitized documents as editable Word, PDF, or TXT files.' },
  { icon: FiZap, title: 'Accelerated Research', description: 'Built to significantly speed up academic workflows and preserve cultural heritage.' },
];

function Features() {
    const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
    };

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
        >
          Features Built for Insight
        </motion.h2>
        <motion.p
            className="text-lg text-gray-600 mb-16 md:mb-20 max-w-2xl mx-auto"
             initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }}
        >
          Leverage cutting-edge AI to seamlessly work with historical documents.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-orange-100 hover:border-orange-200 hover:shadow-xl"
              variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
            >
              {/* Icon with Orange Background */}
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-md">
                 <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;