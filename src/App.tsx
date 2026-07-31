import { useState, CSSProperties } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QuoteModal from './components/QuoteModal';
import SearchModal from './components/SearchModal';
import CustomizeDrawer from './components/CustomizeDrawer';
import BuyNowModal from './components/BuyNowModal';
import FloatingWidgets from './components/FloatingWidgets';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { ThemeConfig } from './types';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [isBuyNowOpen, setIsBuyNowOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>(undefined);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const [theme, setTheme] = useState<ThemeConfig>({
    primaryColor: '#3B52F6',
    fontFamily: 'Plus Jakarta Sans',
    borderRadius: '1rem',
    darkMode: false,
  });

  const handleUpdateTheme = (updated: Partial<ThemeConfig>) => {
    setTheme((prev) => ({ ...prev, ...updated }));
  };

  const handleResetTheme = () => {
    setTheme({
      primaryColor: '#3B52F6',
      fontFamily: 'Plus Jakarta Sans',
      borderRadius: '1rem',
      darkMode: false,
    });
  };

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setSelectedServiceTitle(serviceTitle);
    setIsQuoteOpen(true);
  };

  const handleOpenQuote = () => {
    setSelectedServiceTitle(undefined);
    setIsQuoteOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        className={`min-h-screen flex flex-col transition-colors duration-300 ${
          theme.darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
        }`}
        style={
          {
            '--primary-color': theme.primaryColor,
          } as CSSProperties
        }
      >
        {/* Navigation Header */}
        <Header
          onOpenQuote={handleOpenQuote}
          onOpenSearch={() => setIsSearchOpen(true)}
          onSelectService={(id) => setSelectedServiceId(id)}
        />

        {/* Page Routing */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenQuote={handleOpenQuote}
                  onOpenQuoteWithService={handleOpenQuoteWithService}
                  onOpenBuyNow={() => setIsBuyNowOpen(true)}
                  selectedServiceId={selectedServiceId}
                />
              }
            />
            <Route
              path="/services"
              element={
                <ServicesPage
                  onOpenQuoteWithService={handleOpenQuoteWithService}
                />
              }
            />
            <Route
              path="/work"
              element={<WorkPage onOpenQuote={handleOpenQuote} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenQuote={handleOpenQuote} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onOpenQuote={handleOpenQuote} />}
            />
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenQuote={handleOpenQuote}
                  onOpenQuoteWithService={handleOpenQuoteWithService}
                  onOpenBuyNow={() => setIsBuyNowOpen(true)}
                  selectedServiceId={selectedServiceId}
                />
              }
            />
          </Routes>
        </main>

        {/* Agency Footer */}
        <Footer onOpenQuote={handleOpenQuote} />

        {/* Modals & Drawers */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          preselectedService={selectedServiceTitle}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectService={(id) => setSelectedServiceId(id)}
        />

        <CustomizeDrawer
          isOpen={isCustomizeOpen}
          onClose={() => setIsCustomizeOpen(false)}
          theme={theme}
          onUpdateTheme={handleUpdateTheme}
          onResetTheme={handleResetTheme}
        />

        <BuyNowModal
          isOpen={isBuyNowOpen}
          onClose={() => setIsBuyNowOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
