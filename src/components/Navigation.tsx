import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

interface NavigationProps {
  locale?: 'en' | 'hi';
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

const Navigation = ({ locale = 'en' }: NavigationProps) => {
  const t = translations[locale];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-8 py-5 bg-background">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <img src={logo} alt="Smart Value" className="h-10 lg:h-12" />
        
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
          <Button variant="outline" size="sm" className="border-2 border-white text-white hover:bg-white hover:text-background rounded-full px-6" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
            {t.getStarted}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
