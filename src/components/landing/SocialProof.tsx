"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  const brands = [
    "SpaceX", "NASA", "Blue Origin", "Virgin Galactic", 
    "Boeing", "Lockheed Martin", "Northrop Grumman", "Raytheon"
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto uppercase tracking-wide">
            LaunchPad is trusted by Fortune 500 space organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="relative group">
                <div className="text-2xl font-bold text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                  {brand}
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
