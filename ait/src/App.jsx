import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
