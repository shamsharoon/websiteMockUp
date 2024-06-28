import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Features from './components/Features';
import Team from './components/Team';
import Stats from './components/Stats';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure you import the CSS for styling

function App() {
  const data = import.meta.env;

  return (
    <ChakraProvider className="h-screen">
      <ToastContainer /> {/* This should display toast notifications */}
      <Navbar />
      <Hero id="home" />
      <LogoCloud />
      <Features id="features" />
      <Team id="team" />
      <Stats />
      <ContactForm data={data} id="contact" />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
