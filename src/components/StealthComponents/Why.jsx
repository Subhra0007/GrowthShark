import { FaArrowRight } from "react-icons/fa";

function StealthMode() {
  return (
    <div className="max-w-6xl mx-auto px-6 text-white overflow-hidden">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Why Do You Need <br />
          <span className="text-[#49b9ff] italic">Stealth Mode?</span>?
        </h2>
        <p className="mt-4 text-[#bcbcbc] text-sm sm:text-base">
          Because it couldn't have been said better:
        </p>
        <p className="text-[#49b9ff] font-semibold text-lg sm:text-xl italic mt-2">
          “If you're not delegating, you're drowning. Real executives <br className="hidden sm:block" />
          focus on the catch—not on chasing their tails.”
        </p>
        <p className="text-[#bcbcbc] text-sm sm:text-base mt-2">
          Businesses trying to manage everything alone experience predictable chaos:
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Left Card */}
        <div className="bg-[#161e33] p-6 rounded-xl shadow-md hover:scale-105 transform transition-transform duration-300">
          <h2 className="text-2xl font-bold text-center mb-4">Doing it in-house</h2>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <FaArrowRight size={20} className="text-red-400" />
              Missed Reminders & Deadlines
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight size={20} className="text-red-400" />
              Overlapping Schedules & Conflicts
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight size={20} className="text-red-400" />
              Workflow Disruptions & Confusion
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight size={20} className="text-red-400" />
              Client Tantrums & Communication Breakdowns
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight size={20} className="text-red-400" />
              Stress-Induced Burnout & Mental Clutter
            </li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-[#161e33] p-6 rounded-xl shadow-md hover:scale-105 transform transition-transform duration-300">
          <h2 className="text-2xl font-bold text-center mb-4 text-[#49b9ff]">With GrowthShark</h2>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <FaArrowRight size={20} className="text-green-400" />
              Timely Reminders And Delegated Alerts
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight size={20} className="text-green-400" />
              Optimized Scheduling & Clear Calendars
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight size={20} className="text-green-400" />
              Seamless Workflow & Structured Processes
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight size={20} className="text-green-400" />
              Proactive Client Management & Updates
            </li>
            <li className="flex items-start gap-2">
              <FaArrowRight size={20} className="text-green-400" />
              Focused Executives, Stress-Free Teams
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 sm:mt-12  flex justify-center mb-20">
        <button className="bg-[#49b9ff] text-[#000028] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md text-sm sm:text-base hover:bg-[#38a5e8] transition duration-300">
          Get A Free Consultation On How To Be Aggressive
        </button>
      </div>
    </div>
  );
}

export default StealthMode;
