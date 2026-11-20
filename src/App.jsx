import { useLenis } from './hooks/useLenis';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Architecture from './components/Architecture';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-[#F6F2EA] text-[#1C1917] selection:bg-[#A85338] selection:text-[#F6F2EA] relative">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <Services />
        <Gallery />
        <Process />
        <Architecture />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
