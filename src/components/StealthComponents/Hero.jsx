import Stealth from '../../assets/Stealth.jpg';

export default function Hero() {
    return (
        <section
            className="w-full min-h-screen bg-cover bg-center flex items-center justify-end  text-white px-4 relative"
             style={{ backgroundImage: `url(${Stealth})` }}
        >
       

      
      <div className="absolute inset-0 bg-gradient-to-r from-black/1 via-black/1 to-transparent"></div>
            <div className="max-w-4xl text-left ml-6 sm:ml-12 md:ml-20 relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white ">
          Stalk <br/> In {" "}
          <span className="bg-gradient-to-r from-[#2ca6f7] to-[#56c1ff] bg-clip-text text-transparent">
            Stealth
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-300">
         Pull yourself together before the hunt!
        </p>

       <button className="mt-4 sm:mt-6 px-2 sm:px-6 lg:px-7 py-2 sm:py-3 lg:py-4 bg-[#49b9ff] hover:bg-[#3aa8e8] text-black font-semibold rounded-full shadow-lg transition text-sm sm:text-base lg:text-lg cursor-pointer">
          CHECK YOUR ELIGIBILITY
       </button>
   
            </div>
        </section>
    );
}
