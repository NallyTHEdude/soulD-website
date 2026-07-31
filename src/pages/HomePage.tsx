import HeroSection from '../components/HeroSection';
import HubspotSection from '../components/HubspotSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import ServicesSection from '../components/ServicesSection';
import AwardsAndReviews from '../components/AwardsAndReviews';

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
    </>
  );
}
