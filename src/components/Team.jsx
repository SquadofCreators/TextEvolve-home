import React from 'react';
import { motion } from 'framer-motion';
import Yuva_img from '../assets/team/Yuva.png';
import Praveen_img from '../assets/team/Praveen.png';
import Sibi_img from '../assets/team/Sibi.png';
import Uma_img from '../assets/team/Uma.png';

// Mentor image
import mentor_img from '../assets/team/Kavitha.png';

const teamMembers = [
    {
        name: "Yuva Nandhini M",
        role: "AI/ML Developer",
        profile: Yuva_img,
    },
    {
        name: "Praveenkumar S",
        role: "AI/MERN Developer",
        profile: Praveen_img,
    },
    {
        name: "Sibi Siddharth S",
        role: "AI/MERN Developer",
        profile: Sibi_img,
    },
    {
        name: "Uma Maheswari P",
        role: "AI/ML Developer",
        profile: Uma_img,
    },
 ];
const mentor = {
    name: "Mrs. Kavitha M",
    role: "Assistant Professor, Kathir College of Engineering",
    profile: mentor_img,
};

function Team() {
    const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
    };

  return (
    <section id="team" className="py-24 px-6 bg-white text-center">
      <div className="container mx-auto">
        <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
             initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Meet the Team: Dynamic Dreamers
        </motion.h2>
        <motion.p
            className="text-gray-500 mb-16 md:mb-20"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
        >
          Fuelled by passion and guided by experience from Kathir College of Engineering.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-orange-100 hover:border-orange-200"
              variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="w-32 h-32 rounded-full mb-5 overflow-hidden border-4 border-orange-200 shadow-md">
                <img src={member.profile} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-orange-600 font-base">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Mentor Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Under the Guidance of</h3>
          <div className="flex flex-col items-center max-w-xs mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
             <div className="w-32 h-32 rounded-full mb-5 overflow-hidden border-4 border-orange-200 shadow-md">
                 <img src={mentor.profile} alt={mentor.name} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src="/images/team/placeholder.png" }} />
             </div>
            <h3 className="text-lg font-bold text-gray-800">{mentor.name}</h3>
            <p className="text-orange-600 font-base">{mentor.role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Team;