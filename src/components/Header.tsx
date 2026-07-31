import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import SoulDLogo from './SoulDLogo';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenSearch: () => void;
  onSelectService?: (serviceId: string) => void;
}

export default function Header({ onOpenQuote, onOpenSearch, onSelectService }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { id: 'web-dev', name: 'Website Development' },
    { id: 'app-dev', name: 'Mobile App Development' },
    { id: 'content-creation', name: 'Content Creation' },
    { id: 'video-production', name: 'Video Production & Editing' },
    { id: 'smm', name: 'Social Media Management' },
    { id: 'ads', name: 'Google Ads & Meta Ads' },
    { id: 'personal-branding', name: 'Portfolio for Personal Branding' },
    { id: 'product-branding', name: 'Branding Products or Services' },
  ];

  const handleServiceClick = (serviceId: string) => {
    if (onSelectService) onSelectService(serviceId);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate('/services');
  };

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors py-1 ${
      isActive ? 'text-indigo-400 font-bold border-b-2 border-indigo-400' : 'text-slate-200 hover:text-indigo-400'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-lg border-b border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group transition-transform hover:opacity-95"
          >
            <SoulDLogo size={42} variant="full" subtextColor="text-indigo-200" className="group-hover:scale-102 transition-transform drop-shadow-md" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <NavLink to="/" end className={navItemClass}>
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 transition-colors py-2 cursor-pointer ${
                    isActive ? 'text-indigo-400 font-bold' : 'text-slate-200 hover:text-indigo-400'
                  }`
                }
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </NavLink>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl p-2 text-left">
                    {servicesList.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceClick(service.id)}
                        className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-indigo-600/20 hover:border-l-2 hover:border-indigo-500 transition-all flex items-center justify-between group/item cursor-pointer"
                      >
                        <span>{service.name}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 text-indigo-400 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/work" className={navItemClass}>
              Our Work
            </NavLink>

            <NavLink to="/about" className={navItemClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navItemClass}>
              Contact
            </NavLink>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Get a Free Quote Button */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-slate-300 hover:text-white rounded-lg cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4 text-base font-medium text-slate-200">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 ${location.pathname === '/' ? 'text-indigo-400 font-bold' : 'hover:text-indigo-400'}`}
            >
              Home
            </Link>
            
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 ${location.pathname === '/services' ? 'text-indigo-400 font-bold' : 'hover:text-indigo-400'}`}
            >
              Services
            </Link>

            <Link
              to="/work"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 ${location.pathname === '/work' ? 'text-indigo-400 font-bold' : 'hover:text-indigo-400'}`}
            >
              Our Work
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 ${location.pathname === '/about' ? 'text-indigo-400 font-bold' : 'hover:text-indigo-400'}`}
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 ${location.pathname === '/contact' ? 'text-indigo-400 font-bold' : 'hover:text-indigo-400'}`}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg text-center transition-colors shadow-lg cursor-pointer"
              >
                Get a Free Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
