import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

interface NavigationProps {
  locale?: 'en' | 'hi';
  onLocaleChange?: (locale: 'en' | 'hi') => void;
}

const translations = {
  en: {
    overview: "Overview",
    about: "About",
    howItWorks: "How it works?",
    locateStores: "Locate Stores",
    getStarted: "Get Started"
  },
  hi: {
    overview: "अवलोकन",
    about: "बारे में",
    howItWorks: "यह कैसे काम करता है?",
    locateStores: "स्टोर खोजें",
    getStarted: "शुरू करें"
  }
};

const Navigation = ({ locale = 'en', onLocaleChange }: NavigationProps) => {
  const t = translations[locale];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-8 py-5 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(14, 7, 47, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <img src={logo} alt="Smart Value" className="h-10 lg:h-12" />

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#overview" className="text-white text-sm hover:text-cyan-light transition-colors" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
            {t.overview}
          </a>
          <a href="#about" className="text-white text-sm hover:text-cyan-light transition-colors" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
            {t.about}
          </a>
          <a href="#how-it-works" className="text-white text-sm hover:text-cyan-light transition-colors" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
            {t.howItWorks}
          </a>
          <a href="#locate-stores" className="text-white text-sm hover:text-cyan-light transition-colors" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
            {t.locateStores}
          </a>

          {/* Language Toggle */}
          {onLocaleChange && (
            <button
              onClick={() => onLocaleChange(locale === 'en' ? 'hi' : 'en')}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors px-2"
              style={{ fontFamily: 'Poppins', fontWeight: 700 }}
            >
              {locale === 'en' ? 'हिं' : 'EN'}
            </button>
          )}

          <Button
            variant="outline"
            size="sm"
            className="border-2 border-white text-white hover:bg-white hover:text-background rounded-full px-6"
            style={{ fontFamily: 'Poppins', fontWeight: 700 }}
          >
            {t.getStarted}
          </Button>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navigation;