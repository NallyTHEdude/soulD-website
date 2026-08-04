import AwardsAndReviews from "../components/AwardsAndReviews";
import CustomProposalSection from "../components/CustomProposalSection";
import HeroSection from "../components/HeroSection";
import HubspotSection from "../components/HubspotSection";
import ServicesSection from "../components/ServicesSection";
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
      <ServicesSection
        onOpenQuoteWithService={onOpenQuoteWithService}
        selectedServiceId={selectedServiceId}
      />

      {/* Relation & Awards + Reviews Section */}
      <AwardsAndReviews />

      {/* Custom Proposal Section */}
      <CustomProposalSection />
    </>
  );
}
