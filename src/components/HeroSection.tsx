import { ArrowRight, Star, TrendingUp, ShieldCheck, Award } from 'lucide-react';
import { HERO_DATA } from '../data';
import SoulDLogo from './SoulDLogo';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const handleLearnMore = () => {
    const el = document.querySelector('#hubspot');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const insights = [
    {
      value: '4.9',
      label: '150+ Happy Clients',
      icon: <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />,
    },
    {
      value: '5.0',
      label: 'High ROAS Campaigns',
      icon: <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />,
    },
    {
      value: '100%',
      label: 'Reasonable Rates Guarantee',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />,
    },
    {
      value: '4.9/5',
      label: 'Top Rated Agency',
      icon: <Award className="w-3.5 h-3.5 text-amber-400" />,
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Fixed Background Image for Parallax Scroll Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center filter brightness-[0.85] contrast-[1.02]"
          style={{
            backgroundImage: `url('${HERO_DATA.heroBgImage}')`,
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Lighter Indigo/Royal Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b]/80 via-[#2e2a72]/70 to-[#221c4a]/60" />

        {/* Geometric Diagonal Polygon Facets (Right Side Shapes) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-35 mix-blend-overlay"
          style={{
            clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 55% 100%)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(99,102,241,0.3) 100%)',
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            clipPath: 'polygon(85% 0, 100% 0, 100% 100%, 68% 100%)',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.38) 0%, rgba(165,180,252,0.35) 100%)',
          }}
        />

        {/* Crisp thin accent line (starts at 55% bottom-right going up to 75% top-right) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            clipPath: 'polygon(74.9% 0, 75.1% 0, 55.1% 100%, 54.9% 100%)',
            background: 'rgba(255,255,255,0.85)',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-[65px] leading-[70px] font-extrabold text-white tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
            Elevate Your Brand <br />
            With Digital Solutions
          </h1>

          {/* Paragraph */}
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-10 max-w-2xl">
            {HERO_DATA.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <button
              type="button"
              onClick={onOpenQuote}
              className="bg-[#3B52F6] hover:bg-blue-700 text-white font-semibold text-base px-7 py-3.5 rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Quote
            </button>

            <button
              type="button"
              onClick={handleLearnMore}
              className="group flex items-center gap-2.5 text-white hover:text-blue-300 font-medium text-base transition-colors py-2 px-1"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Hero Insights Section */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {insights.map((item) => (
              <div
                key={item.label}
                className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-sm p-3.5 transition-all hover:bg-slate-900/60 hover:border-white/20 flex flex-col justify-between"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
                    {item.value}
                  </span>
                  {item.icon}
                </div>
                <span className="text-xs text-slate-300 font-medium leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
