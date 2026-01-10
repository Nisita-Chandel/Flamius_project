import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-black text-white pt-28">

      {/* ================= HERO ================= */}
      <section className="text-center px-6 mb-24">
        <p className="text-yellow-500 tracking-widest text-xs mb-4">
          ✦ GET IN TOUCH
        </p>

        <h1 className="text-5xl md:text-6xl font-serif mb-6">
          Let’s Create <br />
          <span className="text-yellow-500">Memories Together</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
          We'd love to hear from you. Whether you're planning a special event
          or just want to say hello, our team is here to make your experience
          extraordinary.
        </p>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 mb-32">
        {/* LEFT */}
        <div>
          <p className="text-gray-400 mb-10">
            Our dedicated team is committed to providing you with exceptional
            service. Reach out to us through any of the following channels.
          </p>

          <div className="space-y-6">
            <div className="bg-neutral-900 rounded-2xl p-6 border border-yellow-500/10">
              <h4 className="text-yellow-500 font-semibold mb-2 flex items-center gap-2">
                📍 Visit Us
              </h4>
              <p className="text-gray-300 text-sm">
                Main Market, Balaghat <br />
                Madhya Pradesh 481001
              </p>
              <p className="text-yellow-500 text-xs mt-2">
                Located in the heart of the city
              </p>
            </div>

            <div className="bg-neutral-900 rounded-2xl p-6 border border-yellow-500/10">
              <h4 className="text-yellow-500 font-semibold mb-2 flex items-center gap-2">
                📞 Call Us
              </h4>
              <p className="text-gray-300 text-sm">+91 XXXX XXXX XX</p>
              <p className="text-yellow-500 text-xs mt-2">
                Available 24/7 for reservations
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-neutral-900 rounded-2xl p-8 border border-yellow-500/10">
          <form className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-yellow-500 text-xs">FULL NAME *</label>
              <input className="w-full mt-2 p-3 rounded-lg bg-black border border-yellow-500/20" />
            </div>

            <div>
              <label className="text-yellow-500 text-xs">EMAIL ADDRESS *</label>
              <input className="w-full mt-2 p-3 rounded-lg bg-black border border-yellow-500/20" />
            </div>

            <div>
              <label className="text-yellow-500 text-xs">PHONE NUMBER</label>
              <input className="w-full mt-2 p-3 rounded-lg bg-black border border-yellow-500/20" />
            </div>

            <div>
              <label className="text-yellow-500 text-xs">SUBJECT *</label>
              <input className="w-full mt-2 p-3 rounded-lg bg-black border border-yellow-500/20" />
            </div>

            <div className="col-span-2">
              <label className="text-yellow-500 text-xs">YOUR MESSAGE *</label>
              <textarea rows="5" className="w-full mt-2 p-3 rounded-lg bg-black border border-yellow-500/20" />
            </div>

            <button className="col-span-2 mt-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black py-4 rounded-lg font-semibold">
              ✈ SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* ================= CONNECT ================= */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 mb-32">
        <div>
          <h2 className="text-4xl font-serif mb-6">
            Connect With <span className="text-yellow-500">Flamius</span>
          </h2>
          <p className="text-gray-400 max-w-md">
            Stay connected with us for exclusive offers and personalized
            dining experiences.
          </p>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 border border-yellow-500/10">
          <h4 className="text-yellow-500 font-semibold mb-2">💬 Send Us a Message</h4>
          <p className="text-gray-400 text-sm">
            We’ll get back to you promptly.
          </p>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h3 className="text-center text-3xl font-serif mb-8">Find Us Here</h3>
        <div className="rounded-2xl bg-gradient-to-b from-[#1e2b3b] to-[#0b1622]
                        p-16 text-center border border-yellow-500/10">
          <div className="text-yellow-500 text-4xl mb-4">📍</div>
          <h4>Main Market, Balaghat</h4>
          <p className="text-gray-400 text-sm">Madhya Pradesh 481001</p>
          <p className="text-yellow-500 text-sm mt-4">Interactive Map Coming Soon</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-gray-400 pt-24 px-6 border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="text-yellow-500 font-serif text-2xl mb-4">🔥 FLAMIUS</h3>
            <p className="text-sm">
              Experience the art of premium coffee crafted with precision and passion.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-500 tracking-widest mb-4">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm">
              <li>Home</li>
              <li>Menu</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-500 tracking-widest mb-4">CONTACT INFO</h4>
            <ul className="space-y-3 text-sm">
              <li>Main Market, Balaghat</li>
              <li>+91 XXXX XXXX XX</li>
              <li>hello@flamius.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-500 tracking-widest mb-4">OPENING HOURS</h4>
            <p className="text-sm">Mon–Sun: 7:00 AM – 11:00 PM</p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-12 pb-6">
          © {new Date().getFullYear()} Flamius. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default AboutPage;
