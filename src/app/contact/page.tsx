import ContactForm from '../../components/contact-form';
import { HeroHeader } from '../../components/hero5-header';
import FooterSection from '../../components/footer';
import BackgroundStars from '../../components/background-stars';

export default function ContactPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <BackgroundStars />
            <HeroHeader />
            <ContactForm />
            <FooterSection />
        </div>
    );
} 