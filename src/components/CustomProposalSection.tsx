import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  Clock3,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_DATA } from '../data';

export default function CustomProposalSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: SERVICES_DATA[0]?.title ?? "Website Development",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="custom-proposal"
      className="relative z-10 bg-[#090b14] text-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_30%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-['Plus_Jakarta_Sans'] mb-5">
              A focused plan for your next digital growth move.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Share your project goals and our team will shape a practical
              proposal with the right services, timeline, and budget range for
              your brand.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-200 border border-indigo-400/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Tailored Scope
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Services mapped to your stage, goals, and budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-200 border border-indigo-400/20 flex items-center justify-center flex-shrink-0">
                  <Clock3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Fast Review
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Expect a response within 2 to 4 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-200 border border-indigo-400/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Direct Contact
                  </h3>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-xs leading-relaxed text-slate-400 hover:text-indigo-200 transition-colors break-all"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white text-slate-900 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/30">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                    Proposal Request Received
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
                    Thank you{formData.name ? `, ${formData.name}` : ""}.
                    Soul-D. will review your requirements and contact you at{" "}
                    {formData.email || formData.phone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1 font-['Plus_Jakarta_Sans']">
                      Get Custom Proposal
                    </h3>
                    <p className="text-sm text-slate-500">
                      Tell us what you need and we will prepare a clear
                      next-step plan.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="proposal-name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="proposal-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="proposal-email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="proposal-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="proposal-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-600" />
                        <input
                          id="proposal-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 9866500578"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="proposal-company"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Company / Brand
                      </label>
                      <input
                        id="proposal-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="proposal-service"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Service *
                    </label>

                    <select
                      id="proposal-service"
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors"
                    >
                      {SERVICES_DATA.map((service) => (
                        <option key={service.id}>{service.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="proposal-message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="proposal-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your goals, audience, deliverables, and any launch deadlines."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0555F0] hover:bg-[#0444C0] text-white font-bold text-sm py-4 shadow-lg shadow-indigo-600/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Your Request </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
