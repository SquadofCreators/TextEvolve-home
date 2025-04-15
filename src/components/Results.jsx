import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

// Dummy Data for Charts
const accuracyData = [
  { name: 'Standard OCR A', accuracy: 65, fill: '#cccccc' },
  { name: 'Standard OCR B', accuracy: 72, fill: '#a0a0a0' },
  { name: 'TextEvolve', accuracy: 94, fill: '#F97316' }, // Orange
];

const timeData = [
  { name: 'Page 1', Manual: 60, TextEvolve: 5 },
  { name: 'Page 2', Manual: 75, TextEvolve: 6 },
  { name: 'Page 3', Manual: 55, TextEvolve: 4 },
  { name: 'Page 4', Manual: 80, TextEvolve: 7 },
];

const languageData = [
  { name: 'English', value: 400 }, { name: 'Tamil', value: 300 },
  { name: 'French', value: 200 }, { name: 'Latin', value: 150 },
  { name: 'Other', value: 100 },
];
const COLORS = ['#F97316', '#FB923C', '#FDBA74', '#FED7AA', '#FFE4C4']; // Orange Tones


function Results() {
  const chartVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="results" className="py-24 px-6 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-16 md:mb-20"
             initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Measurable Performance
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Accuracy Chart */}
          <motion.div
              className="bg-orange-50/60 p-6 md:p-8 rounded-xl shadow-lg border border-orange-100"
              variants={chartVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
             <h3 className="text-xl md:text-2xl font-semibold text-orange-700 mb-6 text-left">Accuracy Benchmark</h3>
             <div style={{ width: '100%', height: 300 }}> {/* Fixed height container */}
                <ResponsiveContainer>
                    <BarChart data={accuracyData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}> {/* Adjusted margin */}
                        <CartesianGrid strokeDasharray="3 3" stroke="#fdba74" opacity={0.3}/>
                        <XAxis dataKey="name" stroke="#fb923c" fontSize={12}/>
                        <YAxis stroke="#fb923c" fontSize={12} unit="%"/>
                        <Tooltip wrapperStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', fontSize: '12px' }}/>
                        <Legend wrapperStyle={{ fontSize: '12px' }}/>
                        <Bar dataKey="accuracy" name="Accuracy (%)" barSize={40}>
                             {accuracyData.map((entry, index) => ( <Cell key={`cell-${index}`} fill={entry.fill} /> ))}
                         </Bar>
                    </BarChart>
                </ResponsiveContainer>
             </div>
             <p className="text-gray-600 mt-4 text-sm text-left">Higher accuracy on diverse historical scripts compared to standard tools.</p>
          </motion.div>

          {/* Time Savings Chart */}
           <motion.div
              className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200"
              variants={chartVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
             <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 text-left">Transcription Time Comparison</h3>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <LineChart data={timeData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>
                        <XAxis dataKey="name" stroke="#a0a0a0" fontSize={12}/>
                        <YAxis stroke="#a0a0a0" fontSize={12} unit=" min"/>
                        <Tooltip wrapperStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', fontSize: '12px' }}/>
                        <Legend wrapperStyle={{ fontSize: '12px' }}/>
                        <Line type="monotone" dataKey="Manual" name="Manual (mins)" stroke="#a0a0a0" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }}/>
                        <Line type="monotone" dataKey="TextEvolve" name="TextEvolve (mins)" stroke="#F97316" strokeWidth={2} dot={{ r: 4, fill: '#F97316' }} activeDot={{ r: 6, fill: '#F97316' }} />
                    </LineChart>
                </ResponsiveContainer>
             </div>
             <p className="text-gray-600 mt-4 text-sm text-left">Drastically reduces time spent on manual transcription per page.</p>
          </motion.div>

           {/* Language Support Chart (Example Pie) */}
           {/* <motion.div
               className="lg:col-span-2 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 mt-8"
               variants={chartVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}
            >
               <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 text-center">Broad Language & Script Support</h3>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={languageData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={110}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                fontSize={12}
                                >
                                {languageData.map((entry, index) => ( <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /> ))}
                             </Pie>
                            <Tooltip wrapperStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', fontSize: '12px' }}/>
                             <Legend wrapperStyle={{ fontSize: '12px', marginTop: '20px' }} />
                         </PieChart>
                     </ResponsiveContainer>
                 </div>
                 <p className="text-gray-600 mt-4 text-sm text-center">Supports a growing range of historical languages and handwriting styles.</p>
             </motion.div> */}

        </div>
      </div>
    </section>
  );
}

export default Results;