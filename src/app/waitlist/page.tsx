import WaitlistForm from '../../components/waitlist-form';
import { HeroHeader } from '../../components/hero5-header';
import FooterSection from '../../components/footer';
import BackgroundStars from '../../components/background-stars';

export default function WaitlistPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <BackgroundStars />
            <HeroHeader />
            <WaitlistForm />
            <FooterSection />
        </div>
    );
} 