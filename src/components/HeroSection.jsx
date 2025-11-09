import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-[#F6EFE8]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to enhance readability without blocking Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-[#F6EFE8]/85" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 rounded-full bg-white/70 px-4 py-1 text-xs tracking-widest text-[#7A6A57] backdrop-blur-sm"
        >
          BHAVANA HAIR & MAKEUP
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl leading-tight text-[#1E1B16] sm:text-5xl md:text-6xl"
        >
          Toronto Bridal Makeup Artist
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base text-[#4A4136] sm:text-lg"
        >
          Creating timeless, elegant looks that reflect your unique beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-[#C8A96A] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#b99758]"
          >
            Check Availability
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-[#E8CFC2] bg-white/70 px-6 py-3 text-sm font-medium text-[#B0807A] backdrop-blur-sm transition hover:bg-[#FFE9E3]"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
