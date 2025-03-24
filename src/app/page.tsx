import HeroSection from '../components/hero-section';
import Features from '../components/features-2';
import FeaturesSection from '../components/features-5';
import CallToAction from '../components/call-to-action';
import Features6 from '../components/features-6';
import FeaturesSection2 from '../components/features-5-2';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <FeaturesSection />
      <Features6 />
      <FeaturesSection2 />
      <CallToAction />
      <Footer />
    </div>
  );
}
