import sharkImage from '../../assets/shark.png';

export default function Hero() {
    return (
        <section
            className="w-full min-h-screen bg-black bg-cover bg-center flex items-center justify-start text-white px-4"
            style={{ backgroundImage: `url(${sharkImage})` }}
        >
            <div className="max-w-6xl text-left ml-6 sm:ml-12 md:ml-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                    Dominate The <br />
                    <span className="text-[#2ea9ff]">Blue Ocean</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mt-4">
                    Get ready to hunt down your competitors
                </p>
                <button className="mt-4 sm:mt-6 px-2 sm:px-6 lg:px-7 py-2 sm:py-3 lg:py-4 bg-[#49b9ff] hover:bg-[#3aa8e8] text-black font-semibold rounded-full shadow-lg transition text-sm sm:text-base lg:text-lg cursor-pointer">
                    CHECK YOUR ELIGIBILITY
                </button>
            </div>
        </section>
    );
}
