import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import souldLogo from "../../assets/sould-logo.png";

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  return (
    <footer className="relative z-10 bg-[#090b14] text-slate-400 pt-20 pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center group transition-transform hover:opacity-95"
            >
              <img
                src={souldLogo}
                alt="Soul-D."
                className="h-11 sm:h-12 w-auto object-contain rounded-lg transition-transform group-hover:scale-102"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm font-normal text-3xl">
              We would love to hear from you. Subscribe for more information.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-indigo-500 hover:text-white flex items-center justify-center transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-indigo-500 hover:text-white flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-indigo-500 hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-indigo-500 hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Services – 2 columns */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest text-indigo-400">
              Our Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-2xl leading-relaxed">
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Content Creation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Video Production & Editing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Google Ads & Meta Ads
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Personal Branding Portfolios
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Product/Service Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest text-indigo-400">
              Contact Soul-D.
            </h4>
            <div className="space-y-2.5 text-2xl">
              <a
                href="mailto:soul.d.digitalmarketingsolutions@gmail.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-indigo-400 transition-colors break-all"
              >
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>soul.d.digitalmarketingsolutions@gmail.com</span>
              </a>
              <a
                href="tel:+919866500578"
                className="flex items-center gap-2.5 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>+91 9866500578</span>
              </a>
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>Digital Services Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-2xl text-slate-500">
          <div>
            © {new Date().getFullYear()} Soul-D. | Digital Marketing Solutions.
            All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="hover:text-slate-300 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="hover:text-slate-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="hover:text-slate-300 transition-colors"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
