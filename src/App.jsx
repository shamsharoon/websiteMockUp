import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import LogoCloud from "./components/LogoCloud"
import Features from "./components/Features"
import Stats from "./components/Stats"
import Team from "./components/Team"
import ContactForm from "./components/ContactForm"
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import Footer from "./components/Footer"
import.meta.env


function App() {
    const data = import.meta.env
  return (
    <ChakraProvider className=" h-screen">
      <Navbar />
      <Hero id="home"/>
      <LogoCloud />
      <Features id="features"/>
      <Team id="team" />
      <Stats />
      <ContactForm data={data} id="contact"/>
      <Footer />
    </ChakraProvider>
  )
}

export default App
