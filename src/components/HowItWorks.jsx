import React from 'react';
import { motion } from 'framer-motion';
import { FiUploadCloud, FiCpu, FiDownloadCloud } from 'react-icons/fi';

import ImageComparisonSlider from '../components/ImageComparisonSlider'
import AfterExtractImg from '../assets/after_extract.png'; 
import BeforeExtractImg from '../assets/before_extract.png'; 


const steps = [
  { icon: FiUploadCloud, title: 'Upload Document', description: 'Securely upload scans or clear images via our intuitive interface.' },
  { icon: FiCpu, title: 'AI Processing', description: 'Our Dual OCR, polishing, and translation models extract and refine the content.' },
  { icon: FiDownloadCloud, title: 'Explore & Export', description: 'Interact, query the digitized text, and download in editable formats.' },
];

function HowItWorks() {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
  const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section id="how-it-works" className="py-24 px-6 bg-orange-50/50"> {/* Very light orange bg */}
      <div className="container mx-auto text-center">
        <motion.h2
             className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-16 md:mb-20"
             initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Digitization Made Simple
        </motion.h2>

        <motion.div
            className="relative flex flex-col md:flex-row justify-between items-start max-w-5xl mx-auto"
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
            {/* Connecting line - subtle gray */}
            <div className="absolute top-2/7 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-200 to-transparent hidden md:block" style={{ zIndex: 0 }}></div>

            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    className="relative z-10 flex-1 flex flex-col items-center text-center p-4 mb-10 md:mb-0"
                    variants={itemVariants}
                >
                    {/* Icon Circle */}
                    <div className="relative flex items-center justify-center w-24 h-24 bg-white border-4 border-orange-100 rounded-full mb-6 shadow-lg">
                        <step.icon className="w-10 h-10 text-orange-600 z-10" />
                         {/* Step Number Badge */}
                         <div className="absolute -top-3 -right-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md border-2 border-white">
                           {index + 1}
                         </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 px-4 text-sm">{step.description}</p>

                    {/* Mobile Connecting Line */}
                     {index < steps.length - 1 && (
                         <div className="absolute left-1/2 bottom-0 transform translate-y-full -translate-x-1/2 w-0.5 h-10 bg-orange-200 md:hidden" style={{ zIndex: 0 }}></div>
                    )}
                </motion.div>
            ))}
        </motion.div>

        {/* Image Comparison */}
          <section id="comparison-demo" className="py-14 px-6">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                See the Transformation
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Drag the slider below to compare the original document scan with the AI-digitized and enhanced output from TextEvolve.
              </p>
              <ImageComparisonSlider
                beforeImageUrl={AfterExtractImg}
                afterImageUrl={BeforeExtractImg}
                beforeLabel="Original "  
                afterLabel="TextEvolve" 
              />
            </div>
          </section>
      </div>
    </section>
  );
}

export default HowItWorks;