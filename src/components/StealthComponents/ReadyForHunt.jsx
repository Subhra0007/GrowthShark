import { useState } from "react";

function ReadyForHunt() {
  const [company, setCompany] = useState("");

  return (
    <section className=" text-white px-6 py-16 overflow-hidden">
    

      <div className=" max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
        Ready For The <br />
        <span className="text-[#66ccff] text-5xl md:text-7xl font-extrabold block mt-2">
          DELEGATION?
        </span>
        </h2>

        {/* Quote */}
        <p className="text-sky-300 text-base sm:text-lg leading-relaxed mt-4 mb-6">
         “Delegation isn’t just about getting help. It’s about multiplying your <br/>
        effectiveness, protecting your focus, and scaling your vision.”
        </p>

        {/* Sentence with Styled Input */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
           So, if you’ve made it this far, welcome to the ‘pack’, let’s strategize on how <br />
          <span className="text-sky-300 font-semibold">Growthshark X </span>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Type your company name"
            className="bg-transparent border-b border-gray-500 outline-none px-1 w-48 sm:w-60 text-sky-300 font-semibold text-center placeholder-gray-400"
          />{" "}
          <br />
          can together make some differences, shall we?
        </p>

        {/* CTA Button */}
        <button className="bg-lime-400 hover:bg-lime-300 text-black font-semibold px-8 py-3 rounded-full shadow-md text-sm sm:text-base transition duration-300">
          Book Your Discovery Session →
        </button>
      </div>
    </section>
  );
}

export default ReadyForHunt;
