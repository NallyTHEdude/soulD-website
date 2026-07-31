import { useState } from 'react';
import {
  Globe,
  Smartphone,
  PenTool,
  Video,
  Megaphone,
  Network,
  UserCheck,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesSectionProps {
  onOpenQuoteWithService?: (serviceTitle: string) => void;
  selectedServiceId?: string;
}

export default function ServicesSection({
  onOpenQuoteWithService,
}: ServicesSectionProps) {
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe':
        return <Globe className="w-6 h-6 transition-colors" />;
      case 'smartphone':
        return <Smartphone className="w-6 h-6 transition-colors" />;
      case 'pen-tool':
        return <PenTool className="w-6 h-6 transition-colors" />;
      case 'video':
        return <Video className="w-6 h-6 transition-colors" />;
      case 'megaphone':
        return <Megaphone className="w-6 h-6 transition-colors" />;
      case 'network':
        return <Network className="w-6 h-6 transition-colors" />;
      case 'user-check':
        return <UserCheck className="w-6 h-6 transition-colors" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 transition-colors" />;
      default:
        return <Sparkles className="w-6 h-6 transition-colors" />;
    }
  };

  return (
    <section
      id="services"
      className="bg-white text-slate-900 py-20 lg:py-28 relative z-10 border-b border-slate-200/60"
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-['Plus_Jakarta_Sans']">
            Our Digital Marketing Services
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            Whether you&apos;re launching, growing, or scaling, our services are engineered for measurable ROI and seamless execution.
          </p>
        </div>

        {/* 2 Rows x 4 Columns Borderless Grid (Matching Image Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between items-start text-left"
            >
              <div>
                {/* Icon Container */}
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-3 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <button
                type="button"
                onClick={() => setActiveModalService(service)}
                className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors group/link cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 sm:p-10 shadow-2xl relative border border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 border border-indigo-100">
              {getServiceIcon(activeModalService.icon)}
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Guaranteed Delivery & SLA</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">{activeModalService.title}</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">{activeModalService.description}</p>

            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Core Deliverables & Strategy</h4>
            <div className="space-y-2.5 mb-8">
              {activeModalService.features.map((f) => (
                <div key={f} className="flex items-center gap-3 p-3.5 bg-slate-50/80 rounded-xl text-sm font-medium text-slate-800 border border-slate-100">
                  <CheckCircle2 className="w-4.5 h-4.5 text-indigo-600 flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  if (onOpenQuoteWithService) onOpenQuoteWithService(title);
                }}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 transition-all"
              >
                Request Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


