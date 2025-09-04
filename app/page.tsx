import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Impact from '@/components/Impact';
import Roadmap from '@/components/Roadmap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="space-y-16 md:space-y-20 lg:space-y-24">
        <Hero />
        <Mission />
        <Impact />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}