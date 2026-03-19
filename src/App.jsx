import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom"; // ✅ Router
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import SplashScreen from "./components/SplashScreen";

function App() {

  const [showSplash, setShowSplash] = useState(
    !localStorage.getItem("visited")
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleFinish = () => {
    localStorage.setItem("visited", "true");
    setShowSplash(false);
  };

  return (
    <BrowserRouter> 
      {showSplash ? (
        <SplashScreen onFinish={handleFinish} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
