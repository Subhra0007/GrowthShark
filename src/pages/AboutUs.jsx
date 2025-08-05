import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AboutImage from "../assets/AboutImage.jpg";

// Counter component with smooth animation
function Counter({ target, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    setCount(0);
    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 20);

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(Math.ceil(current));
    }, 20);

    return () => clearInterval(interval);
  }, [start, target]);

  return <span>{count} +</span>;
}

export default function AboutSection() {
  const { ref: statsRowRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white w-full relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-sky-500 opacity-20 rounded-full blur-3xl absolute -top-10 -left-10"></div>
        <div className="w-96 h-96 bg-blue-900 opacity-20 rounded-full blur-3xl absolute bottom-0 right-0"></div>
      </div>

      {/* Top Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 z-10">
        <div className="flex flex-col justify-center">
          <h4 className="text-sm uppercase text-sky-400 tracking-widest mb-2">
            Our Story
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
            Writing content like you’ve never had before
          </h2>
        </div>
        <div className="text-gray-300 leading-relaxed space-y-4">
          <p>
            At Proriterz, we don't just tell stories; we create experiences. Our journey began with a simple, yet powerful idea: to change the way content is crafted and shared. With creativity as our fuel and innovation as our compass, we set out to break away from traditional storytelling and bring fresh, captivating content to the world. What started as a small team of passionate storytellers has since grown into a powerhouse of creative minds, each dedicated to transforming the ordinary into something extraordinary.
          </p>
          <p>
            From day one, we've believed that every piece of content has the potential to inspire, inform, and impact. Whether we're working with clients to develop their brand's voice, creating compelling narratives, or delivering cutting-edge digital content, our goal is the same: to leave a lasting impression. Our approach is built on a foundation of authenticity, originality, and meticulous attention to detail. We don't just create content that fills space—we create content that resonates, sparks conversation, and connects with audiences on a deeper level.
          </p>
          <p>
            As we've grown, we've never lost sight of our core values. We continue to challenge the status quo, experimenting with new formats, technologies, and platforms to deliver content that stands out. Every project we take on is an opportunity to push boundaries, explore new ideas, and redefine the limits of creativity. Our journey is far from over, and with each new chapter, we're writing content like you've never had before—content that inspires, engages, and leaves.
          </p>
        </div>
      </section>

      {/* Image */}
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <img
          src={AboutImage}
          alt="AboutImage"
          className="rounded-lg w-full mb-12 shadow-lg transform hover:scale-[1.02] transition duration-500"
        />

        {/* Stats Section */}
        <div
          ref={statsRowRef}
          className="grid grid-cols-1 sm:grid-cols-3 text-center text-sky-400 font-bold text-xl gap-8 mb-12"
        >
          <div className="bg-black/30 rounded-lg p-6 backdrop-blur-md hover:bg-black/50 transition">
            <p className="text-3xl">
              <Counter target={7} start={statsInView} />
            </p>
            <p className="text-white text-lg font-medium mt-2">
              Years Experience
            </p>
          </div>
          <div className="bg-black/30 rounded-lg p-6 backdrop-blur-md hover:bg-black/50 transition">
            <p className="text-3xl">
              <Counter target={215} start={statsInView} />
            </p>
            <p className="text-white text-lg font-medium mt-2">
              Completed Projects
            </p>
          </div>
          <div className="bg-black/30 rounded-lg p-6 backdrop-blur-md hover:bg-black/50 transition">
            <p className="text-3xl">
              <Counter target={100} start={statsInView} />
            </p>
            <p className="text-white text-lg font-medium mt-2">
              Happy Customers
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-sky-400 text-black py-12 mt-16 text-center relative z-10">
        <h3 className="text-2xl font-semibold mb-4">
          We make the creative solutions for modern brands
        </h3>
        <button className="bg-black text-sky-400 px-6 py-2 font-semibold rounded hover:bg-gray-800 transition">
          CONTACT US
        </button>
      </div>

      {/* Newsletter */}
      <div className="max-w-4xl mx-auto px-6 pb-16 text-white mt-10 relative z-10">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-semibold">Newsletter</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-sky-400"
          />
          <button className="bg-sky-400 text-black px-6 py-2 font-semibold rounded hover:bg-sky-500 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
