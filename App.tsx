import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';

// Lazy load pages
const About = React.lazy(() => import('./pages/About'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const SolutionDetail = React.lazy(() => import('./pages/SolutionDetail'));
const SmartPartner = React.lazy(() => import('./pages/SmartPartner'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const MiPay = React.lazy(() => import('./pages/MiPay'));

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#050510]">
    <div className="w-12 h-12 border-2 border-sky-500/30 border-t-kof-accent rounded-xl animate-spin mb-4"></div>
    <div className="text-sky-500 text-xs animate-pulse tracking-wider uppercase">Initializing Protocol...</div>
  </div>
);

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col relative">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow relative">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solutions/:id" element={<SolutionDetail />} />
                <Route path="/smart-partner" element={<SmartPartner />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/mipay" element={<MiPay />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
