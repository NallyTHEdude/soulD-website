import { ArrowRight } from "lucide-react";
import { HERO_DATA } from "../../data";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section
      id="home"
      className="relative flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Fixed Background Image for Parallax Scroll Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center filter brightness-[0.85] contrast-[1.02]"
          style={{
            backgroundImage: `url('${HERO_DATA.heroBgImage}')`,
            backgroundAttachment: "fixed",
          }}
        />

        {/* Lighter Indigo/Royal Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#1e1b4b]/80 via-[#2e2a72]/70 to-[#221c4a]/60" />

        {/* Geometric Diagonal Polygon Facets (Right Side Shapes) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-35 mix-blend-overlay"
          style={{
            clipPath: "polygon(75% 0, 100% 0, 100% 100%, 55% 100%)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(99,102,241,0.3) 100%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            clipPath: "polygon(85% 0, 100% 0, 100% 100%, 68% 100%)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.38) 0%, rgba(165,180,252,0.35) 100%)",
          }}
        />

        {/* Crisp thin accent line (starts at 55% bottom-right going up to 75% top-right) */}
        {/* <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            clipPath: "polygon(74.9% 0, 75.1% 0, 55.1% 100%, 54.9% 100%)",
            background: "rgba(255,255,255,0.85)",
          }}
        /> */}
      </div>

      {/* Hero Content Container */}
      <div className="justify-center relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16">
        <div className="max-w-10xl mx-auto text-center ">
          {/* Heading */}
          <h1 className="text-[40px] sm:text-6xl lg:text-[76px] leading-tight sm:leading-[1.05] font-extrabold text-white tracking-tight mb-4 wrap-break-word">
            {" "}
            Elevate Your Brand with Soul-D.
          </h1>
          <h1 className="text-[40px] sm:text-5xl lg:text-[90px] leading-tight sm:leading-[1.08] text-white tracking-tight mb-4 wrap-break-word">
            The Best{" "}
            <span className="inline-flex text-[#0555F0] font-extrabold">
              Digital Marketing 
            </span>
            <br />
            <span className='text-[#0555F0] font-extrabold'>Agency </span>
            in Hyderabad
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 mt-25">
            <button
              type="button"
              onClick={onOpenQuote}
              className="border-2 border-[#0555F0] text-white hover:bg-[#0555F0] hover:text-white font-semibold text-base px-7 py-3.5 rounded-[100px]  shadow-sm shadow-blue-600/30 hover:shadow-md hover:shadow-blue-600/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Quote
            </button>

            <button
              type="button"
              onClick={handleLearnMore}
              className="group flex items-center gap-2.5 text-white hover:text-[#0555F0] font-medium text-base transition-colors py-2 px-1"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
