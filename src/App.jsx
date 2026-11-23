import { useLenis } from './hooks/useLenis';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtOfStone from './components/ArtOfStone';
import SignatureCreations from './components/SignatureCreations';
import HandsBehindArt from './components/HandsBehindArt';
import ProcessJourney from './components/ProcessJourney';
import HeritagePhilosophy from './components/HeritagePhilosophy';
import SelectedMasterpieces from './components/SelectedMasterpieces';
import FinalEnquiry from './components/FinalEnquiry';
import Footer from './components/Footer';

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-[#0B0A09] text-[#F4EFE6] selection:bg-[#D4AF37] selection:text-[#0B0A09] relative">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ArtOfStone />
        <SignatureCreations />
        <HandsBehindArt />
        <ProcessJourney />
        <HeritagePhilosophy />
        <SelectedMasterpieces />
        <FinalEnquiry />
      </main>
      <Footer />
    </div>
  );
}
