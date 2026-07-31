import { Award, ShieldCheck, Star, CheckCircle, TrendingUp, Sparkles, Globe, ExternalLink } from 'lucide-react';

export default function AwardsAndReviews() {
  const recognitions = [
    {
      id: 'rec-1',
      title: 'Google Premier Partner',
      subtitle: 'Verified Search & Meta Ads',
      badge: 'Certified',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-red-500 to-yellow-500 text-white flex items-center justify-center font-black text-lg shadow-sm">
          G
        </div>
      ),
      metric: '5.0 ★ Top Tier',
    },
    {
      id: 'rec-2',
      title: 'Clutch Top Agency 2025',
      subtitle: '5.0 Rating • 85+ Reviews',
      badge: 'Leader',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
        </div>
      ),
      metric: '4.9 / 5.0 Rating',
    },
    {
      id: 'rec-3',
      title: 'Meta Business Partner',
      subtitle: 'Authorized Ads Agency',
      badge: 'Verified',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-base shadow-sm">
          ∞
        </div>
      ),
      metric: '5.2x Avg ROAS',
    },
    {
      id: 'rec-4',
      title: 'HubSpot Solution Partner',
      subtitle: 'Inbound Marketing Certified',
      badge: 'Gold',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
          HS
        </div>
      ),
      metric: 'Inbound Certified',
    },
    {
      id: 'rec-5',
      title: 'Upwork Top Rated Plus',
      subtitle: '100% Job Success Score',
      badge: 'Top 1%',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
      ),
      metric: '100% Success',
    },
    {
      id: 'rec-6',
      title: 'Shopify Partner Network',
      subtitle: 'E-Commerce Storefronts',
      badge: 'Partner',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shadow-sm">
          S
        </div>
      ),
      metric: '2.1s Speed SLA',
    },
    {
      id: 'rec-7',
      title: 'Trustpilot Excellent',
      subtitle: '4.9/5 Based on 120+ Reviews',
      badge: 'Verified',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
          <Star className="w-5 h-5 fill-white" />
        </div>
      ),
      metric: '4.9 Excellent',
    },
    {
      id: 'rec-8',
      title: 'DesignRush Excellence',
      subtitle: 'Best Web & Mobile Agency',
      badge: 'Winner',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
          <Award className="w-5 h-5" />
        </div>
      ),
      metric: 'Best Agency 2025',
    },
  ];

  // Duplicate items array for seamless looping marquee
  const tickerItems = [...recognitions, ...recognitions];

  return (
    <section id="our-work" className="relative z-10 bg-[#f8f9fe] pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Plus_Jakarta_Sans'] mb-4">
          Trusted Industry Recognition
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Certified by global tech platforms and top-rated by clients for delivering high performance, transparent pricing, and measurable growth.
        </p>
      </div>

      {/* Auto-Scrolling Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient Overlay Mask for Smooth Fade Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#f8f9fe] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#f8f9fe] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Strip */}
        <div className="animate-marquee flex gap-6 items-center">
          {tickerItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-lg hover:border-indigo-300 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100/80">
                  {item.badge}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                  {item.metric}
                </span>
                <span className="text-indigo-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                  Verified ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solid Royal Blue Bottom CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 py-20 text-white relative z-10 overflow-hidden">
        {/* Subtle Mesh Ambient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 relative z-10">
          <h3 className="text-3xl sm:text-5xl font-extrabold mb-5 tracking-tight font-['Plus_Jakarta_Sans'] leading-tight">
            Ready to Accelerate Your Revenue & Market Share?
          </h3>
          <p className="text-indigo-100 max-w-2xl mx-auto text-base sm:text-lg mb-10 font-normal leading-relaxed">
            Book a complimentary 30-minute growth strategy session with our lead marketing architects.
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-3 bg-white text-indigo-700 hover:bg-slate-50 font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-indigo-900/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Schedule Strategy Call</span>
            <TrendingUp className="w-5 h-5 text-indigo-600" />
          </a>
        </div>
      </div>
    </section>
  );
}

