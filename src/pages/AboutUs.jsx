import { useEffect, useState } from "react";
import AboutImage from "../assets/AboutImage.jpg"
function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 20);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.ceil(start));
    }, 20);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count} +</span>;
}

export default function AboutSection() {
  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white w-full">
      {/* Top Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-sm uppercase text-gray-300 mb-2">Our Story</h4>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Writing content like you’ve never had before
          </h2>
        </div>
        <div className="text-gray-300 leading-relaxed">
          <p className="mb-4">
            At Proriterz, we don't just tell stories; we create experiences. Our journey began with a simple, yet powerful idea: to change the way content is crafted and shared. With creativity as our fuel and innovation as our compass, we set out to break away from traditional storytelling and bring fresh, captivating content to the world. What started as a small team of passionate storytellers has since grown into a powerhouse of creative minds, each dedicated to transforming the ordinary into something extraordinary.
          </p>
          <p className="mb-4">
           From day one, we've believed that every piece of content has the potential to inspire, inform, and impact. Whether we're working with clients to develop their brand's voice, creating compelling narratives, or delivering cutting-edge digital content, our goal is the same: to leave a lasting impression. Our approach is built on a foundation of authenticity, originality, and meticulous attention to detail. We don't just create content that fills space-we create content that resonates, sparks conversation, and connects with audiences on a deeper level.
          </p>
          <p>
          As we've grown, we've never lost sight of our core values. We continue to challenge the status quo, experimenting with new formats, technologies, and platforms to deliver content that stands out. Every project we take on is an opportunity to push boundaries, explore new ideas, and redefine the limhs of creativity, Our journey is far from over, and with each new chapter, we're writing content like you've never had before-content that inspires, engages, and leaves
          </p>
        </div>
      </section>

      {/* Image + Animated Stats */}
      <div className="max-w-6xl mx-auto px-6">
        <img
          src={AboutImage}
          alt="AboutImage"
          className="rounded-lg w-full mb-10"
        />
        <div className="grid grid-cols-3 text-center text-yellow-400 font-bold text-xl">
          <div>
            <p><Counter target={7} /></p>
            <p className="text-white text-sm font-medium">Years Experience</p>
          </div>
          <div>
            <p><Counter target={215} /></p>
            <p className="text-white text-sm font-medium">Completed Projects</p>
          </div>
          <div>
            <p><Counter target={100} /></p>
            <p className="text-white text-sm font-medium">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Orange CTA Bar */}
      <div className="bg-yellow-500 text-black py-10 mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          We make the creative solutions for modern brands
        </h3>
        <button className="bg-black text-yellow-500 px-6 py-2 font-semibold rounded hover:bg-gray-800 transition">
          CONTACT US
        </button>
      </div>

      {/* Blog Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 text-white">
        <div>
          <h4 className="text-sm uppercase text-yellow-400 mb-2">Our Blog</h4>
          <h2 className="text-2xl font-bold">Most popular blog publication.</h2>
        </div>
        <div className="text-gray-300">
          <p className="mb-6">
           Our blog is an essential platform where we share insights, industry trends, and helpful tips to keep our audience informed and engaged. It's where we offer expert advice on a range of topics, provide solutions to common challenges, and explore the latest innovations. With a focus on delivering practical and valuable content, our blog aims to support individuals and businesses alike. By regularly publishing fresh, relevant information, we strive to create a space for learning, discussion, and growth for our readers and the wider community.
          </p>
          <p>
            As we continue to grow and evolve, we remain dedicated to curating content that matters. We encourage you to explore our most popular posts, engage with the conversations, and join us as we continue to deliver the kind of insightful, meaningful content that our audience values. Every post is an opportunity to learn and connect, and we're excited to share our knowledge with you.
          </p>
        </div>
      </div>

      {/* Newsletter */}
      
      <div className="max-w-4xl mx-auto px-6 pb-16 text-white">
        <div className="flex text-center justify-center">
           <h3 className="text-2xl font-semibold mb-4 ">Newsletter</h3>
        </div>
       
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <button className="bg-yellow-500 text-black px-6 py-2 font-semibold rounded hover:bg-yellow-400 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className=" max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-yellow-500 text-2xl font-bold">Professional</h2>
            <p className="text-sm mt-2">© 2025 Proriter. All Rights Reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-300">marketing@proriter.com</p>
            <p className="text-sm text-gray-300 mt-1">+91-83484-90633</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4 text-lg text-yellow-500">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-500">
          Developed by Proriter Team
        </div>
      </footer>
    </div>
  );
}
