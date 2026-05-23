import React from "react";
import { motion } from "framer-motion";

/* ---------- Fade Animation ---------- */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
  >
    {children}
  </motion.div>
);

const AboutPage = () => {
  return (
    <div className="bg-black text-white pt-28 overflow-hidden">

      {/* HERO */}
      <FadeUp>
        <section className="text-center px-6 mb-24">
          <p className="text-yellow-500 tracking-[0.3em] text-xs mb-4 uppercase">
            ✦ Get In Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
            Let’s Create <br />
            <span className="text-yellow-500">
              Memories Together
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            We'd love to hear from you. Whether you're planning a special
            dinner or celebrating a memorable event, our team is here for you.
          </p>
        </section>
      </FadeUp>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 mb-28">

        {/* LEFT */}
        <FadeUp>
          <div>
            <p className="text-gray-400 mb-10 leading-7">
              Reach out anytime — we’re always happy to help with reservations,
              private dining, events, or anything else you need.
            </p>

            <div className="space-y-6">

              <div className="bg-neutral-900 p-6 rounded-2xl border border-yellow-500/10 hover:border-yellow-500 transition duration-300">
                <h3 className="text-yellow-500 font-semibold mb-2">
                  📍 Visit Us
                </h3>
                <p className="text-gray-300 text-sm">
                  Main Market, Bhopal <br />
                  Madhya Pradesh 462022
                </p>
              </div>

              <div className="bg-neutral-900 p-6 rounded-2xl border border-yellow-500/10 hover:border-yellow-500 transition duration-300">
                <h3 className="text-yellow-500 font-semibold mb-2">
                  📞 Call Us
                </h3>
                <p className="text-gray-300 text-sm">
                  +91 98765 43210
                </p>
              </div>

              <div className="bg-neutral-900 p-6 rounded-2xl border border-yellow-500/10 hover:border-yellow-500 transition duration-300">
                <h3 className="text-yellow-500 font-semibold mb-2">
                  ✉ Email Us
                </h3>
                <p className="text-gray-300 text-sm">
                  hello@flamius.com
                </p>
              </div>

            </div>
          </div>
        </FadeUp>

        {/* FORM */}
        <FadeUp delay={0.2}>
          <div className="bg-neutral-900 rounded-2xl p-8 border border-yellow-500/10 shadow-xl">

            <form className="grid grid-cols-2 gap-6">

              <div>
                <label className="text-xs text-yellow-500 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full mt-2 p-3 rounded-lg bg-black border border-yellow-500/20 focus:border-yellow-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-yellow-500 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full mt-2 p-3 rounded-lg bg-black border border-yellow-500/20 focus:border-yellow-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-yellow-500 uppercase">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full mt-2 p-3 rounded-lg bg-black border border-yellow-500/20 focus:border-yellow-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-yellow-500 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Write subject"
                  className="w-full mt-2 p-3 rounded-lg bg-black border border-yellow-500/20 focus:border-yellow-500 outline-none"
                />
              </div>

              <div className="col-span-2">
                <label className="text-xs text-yellow-500 uppercase">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full mt-2 p-3 rounded-lg bg-black border border-yellow-500/20 focus:border-yellow-500 outline-none resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="col-span-2 mt-2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black py-4 rounded-xl font-semibold"
              >
                SEND MESSAGE ✈
              </motion.button>

            </form>
          </div>
        </FadeUp>
      </section>

      {/* MAP */}
      <FadeUp>
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-center text-3xl font-serif mb-8">
            Find Us Here
          </h2>

          <div className="rounded-2xl bg-zinc-900 border border-yellow-500/10 p-20 text-center">
            <div className="text-yellow-500 text-5xl mb-4">📍</div>
            <h3 className="text-xl mb-2">Main Market, Bhopal</h3>
            <p className="text-gray-400">
              Madhya Pradesh 462022
            </p>
          </div>
        </section>
      </FadeUp>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-gray-500 text-sm">
        © 2026 Flamius Restaurant — Crafted with passion 🍽
      </footer>

    </div>
  );
};

export default AboutPage;