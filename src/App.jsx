import { Camera } from "three";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Lizard from "./components/Lizard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Lizard />
      <HowItWorks />

      <Footer />
    </main>
  );
};

export default App;
