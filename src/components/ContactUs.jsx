import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'; // Using react-icons

function ContactUs() {

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form submission handler (basic example)
  const handleSubmit = (e) => {
    
    e.preventDefault(); 
    console.log('Form data submitted:', formData);
    alert('Thank you for your message! (Form submission logic not implemented yet)');
    // reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };
   const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };


  return (
    <section id="contact" className="py-24 px-6 bg-white"> {/* Light background */}
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            variants={itemVariantsLeft}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariantsRight}
            className="text-lg text-gray-600 max-w-xl mx-auto"
          >
            Have questions, feedback, or partnership inquiries? We'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact Info Column */}
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.3, delayChildren: 0.1 }}
          >
            <motion.h3 variants={itemVariantsLeft} className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</motion.h3>

            <motion.div variants={itemVariantsLeft} className="flex items-start space-x-4 mb-6">
              <FiMail className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-700">Email</h4>
                <a href="mailto:textevolve@gmail.com" className="text-orange-600 hover:text-orange-700 hover:underline break-all">
                    textevolve@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-1">General inquiries & support</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariantsLeft} className="flex items-start space-x-4">
              <FiMapPin className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-700">Location</h4>
                <p className="text-gray-600">Kathir College of Engineering,</p>
                <p className="text-gray-600">Neelambur, Coimbatore,</p>
                <p className="text-gray-600">Tamil Nadu - 641062, India</p>
                <p className="text-sm text-gray-500 mt-1">(Project Origin)</p>
              </div>
            </motion.div>
             {/* Optional: Add Phone Number */}

          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delayChildren: 0.2, staggerChildren: 0.2 }}
           >
            {/* <motion.h3 variants={itemVariantsRight} className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</motion.h3> */}
            
            <form onSubmit={handleSubmit} action="#" method="POST">
              <motion.div variants={itemVariantsRight} className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                  placeholder="Your Name"
                />
              </motion.div>
              <motion.div variants={itemVariantsRight} className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                  placeholder="you@example.com"
                />
              </motion.div>
              <motion.div variants={itemVariantsRight} className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>
              <motion.div variants={itemVariantsRight}>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FiSend className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;