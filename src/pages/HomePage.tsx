import AwardsAndReviews from "../components/AwardsAndReviews";
import CustomProposalSection from "../components/CustomProposalSection";
import FaqSection from "../components/FaqSection";
import HeroSection from "../components/HeroSection";
import HubspotSection from "../components/HubspotSection";
import StatsBar from "../components/ui/StatsBar";
import InteractiveServices from "../components/ui/InteractiveService";
import WhatWeDoSection from "../components/WhatWeDoSection";
interface HomePageProps {
  onOpenQuote: () => void;
  onOpenQuoteWithService: (serviceTitle: string) => void;
  onOpenBuyNow: () => void;
  selectedServiceId?: string;
}

export default function HomePage({
  onOpenQuote,
  onOpenQuoteWithService,
  onOpenBuyNow,
  selectedServiceId,
}: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection onOpenQuote={onOpenQuote} />

      {/* Interactive Services */}
      <InteractiveServices onOpenQuoteWithService={onOpenQuoteWithService} />
      

      {/* HubSpot Drag-and-Drop Section */}
      <HubspotSection onTryGenerator={onOpenBuyNow} />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Services Section */}
      {/* <ServicesSection
        onOpenQuoteWithService={onOpenQuoteWithService}
        selectedServiceId={selectedServiceId}
      /> */}

      {/* Relation & Awards + Reviews Section */}
      <AwardsAndReviews />

      {/* Custom Proposal Section */}
      <CustomProposalSection />

      {/* FAQ SECTION */}
      <FaqSection />
    </>
  );
}
