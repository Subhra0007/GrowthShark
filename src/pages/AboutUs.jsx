import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AboutImage from "../assets/AboutImage.jpg";

// Counter component that animates from 0 to target when start = true
function Counter({ target, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    setCount(0); // Reset count to 0 every time animation starts
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
  //  This tracks the STATS section and fires every time it comes into view
  const { ref: statsRowRef, inView: statsInView } = useInView({
    triggerOnce: false, // allow multiple triggers
    threshold: 0.3, // 30% visible
  });

  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white w-full">
      {/* Top Section */}
      <section className="max-w-6xl mx-auto px-6 py-40 grid md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-sm uppercase text-sky-400 mb-2">Our Story</h4>
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

      {/* Image */}
      <div className="max-w-6xl mx-auto px-6">
        <img
          src={AboutImage}
          alt="AboutImage"
          className="rounded-lg w-full mb-10"
        />

        {/* Stats section being tracked */}
        <div
          ref={statsRowRef}
          className="grid grid-cols-3 text-center text-sky-400 font-bold text-xl"
        >
          <div>
            <p><Counter target={7} start={statsInView} /></p>
            <p className="text-white text-sm font-medium">Years Experience</p>
          </div>
          <div>
            <p><Counter target={215} start={statsInView} /></p>
            <p className="text-white text-sm font-medium">Completed Projects</p>
          </div>
          <div>
            <p><Counter target={100} start={statsInView} /></p>
            <p className="text-white text-sm font-medium">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-sky-400 text-black py-10 mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          We make the creative solutions for modern brands
        </h3>
        <button className="bg-black text-sky-400 px-6 py-2 font-semibold rounded hover:bg-gray-800 transition">
          CONTACT US
        </button>
      </div>

      {/* Newsletter */}
      <div className="max-w-4xl mx-auto px-6 pb-16 text-white mt-10">
        <div className="flex text-center justify-center">
          <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 ">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <button className="bg-sky-400 text-black px-6 py-2 font-semibold rounded hover:bg-sky-500 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
