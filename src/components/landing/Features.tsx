"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Speedy Delivery",
      description: "Lightning-fast content delivery across the globe",
      stats: [
        { label: "Satellites", value: "2,052" },
        { label: "Starlinks", value: "8,230,002" },
        { label: "Rockets", value: "7,224" },
      ],
    },
    {
      title: "Scalable Payloads",
      description: "Handle any amount of content with ease",
      stats: [
        { label: "Last Month", value: "6,092" },
        { label: "Modules delivered", value: "72K" },
        { label: "Launched", value: "+8,008" },
      ],
    },
    {
      title: "Mission Control Dashboard",
      description: "Monitor and manage your content in real-time",
      stats: [
        { label: "Active Missions", value: "1,234" },
        { label: "Success Rate", value: "99.9%" },
        { label: "Uptime", value: "100%" },
      ],
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">
            Features to Propel Your Content
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            LaunchPad provides everything you need to deliver your content at warp speed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>

                  {/* Stats */}
                  <div className="space-y-4">
                    {feature.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5"
                      >
                        <span className="text-sm text-gray-400">{stat.label}</span>
                        <span className="text-lg font-bold text-cyan-400">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* User avatars for first card */}
                  {index === 0 && (
                    <div className="mt-6 flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-gray-900"></div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-gray-900"></div>
                      </div>
                      <span className="text-xs text-gray-500">Manu Arora, Tyler Durden</span>
                    </div>
                  )}

                  {/* Dashboard preview for third card */}
                  {index === 2 && (
                    <div className="mt-6 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="text-xs text-gray-500">Live Dashboard</div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-cyan-500/30 rounded-full w-full"></div>
                        <div className="h-2 bg-purple-500/30 rounded-full w-3/4"></div>
                        <div className="h-2 bg-blue-500/30 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
