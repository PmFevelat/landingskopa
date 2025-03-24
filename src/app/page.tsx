import HeroSection from '../components/hero-section';

import FeaturesSection from '../components/features-5';
import FeaturesSection3 from '../components/features-5-3';
import CallToAction from '../components/call-to-action';
import FeaturesSection2 from '../components/features-5-2';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
     
      <FeaturesSection />
      <FeaturesSection3 />
      
      <FeaturesSection2 />
      <CallToAction />
      <Footer />
    </div>
  );
}
