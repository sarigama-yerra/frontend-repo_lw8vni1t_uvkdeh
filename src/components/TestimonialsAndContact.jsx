import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya S.',
    text: 'Bhavana made me feel like a princess on my wedding day! The makeup lasted all day and looked stunning in photos.'
  },
  {
    name: 'Ananya M.',
    text: 'Professional, warm, and incredibly talented. My bridal party looked flawless — highly recommend!'
  },
  {
    name: 'Sonia K.',
    text: 'The soft glam was exactly what I wanted. It felt light, looked radiant, and photographed beautifully.'
  },
  {
    name: 'Nisha R.',
    text: 'From trial to big day, everything was seamless. Loved the hairstyle and draping too!'
  }
];

const Input = ({ label, type = 'text', name, required }) => (
  <label className="block">
    <span className="text-sm text-[#6C5B4A]">{label}</span>
    <input
      type={type}
      name={name}
      required={required}
      className="mt-1 w-full rounded-xl border border-[#EBDDD1] bg-white px-3 py-2 text-sm text-[#2A2119] placeholder-[#A89582] outline-none focus:border-[#C8A96A]"
      placeholder=""
    />
  </label>
);

const Textarea = ({ label, name, required }) => (
  <label className="block">
    <span className="text-sm text-[#6C5B4A]">{label}</span>
    <textarea
      name={name}
      required={required}
      rows={4}
      className="mt-1 w-full rounded-xl border border-[#EBDDD1] bg-white px-3 py-2 text-sm text-[#2A2119] placeholder-[#A89582] outline-none focus:border-[#C8A96A]"
    />
  </label>
);

const TestimonialsAndContact = () => {
  return (
    <section id="contact" className="w-full bg-[#FDF8F5] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-[#1E1B16] sm:text-4xl">Loved by Brides</h2>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {testimonials.map((t, idx) => (
                <div key={idx} className="rounded-2xl border border-[#F0E4DA] bg-white p-5">
                  <div className="mb-2 flex items-center gap-1 text-[#C8A96A]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="#C8A96A" color="#C8A96A" />
                    ))}
                  </div>
                  <p className="text-[#4A4136]">“{t.text}”</p>
                  <p className="mt-2 text-sm text-[#7A6A57]">— {t.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="font-serif text-2xl text-[#1E1B16]">Behind the Glow</h3>
              <ul className="mt-3 space-y-2 text-[#6C5B4A]">
                <li>• Top Toronto Bridal Makeup Trends 2025</li>
                <li>• How to Make Your Bridal Look Last All Day</li>
                <li>• Saree Draping Styles for Modern Brides</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-[#1E1B16] sm:text-4xl">Work With Me</h2>
            <p className="mt-2 text-[#6C5B4A]">Let’s create your dream bridal look.</p>

            <div className="mt-6 space-y-2 text-sm text-[#6C5B4A]">
              <p>🌐 Website: www.bhavanahairandmakeup.com</p>
              <p>✉️ Email: <a href="mailto:bhavana.hairandmakeup@gmail.com" className="underline">bhavana.hairandmakeup@gmail.com</a></p>
              <p>📞 Phone: +1 (647) XXX-XXXX</p>
              <p>📸 Instagram: <a href="https://instagram.com/bhavana.hairandmakeup" target="_blank" rel="noreferrer" className="underline">@bhavana.hairandmakeup</a></p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid grid-cols-1 gap-4">
              <Input label="Name" name="name" required />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input label="Email" type="email" name="email" required />
                <Input label="Phone" type="tel" name="phone" />
              </div>
              <Input label="Event Date" type="date" name="date" />
              <Textarea label="Message" name="message" required />
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#C8A96A] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#b99758]"
              >
                Check Availability
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-16 rounded-2xl border border-[#F0E4DA] bg-[#FBF3EC] p-6 text-center text-sm text-[#6C5B4A]">
          <p>© 2025 Bhavana Hair & Makeup</p>
          <p className="mt-1 text-[#A07C73]">“Made with love for every beautiful bride.”</p>
        </footer>
      </div>
    </section>
  );
};

export default TestimonialsAndContact;
