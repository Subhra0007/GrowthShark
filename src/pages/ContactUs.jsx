import { Mail, Phone } from 'lucide-react';

function ContactSection() {
  return (
    <section className="text-white py-30 bg-gradient-to-r from-black via-[#0b223f] to-[#06263f]">
      {/* Heading */}
      <div className=' px-6  max-w-6xl mx-auto '>
      <h2 className="text-sky-400 text-sm font-semibold mb-4">Contact</h2>
      <h3 className="text-3xl sm:text-4xl font-bold  mb-8">Get in touch</h3>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="space-y-6 text-gray-400">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6" />
            <a href="mailto:marketing@proriterz.com" className="text-lg hover:underline">
              marketing@proriterz.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6" />
            <a href="mailto:diptesh@proriterz.com" className="text-lg hover:underline">
              diptesh@proriterz.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6" />
            <a href="tel:+918348296083" className="text-lg hover:underline">
              +91 83482 96083
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-300 outline-none py-2 placeholder-gray-200"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="border-b border-gray-300 outline-none py-2 placeholder-gray-200"
              required
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full border-b border-gray-300 outline-none py-2 placeholder-gray-200 resize-none"
            rows="4"
          ></textarea>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-300 italic">
              *We promise not to disclose your personal information to third parties.
            </p>
            <button className="bg-sky-400 text-black px-6 py-2 rounded shadow hover:bg-sky-500 transition">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Live Map Embed */}
      <div className="mt-12 w-full h-[450px]">
       <iframe
  title="Bardhaman Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49642.585803087815!2d87.82504918794346!3d23.246215328212315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f849d1ea7e5efd%3A0x4ce71a0a521f8b0e!2sBardhaman%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1754377415094!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded shadow"
/>

      </div>
      </div>
    </section>
  );
}

export default ContactSection;
