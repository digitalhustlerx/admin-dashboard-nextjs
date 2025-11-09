"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "LaunchPad has completely transformed how we deliver content to our users. The speed and reliability are unmatched!",
      author: "Jane Doe",
      role: "Content Manager",
    },
    {
      quote: "The scalability of LaunchPad is incredible. We've been able to handle massive traffic spikes without any issues.",
      author: "Alfred Pecker",
      role: "Developer",
    },
    {
      quote: "The Mission Control Dashboard gives us complete visibility into our content delivery. It's a game-changer!",
      author: "Emily Chen",
      role: "Web Developer",
    },
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
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Join thousands of satisfied users who trust LaunchPad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300">
                {/* Quote icon */}
                <div className="text-cyan-500 text-5xl mb-4 opacity-50">"</div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
