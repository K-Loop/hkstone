import { useLenis } from './hooks/useLenis';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedMasterpieces from './components/SelectedMasterpieces';
import AboutCompany from './components/AboutCompany';
import Footer from './components/Footer';

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-[#0D0B0A] text-[#F5F2EB] selection:bg-[#D48C46] selection:text-[#0D0B0A] relative">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SelectedMasterpieces />
        <AboutCompany />
      </main>
      <Footer />
    </div>
  );
}
