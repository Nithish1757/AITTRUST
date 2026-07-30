import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Showcase from "./components/Showcase.jsx";
import Gallery from "./components/gallery.jsx";
import Footer from "./components/footer.tsx";
import heroImage from "./assets/hero.png";
import "./App.css";

const products = [
  "AI Risk Intelligence",
  "Model Guardrails",
  "Data Provenance",
  "Compliance Cloud",
  "Threat Detection",
  "Secure AI Gateway",
  "Trust Analytics",
  "Policy Automation",
  "Identity Protection",
  "Governance Hub",
  "Realtime Monitoring",
  "Privacy Controls",
  "Audit Readiness",
  "Incident Response",
  "Enterprise Security",
].map((title, index) => ({
  title,
  thumbnail: heroImage,
  link: `#product-${index + 1}`,
}));

const gallerySlides = products.slice(0, 5).map(({ title, thumbnail }) => ({
  title,
  src: thumbnail,
  button: "Explore solution",
}));

function App() {
  return (
    <>
      <Navbar />
      <Hero products={products} />
      <Gallery slides={gallerySlides} />
      <Showcase products={products} />
      <Footer />
    </>
  );
}

export default App;
