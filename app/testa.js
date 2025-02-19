// pages/index.js
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="p-6 bg-green-500">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-white">Thrive & Flourish</h1>
          </motion.div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-orange-500">Home</a>
            <a href="#" className="text-white hover:text-orange-500">About</a>
            <a href="#" className="text-white hover:text-orange-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-green-500">
              Emotional and Mental Well-being for Special Needs Parents
            </h2>
            <p className="text-gray-600 text-lg">
              Because You Deserve to Thrive, Not Just Survive!
            </p>
            <p className="text-gray-600">
              Parenting a child with special needs can be overwhelming, exhausting, and emotionally draining. You love your child, but who takes care of YOU?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold"
            >
              Enroll Now
            </motion.button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                src="/hero-image.jpg" // Replace with your image path
                alt="Happy Parent"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-500 mb-8">What People Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 mb-4">
                  "This program has been life-changing. I feel more empowered and less alone."
                </p>
                <p className="text-orange-500 font-semibold">- Parent {index}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-green-500 text-center mb-8">
            What You’ll Learn in This Transformational Program
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Module 1: Understanding Your Emotional Journey",
                content:
                  "How to navigate guilt, fear, frustration & acceptance. Managing the emotional highs and lows of special needs parenting.",
              },
              {
                title: "Module 2: Managing Stress & Avoiding Burnout",
                content:
                  "Practical stress management strategies for busy parents. Simple self-care routines that fit your lifestyle.",
              },
              {
                title: "Module 3: Strengthening Your Mindset for Resilience",
                content:
                  "How to shift from survival mode to thriving mode. Emotional Freedom Techniques (EFT) for stress relief.",
              },
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-green-50 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-bold text-green-500 mb-4">{module.title}</h4>
                <p className="text-gray-600">{module.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-green-500 text-white text-center">
        <p>© 2023 Thrive & Flourish. All rights reserved.</p>
      </footer>
    </div>
  );
}

