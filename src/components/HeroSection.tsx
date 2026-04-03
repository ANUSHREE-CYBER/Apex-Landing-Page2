import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import phoneDesign from "@/assets/phone-design-3.svg";
import scrollIndicator from "@/assets/scroll.svg";
import DemoModal from "@/components/DemoModal";

interface HeroSectionProps {
  locale?: 'en' | 'hi';
}

const translations = {
  en: {
    tagline: "TRADE SMARTER | UPGRADE FASTER",
    upgrade: "Upgrade",
    yourDigital: " your",
    digitalWorld: "Digital World with",
    smart: "Smart",
    value: " Value",
    description: "Say goodbye to old devices and hello to cutting-edge technology. At Smart Value, we make it simple for you to trade in your old device and trade up to something new—all in one convenient place.",
    scheduleDemo: "Schedule a Demo",
    contactSales: "Contact Sales",
    scrollDown: "Scroll down"
  },
  hi: {
    tagline: "स्मार्ट तरीके से व्यापार करें | तेज़ी से अपग्रेड करें",
    upgrade: "अपग्रेड करें",
    yourDigital: "",
    digitalWorld: " अपनी डिजिटल दुनिया",
    smart: "स्मार्ट वैल्यू के साथ",
    value: "",
    description: "पुराने उपकरणों को अलविदा कहें और अत्याधुनिक तकनीक को नमस्ते।",
    scheduleDemo: "डेमो शेड्यूल करें",
    contactSales: "बिक्री से संपर्क करें",
    scrollDown: "नीचे स्क्रॉल करें"
  }
};

const HeroSection = ({ locale = 'en' }: HeroSectionProps) => {
  const t = translations[locale];
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section
      className="relative w-full flex flex-col justify-start overflow-hidden"
      style={{ backgroundColor: '#0E072F' }}>

      <div className="relative w-full pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="hero-content flex flex-col lg:flex-row lg:items-start lg:justify-between w-full max-w-[1320px] mx-auto">

            {/* Left content */}
            <div className="w-full lg:basis-[55%] lg:max-w-[55%] space-y-6 shrink-0 mt-16">

              <motion.p
                className="text-cyan-light font-bold text-xs lg:text-sm tracking-[0.2em] uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t.tagline}
              </motion.p>

              <motion.h1
                className="text-4xl lg:text-[3.5rem] xl:text-[4.25rem] font-bold tracking-tight"
                style={{ lineHeight: 1.25, letterSpacing: 0 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                <span className="inline-block bg-gradient-to-r from-[#C0FF3A] via-[#80E07D] to-[#00B2FF] bg-clip-text text-transparent">
                  {t.upgrade}
                </span>
                {" "}
                <span className="inline-block text-white">{t.yourDigital}</span>
                <br />
                <span className="inline-block text-white">{t.digitalWorld}</span>
                <br />
                <span className="inline-block" style={{ color: '#E88184' }}>{t.smart}</span>
                {locale === 'en' && <span className="inline-block text-white">{t.value}</span>}
              </motion.h1>

              <motion.p
                className="text-white/70 text-sm lg:text-base max-w-[420px] leading-relaxed"
                style={{ fontFamily: 'Poppins', fontWeight: 500 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                <Button
                  size="lg"
                  onClick={() => setIsDemoOpen(true)}
                  className="bg-white text-background hover:bg-white/90 font-bold rounded-full px-8 h-12">
                  {t.scheduleDemo}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-background font-bold rounded-full px-8 h-12">
                  {t.contactSales}
                </Button>
              </motion.div>
            </div>

            {/* Right content — phones */}
            <motion.div
              className="hidden lg:flex lg:basis-[50%] lg:max-w-[50%] items-center justify-center shrink-0 mt-8"              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={phoneDesign}
                alt="Phone mockups with glow"
                className="w-full scale-[2.2] h-auto object-contain"
              />
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-48 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.img
            src={scrollIndicator}
            alt="Scroll indicator"
            className="w-24 h-24 object-fill"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
};

export default HeroSection;