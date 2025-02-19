'use client'
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion'

const page = () => {
  return (
    <div className="font-sans">
    <Head>
      <title>Thrive & Flourish</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* Hero Section */}
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-r from-green-100 to-white py-20 text-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-image.jpg" // Replace with your image
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-700 mb-4">
          Thrive & Flourish
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Emotional and Mental Well-being for Special Needs Parents
        </p>
        <p className="text-lg text-gray-800">
          Because You Deserve to Thrive, Not Just Survive!
        </p>
      </div>
    </motion.header>

    {/* Main Content */}
    <main className="container mx-auto py-16 px-4">
      {/* Problem Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-orange-600 mb-6 text-center">
          Do you often feel:
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li className="mb-2">Stressed, exhausted, or emotionally drained?</li>
          <li className="mb-2">Overwhelmed by caregiving responsibilities?</li>
          <li className="mb-2">Guilty for wanting a break or time for yourself?</li>
          <li className="mb-2">Alone, with no one who truly understands your struggles?</li>
        </ul>
        <p className="mt-4 text-lg text-gray-800 text-center">
          If you answered yes to any of these, this training is for you! 🎯
        </p>
      </section>

      {/* What You'll Learn Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-600 mb-6 text-center">
          What You’ll Learn in This Transformational Program
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 border rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-orange-500 mb-4">
              🧡 Module 1: Understanding Your Emotional Journey
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>How to navigate guilt, fear, frustration & acceptance</li>
              <li>Managing the emotional highs and lows of special needs parenting</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 border rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-green-500 mb-4">
              🧘‍♀️ Module 2: Managing Stress & Avoiding Burnout
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Practical stress management strategies for busy parents</li>
              <li>Simple self-care routines that fit your lifestyle</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 border rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              🧠 Module 3: Strengthening Your Mindset for Resilience
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>How to shift from survival mode to thriving mode</li>
              <li>Emotional Freedom Techniques (EFT) for stress relief</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-orange-600 mb-6 text-center">
          Why You Should Join This Training
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li className="mb-2">💡 Learn practical tools to manage stress & avoid burnout</li>
          <li className="mb-2">💡 Develop a positive, resilient mindset for your parenting journey</li>
          <li className="mb-2">💡 Reconnect with yourself and find inner peace & strength</li>
          <li className="mb-2">💡 Become more organized & structured in managing your child’s needs</li>
        </ul>
      </section>

      {/* Bonus Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-600 mb-6 text-center">
          Bonus Sessions & Exclusive Resources! ✨
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li className="mb-2">🎁 Daily Affirmations</li>
          <li className="mb-2">🎁 Workbook</li>
          <li className="mb-2">🎁 Journaling Prompts for Mental Strength (at a discounted fee)</li>
        </ul>
        <p className="mt-4 text-lg text-gray-800 text-center">
          🎯 You don’t have to do this alone. Let’s help you THRIVE!
        </p>
      </section>

      {/* Registration Section */}
      <section className="text-center">
        <p className="text-lg text-gray-800">
          📅 Limited Slots Available – Register Now!
        </p>
        <a
          href="#"
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full inline-block"
        >
          👉 Click Here to Enroll
        </a>
        <p className="mt-4 text-gray-700">
          📍 Venue: Virtual event<br />
          🗓️ Date: 4th & 5th, 11th & 12th April, 2025<br />
          ⏰ Time: 7pm – 9:30pm<br />
          💰 Investment: N50,000 / $50 per participant<br />
          📩 For inquiries, contact: dpiservicesng@gmail.com / 0704 646 8669 (WhatsApp msg only)
        </p>
        <p className="mt-8 text-2xl text-blue-600">
          💙 Take the first step toward your emotional healing and well-being. You deserve it! 💙
        </p>
      </section>
    </main>
  </div>
  )
}

export default page