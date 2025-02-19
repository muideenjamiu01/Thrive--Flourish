"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import cohortImage from "@/public/assests/illustration/family with a disabled parent-bro.svg";
import OverwhelmedImage from "@/public/assests/illustration/Overwhelmed-bro.svg";
import trainingImage from "@/public/assests/illustration/Teacher student-rafiki.svg";
import { GiCheckMark } from "react-icons/gi";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { TbWorldWww } from "react-icons/tb";
import { MdBrandingWatermark } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white px-6 max-w-screen-xl mx-auto space-y-40"
      >
        <div class="flex flex-col md:flex-row gap-16 items-center justify-between">
          <div class="md:w-1/2 mt-8 md:mt-0">
            <div className="p-2 w-fit font-bold bg-[#0B9031] text-green-100 rounded mb-10">
              Thrive & Flourish
            </div>
            <h2 class="capitalize font-semibold text-xl md:text-3xl">
              Emotional and Mental Well-being for Special Needs Parents Because
              You Deserve to Thrive, Not Just Survive!
            </h2>
            <p class="my-8">
              Parenting a child with special needs can be overwhelming,
              exhausting, and emotionally draining. You love your child, but who
              takes care of YOU?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold"
            >
              Enroll Now
            </motion.button>
          </div>

          <div class="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                src={cohortImage} // Replace with your image path
                alt="Happy Parent"
                width={500}
                height={500}
                className="duration-500 transition-opacity ease-in mx-auto"
              />
            </motion.div>
            {/* <Image
              class="duration-500 transition-opacity ease-in mx-auto"
              
            /> */}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-[#0B9031] px-6  space-y-40"
      >
        <div class="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row gap-16 items-center justify-between">
          <div class="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                src={OverwhelmedImage} // Replace with your image path
                alt="Happy Parent"
                width={500}
                height={500}
                className="duration-500 transition-opacity ease-in mx-auto"
              />
            </motion.div>
          </div>
          <div class="md:w-1/2 mt-8 md:mt-0">
            <h2 class="capitalize font-semibold text-xl md:text-3xl mb-5 md:mb-10 text-white text-center md:text-left">
              Do you often feel
            </h2>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <GiCheckMark className="text-white text-sm" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-white">
                Stressed, exhausted, or emotionally drained?
              </p>
            </div>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <GiCheckMark className="text-white text-sm" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-white">
                Overwhelmed by caregiving responsibilities?
              </p>
            </div>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <GiCheckMark className="text-white text-sm" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-white">
                Guilty for wanting a break or time for yourself?
              </p>
            </div>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <GiCheckMark className="text-white text-sm" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-white">
                Alone, with no one who truly understands your struggles?
              </p>
            </div>

            <p class="md-16 md:mt-20 text-sm md:text-lg font-semibold text-white italic text-center md:text-left">
              If you answered yes to any of these, this training is for you! 🎯
            </p>
          </div>
        </div>
      </motion.section>

      {/* Program Modules */}
      <section className="py-16 px-8 md-px-10 bg-gray-100">
        <h2 className="text-xl md:text-3xl font-bold text-center text-green-700 mb-8">
          What You’ll Learn in This Transformational Program
        </h2>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Understanding Your Emotional Journey",
                points: [
                  "How to navigate guilt, fear, frustration & acceptance",
                  "Managing the emotional highs and lows of special needs parenting",
                ],
              },
              {
                title: "Managing Stress & Avoiding Burnout",
                points: [
                  "Practical stress management strategies for busy parents",
                  "Simple self-care routines that fit your lifestyle",
                ],
              },
              {
                title: " Strengthening Your Mindset for Resilience",
                points: [
                  "How to shift from survival mode to thriving mode",
                  "Emotional Freedom Techniques (EFT) for stress relief",
                ],
              },
            ].map((module, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-base md:text-xl font-black text-center text-green-700 mb-4">
                  {module.title}
                </h3>
                <ul className="mt-2 list-disc list-inside text-sm md:text-lg text-gray-700">
                  {module.points.map((point, i) => (
                    <li key={i} className="my-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white px-6  space-y-40"
      >
        <div class="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row gap-16 items-center justify-between">
          <div class="md:w-1/2 mt-8 md:mt-0">
            <h2 class="capitalize font-semibold text-xl md:text-4xl mb-10 text-black">
              Why You Should Join This Training
            </h2>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-[#0B9031] rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <GiCheckMark className="text-white text-base" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-black">
                Learn practical tools to manage stress & avoid burnout
              </p>
            </div>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-[#0B9031] rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <GiCheckMark className="text-white text-base" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-black">
                Develop a positive, resilient mindset for your parenting journey
              </p>
            </div>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-[#0B9031] rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <GiCheckMark className="text-white text-base" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-black">
                Reconnect with yourself and find inner peace & strength
              </p>
            </div>
            <div className="flex gap-x-4 items-center mb-4">
              <div className="bg-[#0B9031] rounded-full w-8 h-8 flex items-center justify-center">
                {" "}
                <GiCheckMark className="text-white text-base" />
              </div>
              <p className="text-sm md:text-lg font-semibold text-black">
                Become more organized & structured in managing your child’s
                needs
              </p>
            </div>
          </div>

          <div class="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                src={trainingImage} // Replace with your image path
                alt="Happy Parent"
                width={500}
                height={500}
                className="duration-500 transition-opacity ease-in mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Testimonials */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            What Our Participants Say
          </h2>
          <TestimonialCarousel />
        </div>
      </section>
      <section className="py-16 px-8 md-px-10 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Bonus Sessions & Exclusive Resources!
        </h2>
        <div className="max-w-screen-xl mx-auto ">
          <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
            <div class="w-full px-4 py-4 mt-6 bg-[#0B9031] rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-orange-500 rounded-md">
                  <TbWorldWww />
                </div>
              </div>
              <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                Website Design
              </h3>
              <p class="py-4 text-white text-md ">
                Encompassing today’s website design technology to integrated and
                build solutions relevant to your business.
              </p>
            </div>
            <div class="w-full px-4 py-4 mt-6 bg-[#0B9031] rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 ">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center w-12 h-12 mx-auto text-orange-500 bg-white rounded-md">
                  <MdBrandingWatermark  />
                </div>
              </div>
              <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                Branding
              </h3>
              <p class="py-4 text-white text-md ">
                Share relevant, engaging, and inspirational brand messages to
                create a connection with your audience.
              </p>
            </div>
            <div class="w-full px-4 py-4 mt-6 bg-[#0B9031] rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-orange-500 rounded-md">
                 <TbSeo />
                </div>
              </div>
              <h3 class="py-4 text-2xl font-semibold sm:text-xl text-white">
                SEO Marketing
              </h3>
              <p class="py-4 text-white text-md ">
                Let us help you level up your search engine game, explore our
                solutions for digital marketing for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Registration & Contact */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Join the Training
        </h2>
        <p className="text-gray-700">
          📅 4th & 5th, 11th & 12th April, 2025 • ⏰ 7pm – 9:30pm • 💰 N50,000 /
          $50
        </p>
        <motion.button
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          Register Now
        </motion.button>
        <p className="text-gray-500 mt-4">
          📩 Contact:{" "}
          <span className="text-[#0B9031]">dpiservicesng@gmail.com</span> /{" "}
          <span className="text-orange-500">0704 646 8669 </span>(WhatsApp)
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>© 2025 Thrive & Flourish. All rights reserved.</p>
      </footer>
    </main>
  );
}
