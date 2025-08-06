import React from "react";

export default function B2BSEOSection() {
  return (
    <section className="bg-white text-gray-900 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* INTRO */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">The Power of B2B SEO in 2025</h2>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Did You Know?</h3>
          <p className="text-lg max-w-3xl mx-auto">
            that <strong>68% of B2B buyers</strong> start their research online? What’s more,{" "}
            <strong>75% of search engine users never scroll past the first page</strong>. If your business isn’t visible
            where your prospects are searching, you’re missing out on valuable leads.
          </p>
        </div>

        {/* WHAT IS B2B SEO */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold">What Is B2B SEO and Why Does It Matter?</h3>
          <p className="text-lg">
            B2B SEO (Search Engine Optimization) is the process of improving your website so that other businesses can
            find your services or products when searching online. Unlike B2C, B2B SEO focuses on reaching decision-makers
            like CEOs, procurement managers, and marketing heads, who typically rely on detailed research before making
            purchasing decisions.
          </p>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-2">Key B2B SEO Facts to Consider:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>70% of B2B buyers</strong> use search engines at least twice during their buying journey
                (Google).
              </li>
              <li>
                Companies that rank on the first page of Google capture <strong>91% of the traffic</strong> for that
                search (Chitika).
              </li>
              <li>
                Businesses with an active SEO strategy experience a <strong>67% conversion rate</strong>, compared to
                1.7% from outbound efforts (HubSpot).
              </li>
              <li>
                By investing in the right B2B SEO strategy, you not only increase your visibility but position yourself
                as a trusted resource in your industry.
              </li>
            </ul>
          </div>
        </div>

        {/* HOW PRO-RITERZ APPROACHES B2B SEO */}
        <div>
          <h3 className="text-3xl font-bold mb-10 text-center">How Pro-Riterz Approaches B2B SEO:</h3>

          {/* DESKTOP VIEW: 3 + 2 Cards */}
          <div className="hidden lg:flex gap-6 justify-center mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 w-[300px]">
              <h4 className="text-xl font-bold mb-2">In-Depth Keyword Research</h4>
              <p>
                We identify the keywords that your target audience is searching for, focusing on industry-specific terms
                that drive decision-makers to your website.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 w-[300px]">
              <h4 className="text-xl font-bold mb-2">Optimizing Your Website</h4>
              <p>
                A fast, well-structured, and mobile-friendly website is crucial. We address SEO issues such as broken
                links, improving page speed, and mobile responsiveness.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 w-[300px]">
              <h4 className="text-xl font-bold mb-2">Creating Valuable Content</h4>
              <p>
                Content is the backbone of SEO. We create informative content that answers questions and builds
                authority.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex justify-center gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 w-[300px]">
              <h4 className="text-xl font-bold mb-2">Building Authority with Backlinks</h4>
              <p>
                We help earn high-quality backlinks from credible industry sources and blogs to improve rankings and
                trust.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 w-[300px]">
              <h4 className="text-xl font-bold mb-2">Analytics & Reporting</h4>
              <p>
                We monitor performance and adjust strategy using detailed reporting, ensuring consistent growth and
                measurable results.
              </p>
            </div>
          </div>

          {/* MOBILE + TABLET: Stacked Cards */}
          <div className="lg:hidden flex flex-col">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 w-full md:w-[48%]">
                <h4 className="text-xl font-bold mb-2">In-Depth Keyword Research</h4>
                <p>
                  We identify the keywords that your target audience is searching for, focusing on industry-specific
                  terms that drive decision-makers to your website.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 w-full md:w-[48%]">
                <h4 className="text-xl font-bold mb-2">Optimizing Your Website</h4>
                <p>
                  A fast, well-structured, and mobile-friendly website is crucial. We address SEO issues such as broken
                  links, improving page speed, and mobile responsiveness.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 w-full md:w-[48%]">
                <h4 className="text-xl font-bold mb-2">Creating Valuable Content</h4>
                <p>
                  Content is the backbone of SEO. We create informative content that answers questions and builds
                  authority.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 w-full md:w-[48%]">
                <h4 className="text-xl font-bold mb-2">Building Authority with Backlinks</h4>
                <p>
                  We help earn high-quality backlinks from credible industry sources and blogs to improve rankings and
                  trust.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 w-full md:w-[48%]">
                <h4 className="text-xl font-bold mb-2">Analytics & Reporting</h4>
                <p>
                  We monitor performance and adjust strategy using detailed reporting, ensuring consistent growth and
                  measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIFFERENTIATORS */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            What Makes <span className="text-indigo-600">Pro-Riterz</span> Different?
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">✔</span>
              We focus on higher quality leads, not just traffic.
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">✔</span>
              Strategies built for sustainable, long-term results.
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">✔</span>
              Deep understanding of B2B buyers and industries.
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">✔</span>
              Proven performance: 45% traffic boost, 30% lead increase.
            </li>
          </ul>
        </div>

        {/* WHY SEO OVER ADS + FAQ */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Why B2B Companies Choose SEO Over Paid Ads
            </h3>
            <p className="text-lg text-gray-700 mb-3">
              While paid ads bring quick results, SEO offers long-term benefits:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                🔹 <strong>Lower Costs:</strong> 8x more traffic per dollar than paid ads.
              </li>
              <li>
                🔹 <strong>Better Credibility:</strong> 70% of users trust organic results over ads.
              </li>
              <li>
                🔹 <strong>Sustainability:</strong> Long-lasting visibility without constant ad spend.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">FAQs About Community Engagement</h4>
            <div className="space-y-6 text-gray-700 text-sm">
              <div>
                <p className="font-semibold text-gray-800">➤ How long does it take to see results from B2B SEO?</p>
                <p className="mt-1">
                  Most clients begin to see noticeable improvements within 3 to 6 months, depending on their industry and
                  competition.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">➤ What industries do you work with?</p>
                <p className="mt-1">
                  We specialize in B2B sectors such as logistics, tech, SaaS, industrial equipment, and manufacturing.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">➤ How do you measure success?</p>
                <p className="mt-1">
                  We track organic traffic, keyword rankings, lead quality, and conversion rates to evaluate SEO success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
