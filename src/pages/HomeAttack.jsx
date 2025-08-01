import Navbar from "../components/AttackComponents/Navbar";
import Hero from "../components/AttackComponents/Hero";
import AboutSection from "../components/AttackComponents/AboutSection";
import Why from "../components/AttackComponents/Why";
import PartnerForm from "../components/AttackComponents/PartnerForm";
import Services from "../components/AttackComponents/Services";
import Financials from '../components/AttackComponents/Financials';
import ReadyForHunt from '../components/AttackComponents/ReadyForHunt';
import Testimonials from '../components/AttackComponents/Testimonials'
import Footer from "../components/AttackComponents/Footer";
export default function HomeAttack({ toggleMode }) {
    return (
        <div className="bg-black text-white">
            <Navbar toggleMode={toggleMode}/>
            <Hero />
            <AboutSection />
            <Why />
            <PartnerForm/>
            <Services/>
            <Financials/>
            <ReadyForHunt/>
            <Testimonials />
            <Footer />
        </div>
    );
}
