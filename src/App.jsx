import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "./components/AnimatedCursor";
import Technologies from './components/Technologies';
import ThemeToggle from "./components/ThemeToggle";
import LearningJourney from './components/LearningJourney';
import Blog from './pages/Blog';

// 👇 Home Page Layout
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <LearningJourney />
      <Contact />
      <Footer />
      <ScrollToTop />
      <AnimatedCursor />
      <ThemeToggle />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
      </Routes>
    </Router>
  );
}
