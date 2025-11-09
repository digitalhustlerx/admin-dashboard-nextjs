"use client";

import { motion } from "framer-motion";

export default function RecentLaunches() {
  const launches = [
    {
      mission: "#102",
      title: "MISSION APOLLO",
      description: "Successfully deployed global content distribution network across 50+ countries with 99.9% uptime.",
    },
    {
      mission: "#101",
      title: "MISSION ARTEMIS",
      description: "Launched high-performance CDN infrastructure serving 10M+ requests per second.",
    },
    {
      mission: "#100",
      title: "MISSION ORION",
      description: "Deployed edge computing nodes in 100+ locations for ultra-low latency content delivery.",
    },
    {
      mission: "#102",
      title: "MISSION APOLLO",
      description: "Successfully deployed global content distribution network across 50+ countries with 99.9% uptime.",
    },
    {
      mission: "#101",
      title: "MISSION ARTEMIS",
      description: "Launched high-performance CDN infrastructure serving 10M+ requests per second.",
    },
    {
      mission: "#100",
      title: "MISSION ORION",
      description: "Deployed edge computing nodes in 100+ locations for ultra-low latency content delivery.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">
            Recent Launches
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto uppercase tracking-wide">
            Our Latest Launches That Made It To The Universe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {launches.map((launch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300">
                {/* Mission number badge */}
                <div className="inline-block mb-4 px-4 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full">
                  <span className="text-cyan-400 font-bold text-sm">{launch.mission}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  {launch.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {launch.description}
                </p>

                {/* Status indicator */}
                <div className="mt-6 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-gray-500 uppercase">Active</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
