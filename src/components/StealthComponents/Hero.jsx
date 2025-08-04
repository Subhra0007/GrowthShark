import Stealth from '../../assets/Stealth.jpg';

export default function Hero() {
    return (
        <section
          className="w-full min-h-screen bg-black bg-cover bg-center flex items-center justify-end text-white px-4"
          style={{ backgroundImage: `url(${Stealth})` }}
        >

            <div className="max-w-4xl text-left ml-6 sm:ml-12 md:ml-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white ">
          Stalk <br/> In {" "}
          <span className="text-[#2ea9ff] ">
            Stealth
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mt-4">
         Pull yourself together before the hunt!
        </p>

       <button className="mt-4 sm:mt-6 px-2 sm:px-6 lg:px-7 py-2 sm:py-3 lg:py-4 bg-[#49b9ff] hover:bg-[#3aa8e8] text-black font-semibold rounded-full shadow-lg transition text-sm sm:text-base lg:text-lg cursor-pointer">
          CHECK YOUR ELIGIBILITY
       </button>
            </div>
        </section>
    );
}
