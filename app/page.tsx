import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutChatatouille from './components/AboutChatatouille'
import ConceptVideo from './components/ConceptVideo'
import MeetOurTeam from './components/MeetOurTeam'
import OurProcess from './components/OurProcess'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutChatatouille />
      <ConceptVideo />
      <MeetOurTeam />
      <OurProcess />
      <Footer />
    </main>
  )
}
