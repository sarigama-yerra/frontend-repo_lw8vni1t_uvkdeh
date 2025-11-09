import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Bridal Makeup',
    desc: 'Timeless, long-lasting elegance tailored for your big day.',
    price: 'Starting from $299 CAD'
  },
  {
    title: 'Bridal Hairstyles',
    desc: 'Elegant updos and waves crafted to match your outfit and vibe.',
    price: 'Starting from $199 CAD'
  },
  {
    title: 'Saree Draping',
    desc: 'Perfect pleats and graceful drapes for any traditional look.',
    price: 'Starting from $129 CAD'
  },
  {
    title: 'Party & Engagement Looks',
    desc: 'Soft glam for every occasion, from pre-wedding to reception.',
    price: 'Starting from $199 CAD'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full bg-[#FFF9F6] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-[#1E1B16] sm:text-4xl">What I Offer</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#6C5B4A]">
            Luxury, photo-ready services designed to enhance your natural beauty.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-[#EBDDD1] bg-white p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F9EFE6] opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <h3 className="font-serif text-xl text-[#2A2119]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#6C5B4A]">{s.desc}</p>
                <p className="mt-4 inline-block rounded-full bg-[#FFF4EA] px-3 py-1 text-xs text-[#8A6B42]">
                  {s.price}
                </p>
                <div className="mt-6">
                  <a href="#contact" className="text-sm font-medium text-[#B0807A] underline-offset-4 hover:underline">
                    Check Availability
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
