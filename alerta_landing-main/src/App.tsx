
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ProductShowcase } from './components/sections/ProductShowcase';
import AppInterface from './components/sections/AppInterface';
import { Features } from './components/sections/Features';
import { Contact } from './components/sections/Contact';
import { About } from './components/sections/About';



function App() {
  return (
    <div className="font-sans text-slate-900 bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <AppInterface />
        <Contact />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
