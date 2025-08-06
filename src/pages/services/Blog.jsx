import { FaCheckCircle } from "react-icons/fa";

export default function BlogWritingSection() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-orange-50 py-20 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Top Heading */}
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-600">
          The Power of Blog Writing in 2025
        </h2>

        {/* Did You Know Box */}
        <div className="bg-orange-400 bg-opacity-90 text-gray-900 max-w-2xl mx-auto rounded-xl p-6 shadow-lg relative overflow-hidden">
          <h3 className="text-3xl font-bold">Did You Know?</h3>
          <p className="mt-2 font-medium text-sm sm:text-base">
            that businesses that blog see <strong>67% more leads</strong> compared to those that don’t (HubSpot)?
          </p>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-200 rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Subtext */}
        <p className="text-center max-w-3xl mx-auto text-gray-600 text-sm sm:text-base">
          Your blog is the voice of your brand. It’s where you share insights, educate your audience,
          and build a connection that drives action. But creating blogs that truly resonate takes time,
          expertise, and a clear strategy. That’s where <strong>Pro-Riterz</strong> comes in.
        </p>

        {/* Dual Flex Box */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-orange-300 bg-opacity-80 text-gray-900 font-bold text-lg p-6 rounded-lg shadow-md">
            At Pro-Riterz, we specialize in crafting blogs that don’t just rank well on search engines
            but also keep readers engaged and coming back for more.
          </div>
          <div className="text-base text-gray-700">
            With <strong>77% of internet users</strong> regularly reading blogs, this is an opportunity
            you can’t afford to miss. Let us help you transform your blog into a powerful tool for
            improving SEO, building trust, and driving conversions.
          </div>
        </div>

        {/* Subheading */}
        <h3 className="text-2xl font-semibold text-center text-gray-900">
          Why Your Business Needs High-Quality Blogs:
        </h3>

        {/* Grid of Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-orange-100">
            <h4 className="text-lg font-semibold mb-2 text-orange-600">Boost Your SEO Rankings</h4>
            <p className="text-sm text-gray-700">
              Every blog is a chance to rank for keywords. Sites with blogs have
              <span className="font-bold"> 434% more indexed pages</span>, making them more visible online.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-orange-100">
            <h4 className="text-lg font-semibold mb-2 text-orange-600">Build Trust with Your Audience</h4>
            <p className="text-sm text-gray-700">
              Blogs let you showcase your expertise. <strong>47% of buyers read 3–5 pieces</strong> of content before contacting sales.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-orange-100">
            <h4 className="text-lg font-semibold mb-2 text-orange-600">Drive Consistent Traffic</h4>
            <p className="text-sm text-gray-700">
              Organic traffic is key. Blogs can drive
              <span className="font-bold"> 55% more website visitors</span>, bringing steady leads.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-orange-100">
            <h4 className="text-lg font-semibold mb-2 text-orange-600">Nurture Leads & Improve Conversions</h4>
            <p className="text-sm text-gray-700">
              Blogging helps guide readers through the buyer journey. Regular blogging yields a
              <span className="font-bold"> 13x higher ROI</span> on marketing efforts.
            </p>
          </div>
        </div>
      </div>
       <div className="max-w-7xl mx-auto">
        <div className="bg-orange-100 border-l-4 border-orange-500 shadow-lg p-6 mb-10 rounded-lg">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            How Pro-Riterz Creates Blogs That Deliver Results:
          </h2>

          {/* Bullet Points with Icons */}
          <ul className="space-y-6 text-lg">
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>
                <strong>Audience-First Content:</strong> We start by understanding your audience. Who are they? What challenges are they facing? What kind of information are they searching for?
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>
                <strong>Comprehensive Keyword Research:</strong> Blogs are most effective when they rank for the right search terms. Our team conducts in-depth keyword research to identify high-value opportunities.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>
                <strong>Engaging, Well-Researched Content:</strong> We combine research with clear, concise writing to deliver engaging blogs — listicles, how-tos, and thought leadership content.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>
                <strong>SEO Optimization:</strong> Our blogs are optimized using compelling titles, proper tags, and internal/external links — all without sacrificing readability.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>
                <strong>Consistency is Key:</strong> A single blog won’t move the needle. We plan and manage content calendars to ensure your blog is updated regularly.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>
                <strong>Performance Tracking:</strong> We refine blog strategies by analyzing traffic, bounce rates, and conversions.
              </span>
            </li>
          </ul>
        </div>

        {/* Bottom Section - Why Choose Us */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Why Choose Pro-Riterz for Blog Writing?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-orange-200 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2">Industry Expertise</h4>
              <p className="text-sm">
                Our team has experience writing for a wide range of industries: Technology, Healthcare, E-commerce, Finance, SaaS.
              </p>
            </div>

            <div className="bg-orange-200 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2">Tailored Strategies</h4>
              <p className="text-sm">
                Every blog we create is part of a broader strategy designed specifically for your business.
              </p>
            </div>

            <div className="bg-orange-100 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2">Proven Results</h4>
              <p className="text-sm">
                We don’t believe in one-size-fits-all solutions. Each blog is tied to tangible outcomes for your business.
              </p>
            </div>

            <div className="bg-orange-100 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2">End-to-End Service</h4>
              <p className="text-sm">
                From topic ideation to publishing, we handle the entire process so you can focus on growing your brand.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-orange-500 text-black p-6 font-bold text-xl flex items-center justify-center relative overflow-hidden">
          <div className="text-9xl absolute text-orange-300 font-bold opacity-20 -left-4 top-0">”</div>
          <span className="z-10">FAQs About Copywriting Services</span>
        </div>
        <div className="space-y-4 text-sm sm:text-base">
          <div>
            <p className="font-semibold">➤ How long does it take to see results from blogging?</p>
            <p className="text-gray-700">Most clients start seeing noticeable improvements in traffic and engagement within 3–6 months.</p>
          </div>
          <div>
            <p className="font-semibold">➤ Can you handle technical or niche topics?</p>
            <p className="text-gray-700">Yes! Our writers are skilled at researching and delivering content on even the most complex subjects.</p>
          </div>
          <div>
            <p className="font-semibold">➤ How many blogs do I need per month?</p>
            <p className="text-gray-700">This depends on your goals and industry, but most businesses benefit from 4–8 high-quality blogs per month.</p>
          </div>
          <div>
            <p className="font-semibold">➤ Do you provide images or graphics?</p>
            <p className="text-gray-700">Yes, we can include royalty-free images or collaborate with your design team for custom visuals.</p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-orange-500 text-black p-6 font-bold text-xl flex items-center justify-center relative overflow-hidden">
          <div className="text-9xl absolute text-orange-300 font-bold opacity-20 -left-4 top-0">”</div>
          <span className="z-10">Results You Can Expect:</span>
        </div>
        <div className="space-y-2 text-sm sm:text-base">
          <p><strong>Higher Rankings:</strong> Improved visibility on search engines for relevant keywords.</p>
          <p><strong>Increased Traffic:</strong> Our clients see an average <strong>35% increase in traffic</strong> within six months.</p>
          <p><strong>Better Engagement:</strong> Blogs that keep readers on your site longer, reducing bounce rates.</p>
          <p><strong>More Leads:</strong> Turn casual readers into loyal customers with content that converts.</p>
        </div>
      </div>

      {/* Blog Topics Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-orange-500 text-black p-6 font-bold text-xl flex items-center justify-center relative overflow-hidden">
          <div className="text-9xl absolute text-orange-300 font-bold opacity-20 -left-4 top-0">”</div>
          <span className="z-10">Example Blog Topics We Can Create for You:</span>
        </div>
        <div className="text-sm sm:text-base space-y-2">
          <p>“5 Strategies to Cut Costs in Logistics”</p>
          <p>“How to Choose the Right Accounting Software for Your Business”</p>
          <p>“10 Common Mistakes in E-Commerce SEO (And How to Avoid Them)”</p>
          <p>“The Ultimate Guide to Improving Customer Retention”</p>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-orange-500 text-black p-6 font-bold text-xl flex items-center justify-center relative overflow-hidden">
          <div className="text-9xl absolute text-orange-300 font-bold opacity-20 -left-4 top-0">”</div>
          <span className="z-10">Let’s Get Started</span>
        </div>
        <div className="text-sm sm:text-base">
          <p>Your audience is searching for answers right now. Let Pro-Riterz help you provide them with blogs that engage, educate, and convert.</p>
          <p className="mt-2">Contact us today for a free consultation and take the first step toward growing your business with high-quality blog content.</p>
        </div>
      </div>
      </div>
    </section>
  );
}
