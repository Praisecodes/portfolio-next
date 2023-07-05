import Image from 'next/image'
import { Header, IntroSection, ServicesSection, AboutSection, SkillsSection, ContactSection } from '@/components/templates';
import { Footer } from '@/components/molecules';

export default function Home(): React.ReactNode {
  return (
    <div className='text-white'>
      <Header />
      <IntroSection />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
