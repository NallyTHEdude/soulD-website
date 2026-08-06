import { CheckCircle2, FileText, Mail, Phone, Send, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { SERVICES_DATA } from "../../data";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  preselectedService,
}: QuoteModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ["Website Development"],
  );
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(selectedServices.filter((s) => s !== title));
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 my-8">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Request Received!
            </h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm">
              Thank you{name ? `, ${name}` : ""}. Our Soul-D. digital team will
              contact you at{" "}
              <strong className="text-indigo-600">{email}</strong> /{" "}
              <strong className="text-indigo-600">{phone}</strong> shortly.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl max-w-md mx-auto text-left text-xs text-slate-600 space-y-1.5 my-4 border border-slate-100">
              <div>
                <strong>Selected Service(s):</strong>{" "}
                {selectedServices.join(", ") || "General Enquiry"}
              </div>
              <div>
                <strong>Contact Email:</strong> {email}
              </div>
              <div>
                <strong>Phone Number:</strong> {phone}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 text-sm"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Get a Custom Proposal
                </h3>
                <p className="text-xs text-slate-500">
                  Select services and leave your contact details for reasonable
                  rate estimates
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Select Services */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  1. Select Required Service(s) *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_DATA.map((s) => {
                    const active = selectedServices.includes(s.title);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleService(s.title)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                          active
                            ? "bg-indigo-50 border-indigo-600 text-indigo-900 shadow-sm"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <span className="truncate pr-2">{s.title}</span>
                        {active && (
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Email & Phone Number */}
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Contact Information
                </label>

                <div>
                  <label
                    htmlFor="quote-email"
                    className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Contact Email *</span>
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    required
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-phone"
                    className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    placeholder="+91 9866500578 or your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-fullname"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Your Name (Optional)
                  </label>
                  <input
                    id="quote-fullname"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-message"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Project Message / Notes (Optional)
                  </label>
                  <textarea
                    id="quote-message"
                    rows={2}
                    placeholder="Brief details about your project or requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
