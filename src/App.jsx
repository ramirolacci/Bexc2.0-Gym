import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FreePassModal from './components/FreePassModal';
import Logos from './components/Logos';
import Program from './components/Program';
import ClassSchedule from './components/ClassSchedule';
import ChooseUs from './components/ChooseUs';
import Pricing from './components/Pricing';
import CalculateBmi from './components/CalculateBmi';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [isFreePassOpen, setIsFreePassOpen] = useState(false);

  const openFreePass = () => setIsFreePassOpen(true);
  const closeFreePass = () => setIsFreePassOpen(false);

  return (
    <>
      <Header onOpenFreePass={openFreePass} />
      
      <main className="main">
        <Hero onOpenFreePass={openFreePass} />
        <Logos />
        <Program onOpenFreePass={openFreePass} />
        <ClassSchedule onOpenFreePass={openFreePass} />
        <ChooseUs onOpenFreePass={openFreePass} />
        <Pricing onOpenFreePass={openFreePass} />
        <CalculateBmi onOpenFreePass={openFreePass} />
        <Testimonials />
        <Faq />
      </main>

      <Footer />
      <ScrollUp />
      <WhatsAppButton />

      <FreePassModal isOpen={isFreePassOpen} onClose={closeFreePass} />
    </>
  );
}
