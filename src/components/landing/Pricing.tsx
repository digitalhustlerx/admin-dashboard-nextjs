"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Shuttle",
      price: "$100",
      period: "/launch",
      features: [
        "Up to 10 launches per month",
        "Basic analytics dashboard",
        "Email support",
        "1GB storage",
        "Standard delivery speed",
      ],
      featured: false,
    },
    {
      name: "Pro Rocket",
      price: "$3000",
      period: "/launch",
      features: [
        "Up to 100 launches per month",
        "Advanced analytics dashboard",
        "Priority email & chat support",
        "10GB storage",
        "Fast delivery speed",
        "Custom domain support",
        "Everything included from Starter",
      ],
      featured: false,
    },
    {
      name: "Team Explorer",
      price: "$15000",
      period: "/launch",
      features: [
        "Unlimited launches",
        "Real-time analytics dashboard",
        "24/7 phone & chat support",
        "100GB storage",
        "Warp speed delivery",
        "Multiple custom domains",
        "Team collaboration tools",
        "API access",
        "Everything included from Pro",
      ],
      featured: true,
    },
    {
      name: "Enterprise Shuttle",
      price: "Contact us",
      period: "",
      features: [
        "Unlimited everything",
        "Dedicated account manager",
        "Custom integrations",
        "Unlimited storage",
        "Maximum speed delivery",
        "White-label solution",
        "SLA guarantee",
        "Custom contracts",
        "Everything included from Team",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">
            Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto uppercase tracking-wide">
            Choose Your Payload
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                    Featured
                  </span>
                </div>
              )}

              <div
                className={`relative h-full bg-gradient-to-b from-gray-900 to-black border rounded-2xl p-8 ${
                  plan.featured
                    ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                    : "border-white/10 hover:border-purple-500/50"
                } transition-all duration-300`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-400 ml-2">{plan.period}</span>}
                  </div>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all ${
                    plan.featured
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-lg shadow-cyan-500/50"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
