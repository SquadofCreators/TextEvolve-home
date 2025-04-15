import React from 'react';
import { motion } from 'framer-motion';
import { FiFlag, FiActivity, FiTarget, FiTrendingUp } from 'react-icons/fi';

const roadmapItems = [ // Same data, styling changes
  { icon: FiFlag, phase: 'Launched (Q2 2025)', items: ['Core Platform Launch', 'Dual OCR', 'Translation', 'Multi-Format Export'], status: 'done' },
  { icon: FiActivity, phase: 'In Progress (Q3 2025)', items: ['Community Feature MVP', 'Enhanced UI/UX', 'New Language Model'], status: 'progress' },
  { icon: FiTarget, phase: 'Planned (Q4 2025)', items: ['Advanced Annotation Tools', 'Expanded Language Support'], status: 'planned' },
  { icon: FiTrendingUp, phase: 'Future (2026+)', items: ['Deeper AI Insights', 'Public API Access', 'Mobile Integration'], status: 'future' },
];

function Roadmap() {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.4 } } };
  const itemVariants = (index) => ({ hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } });

  const getStatusClasses = (status) => {
    switch (status) {
      case 'done': return { dot: 'bg-green-500 border-green-600', text: 'text-green-600', cardBorder: 'border-green-100 hover:border-green-200' };
      case 'progress': return { dot: 'bg-orange-500 border-orange-600 animate-pulse', text: 'text-orange-600', cardBorder: 'border-orange-100 hover:border-orange-200' };
      case 'planned': return { dot: 'bg-blue-500 border-blue-600', text: 'text-blue-600', cardBorder: 'border-blue-100 hover:border-blue-200' };
      default: return { dot: 'bg-gray-400 border-gray-500', text: 'text-gray-500', cardBorder: 'border-gray-100 hover:border-gray-200' };
    }
  };

  return (
    <section id="roadmap" className="py-24 px-6 bg-gradient-to-b from-white to-orange-50/50">
      <div className="container mx-auto text-center">
        <motion.h2
             className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-20"
             initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Evolution of TextEvolve
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line - Light theme */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-orange-100 via-orange-300 to-orange-100 transform -translate-x-1/2 hidden md:block rounded-full"></div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            {roadmapItems.map((item, index) => {
               const statusClasses = getStatusClasses(item.status);
               return (
                <motion.div
                    key={index}
                    className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    variants={itemVariants(index)}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-5/12 px-4">
                    <div className={`bg-white p-6 rounded-xl shadow-lg border ${statusClasses.cardBorder} text-left relative transition-all duration-300 hover:shadow-xl`}>
                       <div className="flex items-center mb-3">
                          <item.icon className={`w-5 h-5 ${statusClasses.text} mr-3`} />
                          <h3 className={`text-lg md:text-xl font-semibold ${statusClasses.text}`}>{item.phase}</h3>
                      </div>
                      <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1 pl-1">
                        {item.items.map((detail, i) => <li key={i}>{detail}</li>)}
                      </ul>
                    </div>
                  </div>

                  {/* Connector Dot (Desktop) */}
                  <div className="hidden md:flex w-2/12 justify-center">
                      <div className={`relative w-5 h-5 rounded-full border-4 ${statusClasses.dot} z-10 bg-white`}>
                         {/* Inner fill for done/progress/planned */}
                         {item.status !== 'future' && <div className={`absolute inset-0.5 rounded-full ${statusClasses.dot.split(' ')[0]}`}></div>}
                      </div>
                  </div>

                  {/* Spacer */}
                   <div className="hidden md:block w-5/12 px-4"></div>
                </motion.div>
               );
             })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;