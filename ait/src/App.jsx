import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
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

function App() {
  return (
    <>
      <Navbar />
      <Hero products={products} />
      <Footer />
    </>
  );
}

export default App;
