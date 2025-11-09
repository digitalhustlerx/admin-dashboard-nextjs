"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Plan your Mission",
      description: "Define your content delivery strategy and set your goals",
    },
    {
      number: "02",
      title: "Prepare your Payload",
      description: "Upload and configure your content for optimal delivery",
    },
    {
      number: "03",
      title: "Launch your Content",
      description: "Deploy your content to our global network with one click",
    },
    {
      number: "04",
      title: "Monitor",
      description: "Track performance and analytics in real-time from Mission Control",
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
            How LaunchPad Works
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our innovative system makes content delivery simple and efficient
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent -translate-x-1/2 z-0"></div>
              )}

              <div className="relative z-10 text-center">
                {/* Number circle */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 text-white text-xl font-bold">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual flow indicator for mobile */}
        <div className="lg:hidden mt-12 flex justify-center">
          <div className="flex flex-col items-center space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
