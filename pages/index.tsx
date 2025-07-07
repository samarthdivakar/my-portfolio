import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import EducationSection from '../components/EducationSection'
import SkillsSection from '../components/SkillsSection'
import LeetCodeSection from '../components/LeetCodeSection'
import ProjectsSection from '../components/ProjectsSection'
import ProfessorRemarksSection from '../components/ProfessorRemarksSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Samarth Divakar - Portfolio</title>
        <meta name="description" content="Personal portfolio of Samarth Divakar - Electronics & Computer Engineering Student, AI/ML Enthusiast, and Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <LeetCodeSection />
        <ProjectsSection />
        <ProfessorRemarksSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
