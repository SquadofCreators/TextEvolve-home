import React from 'react';
import { motion } from 'framer-motion';

function CTA() {
  return (
    <section id="cta" className="py-24 px-6 bg-gradient-to-r from-orange-50 via-white to-orange-50 text-center overflow-hidden">
        <div className="container mx-auto relative z-10">
            {/* Optional subtle shapes */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-orange-200/40 rounded-full filter blur-2xl opacity-70"></div>
             <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-orange-200/40 rounded-full filter blur-2xl opacity-70"></div>

            <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-5 leading-tight"
                 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              Start Your Digitization Journey Today
            </motion.h2>
            <motion.p
                className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
            >
              Join the growing community preserving history with TextEvolve.
            </motion.p>
            <motion.a
              href="http://www.textevolve.in" // Your app URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-4 px-12 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-200 transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.a>
        </div>
    </section>
  );
}

export default CTA;