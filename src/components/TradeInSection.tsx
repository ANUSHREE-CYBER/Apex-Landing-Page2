import shieldIcon from "@/assets/shield.svg";
import flashIcon from "@/assets/flash.svg";
import recycleIcon from "@/assets/recycle.svg";
import whiteCard from "@/assets/white-card.svg";

interface TradeInSectionProps {
  locale?: 'en' | 'hi';
}

const translations = {
  en: {
    heading: "Start your",
    tradeIn: "Trade-in",
    journeyToday: "Journey Today",
    description: "At Smart Value, we're redefining the upgrade experience. Bring your old device, discover your trade-in value, and step into the future of technology—all in one place.",
    trustedTradeIn: "Trusted Trade-in",
    instantValue: "Instant Value",
    ecoFriendly: "Eco Friendly"
  },
  hi: {
    heading: "शुरू करें अपना",
    tradeIn: "ट्रेड-इन",
    journeyToday: "सफर आज",
    description: "स्मार्ट वैल्यू में, हम अपग्रेड अनुभव को फिर से परिभाषित कर रहे हैं। अपना पुराना उपकरण लाएं, अपने ट्रेड-इन मूल्य की खोज करें, और प्रौद्योगिकी के भविष्य में कदम रखें—सब एक ही जगह।",
    trustedTradeIn: "विश्वसनीय ट्रेड-इन",
    instantValue: "तुरंत मूल्य",
    ecoFriendly: "पर्यावरण अनुकूल"
  }
};

const FeatureCard = ({ 
  icon, 
  title, 
  alt 
}: { 
  icon: string; 
  title: string; 
  alt: string;
}) => {
  return (
    <div className="relative w-full max-w-[280px] md:max-w-[300px] aspect-square rounded-[20px] bg-[hsl(250,45%,12%)] border border-[hsl(250,40%,25%)] flex flex-col items-center justify-center overflow-hidden">
      {/* WHITE CARD BACKGROUND */}
      <img 
        src={whiteCard} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      
      {/* Icon */}
      <img 
        src={icon} 
        alt={alt}
        className="relative z-10 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
      />
      
      {/* Caption inside card below icon */}
      <p className="relative z-10 mt-4 md:mt-6 text-white font-bold text-base md:text-lg text-center px-4" style={{ fontFamily: 'Poppins' }}>
        {title}
      </p>
    </div>
  );
};

const TradeInSection = ({ locale = 'en' }: TradeInSectionProps) => {
  const t = translations[locale];

  return (
    <section className="relative min-h-screen py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ fontFamily: 'Poppins' }}>
            <span className="text-white">{t.heading} </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #C0FF3A 20%, #00B2FF 50%)'
              }}
            >
              {t.tradeIn}
            </span>
            <span className="text-white"> {t.journeyToday}</span>
          </h2>
          
          <p 
            className="mt-6 text-white/90 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Poppins', fontWeight: 500 }}
          >
            {t.description}
          </p>
        </div>

        {/* Feature Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto">
          <FeatureCard 
            icon={shieldIcon} 
            title={t.trustedTradeIn}
            alt="Trusted trade-in shield icon"
          />
          <FeatureCard 
            icon={flashIcon} 
            title={t.instantValue}
            alt="Instant value lightning icon"
          />
          <FeatureCard 
            icon={recycleIcon} 
            title={t.ecoFriendly}
            alt="Eco friendly recycle icon"
          />
        </div>
      </div>
    </section>
  );
};

export default TradeInSection;
