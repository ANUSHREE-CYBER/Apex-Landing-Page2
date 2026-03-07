import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TradeInSection from "@/components/TradeInSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ApexPerksSection from "@/components/ApexPerksSection";
import LifecycleSection from "@/components/LifecycleSection";
import FindMyStoreSection from "@/components/FindMyStoreSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [locale, setLocale] = useState<'en' | 'hi'>('en');

  return (
    <div className="w-full bg-background">
      <Navigation locale={locale} />
      <HeroSection locale={locale} />
      <TradeInSection locale={locale} />
      <HowItWorksSection locale={locale} />
      <ApexPerksSection locale={locale} />
      <LifecycleSection locale={locale} />
      <FindMyStoreSection locale={locale} />
      <ContactSection locale={locale} />
    </div>
  );
};

export default Index;
