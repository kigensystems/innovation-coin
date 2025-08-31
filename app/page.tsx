import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Innovators from '@/components/Innovators';
import Tokenomics from '@/components/Tokenomics';
import Impact from '@/components/Impact';
import Roadmap from '@/components/Roadmap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Innovators />
        <Tokenomics />
        <Impact />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}