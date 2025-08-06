import { FaCheckCircle } from "react-icons/fa";

const EmailMarketing2025 = () => {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          The Power of <span className="text-[#2ea9ff]">Email Marketing</span> in 2025
        </h1>

        {/* Did You Know */}
        <div className="bg-[#f0f8ff] p-6 rounded-xl shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-2">📈 Did You Know?</h2>
          <p className="text-gray-700">
            Email marketing revenue is projected to grow by a staggering <strong>287% worldwide</strong> from 2004 to 2032.
            <br />
            And 95% of marketers say email marketing delivers excellent ROI.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Think about the last time you checked your inbox</h3>
            <p className="text-gray-700">
              Between all those newsletters and promos, some emails stood out — maybe it was the discount, maybe it was just a great subject line.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Remember when email marketing meant sending the same message to everyone?
            </h3>
            <p className="text-gray-700">
              Those days are gone. Modern email marketing thrives on personalization and automation, delivering targeted experiences that actually convert.
            </p>
          </div>
        </div>

        {/* Building Blocks */}
        <h2 className="text-3xl font-bold mb-8">The Building Blocks of Successful Email Marketing</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Subject Lines That Spark Interest</h3>
            <p className="text-gray-600">
              Grab attention instantly with personalized, curiosity-driven subject lines.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Content That Connects</h3>
            <p className="text-gray-600">
              Deliver real value with content that speaks to your audience’s needs and emotions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Personalization and Segmentation</h3>
            <p className="text-gray-600">
              Use data to send the right message to the right person at the right time.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Automation That Makes Sense</h3>
            <p className="text-gray-600">
              Smart automation saves time and increases relevance, with behavior-based flows and dynamic content.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <h2 className="text-3xl font-bold mb-6">Why Choose Pro-Riterz for Email Marketing?</h2>
        <ul className="list-none space-y-4">
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Expert Content Creation:</strong> Emails that resonate, crafted by professionals who know how to drive engagement.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>All-in-One Execution:</strong> From list building to automation and analytics, we manage your full email workflow.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Data-Driven Strategy:</strong> We build campaigns backed by insights, not guesswork — and it shows in the results.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Omnichannel Integration:</strong> Emails work in harmony with your broader digital marketing goals.</p>
          </li>
          <li className="flex gap-3 items-start">
            <FaCheckCircle className="text-[#2ea9ff] mt-1" />
            <p><strong>Performance Focused:</strong> We prioritize open rates, CTRs, and ROI with every campaign we build.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EmailMarketing2025;
