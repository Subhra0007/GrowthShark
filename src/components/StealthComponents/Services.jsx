import { SlEnvolopeLetter } from "react-icons/sl";
import { FaRegCalendarAlt, FaInstagram, FaTasks } from "react-icons/fa";
import { MdOutlineWifiCalling3, MdOutlinePeopleAlt, MdCampaign } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

function Services() {
  return (
    <>
      <div className=" py-16 sm:py-20 lg:py-24">
        <div className="min-h-screen max-w-6xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              How Can We Be Your Perfect <br className="hidden sm:block" />
              <span className="text-[#49b9ff]">Delegation</span> Partner?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Your Growthstack team handles essential marketing strategies & execution, <br className="hidden sm:block" />
              and gives you a bloody edge at your competitors, while focusing more on inbound than vague niches.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Service Cards */}
            {[
              {
                icon: <SlEnvolopeLetter size={32} className="text-cyan-400" />,
                title: "Email Gatekeeping",
                desc: "Your inbox stays pristine; only essential messages reach you."
              },
              {
                icon: <FaRegCalendarAlt size={32} className="text-cyan-400" />,
                title: "Calendar Coordination",
                desc: "Perfectly planned meetings without conflicts or confusion."
              },
              {
                icon: <MdOutlineWifiCalling3 size={32} className="text-cyan-400" />,
                title: "Call Gatekeeping",
                desc: "Only valuable calls make it through, protecting your productivity."
              },
              {
                icon: <IoIosSearch size={32} className="text-cyan-400" />,
                title: "Market Research",
                desc: "Concise, insightful reports on competitors, trends, and opportunities."
              },
              {
                icon: <MdOutlinePeopleAlt size={32} className="text-cyan-400" />,
                title: "Client Intelligence",
                desc: "Detailed background briefings for confident client interactions."
              },
              {
                icon: <FaInstagram size={32} className="text-cyan-400" />,
                title: "Social Media Management",
                desc: "Consistent, high-quality content to enhance brand visibility."
              },
              {
                icon: <MdCampaign size={32} className="text-cyan-400" />,
                title: "Manual Outreach",
                desc: "Human-like personalized messages that build real relationships."
              },
              {
                icon: <IoDocumentTextOutline size={32} className="text-cyan-400" />,
                title: "Document Preparation",
                desc: "Professional reports, presentations, and meeting summaries."
              },
              {
                icon: <FaTasks size={32} className="text-cyan-400" />,
                title: "Task Delegation",
                desc: "Clearly assigned tasks with transparent tracking & reporting."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#161e33] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300 text-center"
              >
                <div className="flex justify-center mb-3">{service.icon}</div>
                <h4 className="text-[#a6ff00] text-lg font-semibold mb-2 leading-snug">
                  {service.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
