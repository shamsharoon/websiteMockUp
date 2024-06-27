import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import LogoCloud from "./components/LogoCloud"
import Features from "./components/Features"
import Stats from "./components/Stats"
import Team from "./components/Team"
import ContactForm from "./components/ContactForm"
import.meta.env


function App() {
    const data = import.meta.env
  return (
    <div className=" h-screen">
      <Navbar />
      <Hero id="home"/>
      <LogoCloud />
      <Features id="features"/>
      <Team id="team" />
      <Stats />
      <ContactForm data={data} id="contact"/>
    </div>
  )
}

export default App
