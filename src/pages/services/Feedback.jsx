import { FaStar, FaSearch, FaTools, FaChartLine, FaClipboardCheck, FaComments, FaHeart, FaClipboardList } from "react-icons/fa";

const FeedbackManagement = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h2 className="text-4xl font-extrabold mb-6 text-center">
          The Power of <span className="text-blue-600">Feedback & Review Management</span> in 2025
        </h2>

        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-gray-600">
          90% of consumers read reviews before purchasing, and positive reviews drive 31% higher revenue. At ProRiterz, we help you monitor, analyze, and respond to customer feedback that grows trust and improves business performance.
        </p>

        {/* Description Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">What Is Feedback & Review Management?</h3>
            <p className="text-gray-700">
              It’s more than just replying to reviews—it's about extracting insights, improving your services, and nurturing brand trust across platforms like Google, Yelp, Amazon, and social media.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Why Feedback Management Matters</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Customers are 4× more likely to trust businesses with positive reviews.</li>
              <li>Boosts credibility and trust across all digital channels.</li>
              <li>Helps prevent customer churn through proactive engagement.</li>
              <li>Turns negative reviews into improvement opportunities.</li>
            </ul>
          </div>
        </div>

        {/* Service Cards */}
        <h3 className="text-3xl font-bold mb-10 text-center">ProRiterz Feedback & Review Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaSearch className="text-blue-600 text-2xl mb-3" />
            <h4 className="text-xl font-semibold mb-2">Review Monitoring</h4>
            <p className="text-gray-700 text-sm">
              Track reviews across Google, Yelp, Amazon, Facebook, and more so you never miss a customer mention.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaComments className="text-blue-600 text-2xl mb-3" />
            <h4 className="text-xl font-semibold mb-2">Review Response Management</h4>
            <p className="text-gray-700 text-sm">
              We write professional, on-brand replies to positive and negative reviews to reinforce your values.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaClipboardCheck className="text-blue-600 text-2xl mb-3" />
            <h4 className="text-xl font-semibold mb-2">Feedback Collection</h4>
            <p className="text-gray-700 text-sm">
              Use surveys, follow-up emails, and SMS to gather direct insights from your audience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaHeart className="text-blue-600 text-2xl mb-3" />
            <h4 className="text-xl font-semibold mb-2">Sentiment Analysis</h4>
            <p className="text-gray-700 text-sm">
              Analyze tone and language of reviews to detect trends, customer pain points, and brand perception.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaTools className="text-blue-600 text-2xl mb-3" />
            <h4 className="text-xl font-semibold mb-2">Reputation Repair</h4>
            <p className="text-gray-700 text-sm">
              If your brand has negative press, we help restore image through strategic review management and outreach.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaChartLine className="text-blue-600 text-2xl mb-3" />
            <h4 className="text-xl font-semibold mb-2">Custom Reporting</h4>
            <p className="text-gray-700 text-sm">
              Get tailored reports on review trends, satisfaction ratings, and actionable improvement insights.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaClipboardList className="text-blue-600 text-2xl mb-3" />
            <h4 className="text-xl font-semibold mb-2">Platform Optimization</h4>
            <p className="text-gray-700 text-sm">
              Ensure your business listings are optimized across review platforms to attract and convert.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 p-10 mt-20 rounded-xl text-center shadow">
          <h3 className="text-2xl font-bold mb-4">Let’s Turn Reviews into Revenue</h3>
          <p className="text-gray-700 mb-6">
            Ready to take control of your brand reputation? Let ProRiterz manage your reviews and feedback strategy for lasting impact.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
            📈 Book Your Free Strategy Call
          </button>
        </div>
         {/* Why Choose ProRiterz */}
        <div>
          <h2 className="text-4xl font-bold mb-10 text-center">Why Choose ProRiterz?</h2>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Tailored Strategies</h4>
              <p className="text-sm text-gray-600">
                Every brand is unique. We build strategies tailored to your audience and goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Proven Expertise</h4>
              <p className="text-sm text-gray-600">
                With years of experience across sectors, we handle feedback and reputation confidently.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Advanced Tools</h4>
              <p className="text-sm text-gray-600">
                We use cutting-edge analytics, sentiment tracking, and reporting for complete transparency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Proactive Approach</h4>
              <p className="text-sm text-gray-600">
                We address issues before they escalate. Our proactive strategy keeps your reputation safe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Transparent Reporting</h4>
              <p className="text-sm text-gray-600">
                Get regular insights with detailed review summaries and actionable reports.
              </p>
            </div>
          </div>
        </div>

        {/* How We Handle Negative Reviews */}
        <div>
          <h2 className="text-4xl font-bold mb-10 text-center">How We Handle Negative Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Immediate Action</h4>
              <p className="text-sm text-gray-600">
                We respond promptly to concerns to show empathy and build trust with dissatisfied customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Empathy and Professionalism</h4>
              <p className="text-sm text-gray-600">
                Every reply is crafted to demonstrate understanding, politeness, and your brand’s commitment to quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Solutions-Oriented</h4>
              <p className="text-sm text-gray-600">
                We provide actionable solutions and work with customers to resolve issues effectively.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Learn and Improve</h4>
              <p className="text-sm text-gray-600">
                Every complaint is a chance to grow. We use review data to optimize your offerings and customer experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackManagement;
