
function PartnerForm() {
 

  return (
    <>
     <div className="min-h-screen max-w-[100rem] flex items-center justify-center text-white px-20">
      <div className="text-center space-y-6 ">
        <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Are You Ready For A <br />
          <span className="text-[#49b9ff]">Delegation{" "}</span>
          Partner?
        </h1>

        <p className="text-sm md:text-base text-gray-300">
          <span className="text-[#49b9ff] font-semibold">
            “Delegation isn't just smart, it's vital. Top executives aren't buried in admin tasks—they're free <br/>to focus on growth.”,
          </span>
            not everyone is at the right stage to go out on 'Hunt' while delegating <br/>  their tasks. Find it out yourself whether you're in for a hunt or a hustle…
        </p>
        
        <div className="bg-[#141f3a] p-6 rounded-xl space-y-4 shadow-lg">
          <h2 className="text-lg md:text-xl font-semibold">What's your Name?</h2>
          <input
            type="text"
            placeholder="Write your name here..."
            className="w-full px-6 py-3 rounded-full bg-[#1e3a47] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#49b9ff] transition"
          />
          <div className="flex justify-center">
            <button className="bg-[#49b9ff] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#3ca6df] transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PartnerForm;
