import { ParallaxProvider } from 'react-scroll-parallax'
import { BackgroundFX } from './components/BackgroundFX'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ServicesCards } from './components/ServicesCards'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { TestimonialsMarquee } from './components/TestimonialsMarquee'
import { ImpactGrid } from './components/ImpactGrid'
import { FAQSection } from './components/FAQSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton'

function App() {
  return (
    <ParallaxProvider>
      <div className="relative min-h-screen bg-[#f9f7ff] text-midnight dark:bg-midnight dark:text-white">
        <BackgroundFX />
        <Navbar />
        <main>
          <Hero />
          <ServicesCards />
          <AboutSection />
          <ProjectsSection />
          <TestimonialsMarquee />
          <ImpactGrid />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </ParallaxProvider>
  )
}

export default App
