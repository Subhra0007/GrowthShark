import Navbar from "./components/Navbar";
import HomeAttack from "./pages/HomeAttack";
import PartnerForm from "./components/PartnerForm";
import Services from "./components/Services";
import Financials from './components/Financials';
import ReadyForHunt from './components/ReadyForHunt';
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <HomeAttack />
      <PartnerForm />
      <Services/>
      <Financials/>
      <ReadyForHunt/>
      <Footer/>
    </div>
  );
}

export default App;
