import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { ResumePage } from './components/pages/ResumePage';
import { AboutPage } from './components/pages/AboutPage';
import { Strawberry } from './components/pages/Strawberry';
import { BetterHelp } from './components/pages/BetterHelp';
import { EchoKids } from './components/pages/EchoKids';
import { ContactPage } from './components/pages/ContactPage';
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      <Router>
        <Navigation />
        <main className="pt-20 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/strawberry" element={<Strawberry />} />
            <Route path="/betterHelp" element={<BetterHelp />} />
            <Route path="/echokids" element={<EchoKids />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}