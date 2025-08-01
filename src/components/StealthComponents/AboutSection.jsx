import img4 from '..//../assets/4.png';
import img5 from '..//../assets/5.png';
import img6 from '..//../assets/6.png';

const AboutSection = () => {
    return (
        <section className=" text-white px-6 py-12 overflow-hidden">
            {/* Header + Form */}
            <div className="max-w-6xl mx-auto flex gap-8 relative z-10">
                <div className="w-1/2 space-y-4">
                    <h1 className="text-4xl font-bold mb-4">Before You Hunt, Get  <br />  In {" "}
                    <span className="text-[#74c0f4]">Stealth Mode</span>
                    </h1>
                    <p className="text-gray-300">
                       Successful companies never hunt blind— they organize, <br/> strategize, and delegate
                       with  precision. Our Executive <br/> Assistants streamline your operations
                       behind-the-scenes, <br/> prepping you for the perfect strike.
                    </p>
                </div>

                <div className="w-1/2">
                    <div className="bg-[#0e1c2f] bg-opacity-80 rounded-xl p-6 sm:p-8 shadow-lg text-white space-y-4">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#2d8abf] text-white placeholder-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#49b9ff] transition duration-300"
              />
              <input
                type="text"
                placeholder="Work Email"
                className="w-full bg-[#2d8abf] text-white placeholder-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#49b9ff] transition duration-300"
              />
              <input
                type="text"
                placeholder="Contact Email"
                className="w-full bg-[#2d8abf] text-white placeholder-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#49b9ff] transition duration-300"
              />
              <input
                type="text"
                placeholder="Website URL"
                className="w-full bg-[#2d8abf] text-white placeholder-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#49b9ff] transition duration-300"
              />
            </div>

         
            <div>
              <label className="block text-sm mb-1">
                Service you're interested in:
              </label>
              <select className="w-full bg-[#114254] text-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#49b9ff] transition duration-300">
                <option>Email Gatekeeping</option>
                <option>Calendar Coordination</option>
                <option>Call Gatekeeping</option>
                <option>Market Research</option>
                <option>Client Intelligence</option>
                <option>Manual Outreach</option>
                <option>Document Preparation</option>
                <option>Task Delegation</option>
              </select>
            </div>

         
            <textarea
              rows="4"
              placeholder="Briefly discuss about your requirement"
              className="w-full bg-[#114254] text-white placeholder-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#49b9ff] transition duration-300 resize-none"
            />

         
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                What's your monthly recurring revenue?
              </label>
              <select className="w-full bg-[#114254] text-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#49b9ff] transition duration-300">
                <option>Less than $5,000</option>
                <option>$5,000-$10,000</option>
                <option>More than $10,000</option>
              </select>
            </div>

           
            <div className="flex items-center justify-center">
              <button className="py-2 px-6 bg-[#49b9ff] hover:bg-[#3aa8e8] text-black font-semibold rounded-full shadow-md transition duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
                </div>
           

            {/* Logos */}
            <div className="mt-20 relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-center text-[#2ea9ff]">Those Who Hunted With Us</h2>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    {Array.from({ length: 10 }, (_, i) => (
                        <img key={i} src={`logo${i + 1}.png`} alt={`Logo ${i + 1}`} className="h-12 grayscale hover:grayscale-0 transition" />
                    ))}
                </div>
            </div>

            {/* Cards Section */}
            <div className="max-w-4xl mx-auto text-center mb-12 mt-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            The <span className="text-[#49b9ff] font-bold">Stealth Formula</span> Of Ours,
            <br /> Is Based On
           </h2>
          </div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto ">
  {/* Card 1 */}
  <div
    className="relative bg-cover bg-center rounded-2xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] w-full max-w-[320px] h-[350px] flex items-end p-4 mx-auto"
    style={{ backgroundImage: `url(${img4})` }}
  >
    <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30 w-full">
      <h3 className="text-xl font-semibold text-blue-500 mb-2">Strategic Insights</h3>
      <p className="text-sm font-medium text-black">
        Explore data-driven perspectives to navigate competitive landscapes effectively.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="relative bg-cover bg-center rounded-2xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] w-full max-w-[320px] h-[350px] flex items-end p-4 mx-auto"
    style={{ backgroundImage: `url(${img5})` }}
  >
    <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30 w-full">
      <h3 className="text-xl font-semibold text-blue-500 mb-2">Innovative Strategies</h3>
      <p className="text-sm font-medium text-black">
        Unlock unconventional methods to achieve high-growth outcomes.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="relative bg-cover bg-center rounded-2xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] w-full max-w-[320px] h-[350px] flex items-end p-4 mx-auto"
    style={{ backgroundImage: `url(${img6})` }}
  >
    <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30 w-full">
      <h3 className="text-xl font-semibold text-blue-500 mb-2">Personalized Tactics</h3>
      <p className="text-sm font-medium text-black">
        Customize your execution playbook based on industry and user behavior.
      </p>
    </div>
  </div>
</div>

        </section>
    );
};

export default AboutSection;
