import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h2 className="font-serif text-3xl text-[#1E1B16] sm:text-4xl">Meet Bhavana</h2>
          <p className="mt-5 text-[#4A4136]">
            I’m a Toronto-based makeup artist specializing in bridal, party, and event-ready looks. With a passion for enhancing natural beauty, I create soft-glam styles that last all day and photograph beautifully. My focus is to make every client feel confident, radiant, and camera-ready on their special day.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-full border border-[#C8A96A] px-5 py-2 text-sm text-[#6E5A3A] transition hover:bg-[#FFF7EA]"
          >
            Check Availability
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#F6EFE8]">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1887&auto=format&fit=crop"
              alt="Bhavana doing makeup"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F6EFE8]/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
