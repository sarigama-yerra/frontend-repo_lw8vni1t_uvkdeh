import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { url: 'https://images.unsplash.com/photo-1619451334796-6f6f4cfef9f5?q=80&w=1887&auto=format&fit=crop', category: 'Bridal' },
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1887&auto=format&fit=crop', category: 'Party' },
  { url: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1887&auto=format&fit=crop', category: 'Traditional' },
  { url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1887&auto=format&fit=crop', category: 'Bridal' },
  { url: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1887&auto=format&fit=crop', category: 'Bridal' },
  { url: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1887&auto=format&fit=crop', category: 'Party' },
  { url: 'https://images.unsplash.com/photo-1519741496000-c61e29b94633?q=80&w=1887&auto=format&fit=crop', category: 'Traditional' },
  { url: 'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1887&auto=format&fit=crop', category: 'Bridal' }
];

const filters = ['All', 'Bridal', 'Party', 'Traditional'];

const PortfolioSection = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return images;
    return images.filter((img) => img.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-[#1E1B16] sm:text-4xl">Bridal Transformations</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm transition ${active === f ? 'border-[#C8A96A] bg-[#FFF7EA] text-[#6E5A3A]' : 'border-[#EBDDD1] text-[#6C5B4A] hover:bg-[#FFF7EA]'} `}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img.url}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={img.url}
                  alt={img.category}
                  className="h-72 w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100">
                  <div className="w-full p-4 text-white">
                    <p className="text-sm uppercase tracking-wider">{img.category}</p>
                    <p className="text-xs opacity-90">View Look</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
