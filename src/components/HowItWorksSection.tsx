import { useState } from "react";
import storeImage from "@/assets/store-image.svg";
import ScrollReveal from "@/components/ScrollReveal";

interface HowItWorksSectionProps {
  locale?: 'en' | 'hi';
}

const translations = {
  en: {
    heading: "How",
    headingGradient: "Smart Value",
    headingEnd: "Works",
    steps: [
      {
        number: "01",
        title: "Visit our Nearest Smart Value Store",
        description: "Bring your old device to our store for a quick evaluation"
      },
      {
        number: "02",
        title: "Get an instant Trade-in Offer",
        description: "Receive a competitive offer for your device on the spot"
      },
      {
        number: "03",
        title: "Explore the latest tech",
        description: "Browse our wide selection of the newest devices"
      },
      {
        number: "04",
        title: "Upgrade Instantly",
        description: "Walk out with your new device the same day"
      }
    ]
  },
  hi: {
    heading: "कैसे",
    headingGradient: "स्मार्ट वैल्यू",
    headingEnd: "काम करता है",
    steps: [
      {
        number: "01",
        title: "हमारे निकटतम स्मार्ट वैल्यू स्टोर पर जाएं",
        description: "त्वरित मूल्यांकन के लिए अपना पुराना उपकरण लाएं"
      },
      {
        number: "02",
        title: "तुरंत ट्रेड-इन ऑफर पाएं",
        description: "अपने उपकरण के लिए मौके पर प्रतिस्पर्धी ऑफर प्राप्त करें"
      },
      {
        number: "03",
        title: "नवीनतम तकनीक देखें",
        description: "नए उपकरणों के हमारे विस्तृत संग्रह को ब्राउज़ करें"
      },
      {
        number: "04",
        title: "तुरंत अपग्रेड करें",
        description: "उसी दिन अपने नए उपकरण के साथ बाहर निकलें"
      }
    ]
  }
};

const HowItWorksSection = ({ locale = 'en' }: HowItWorksSectionProps) => {
  const [activeStep, setActiveStep] = useState(1);
  const t = translations[locale];

  const progressWidth = `${activeStep * 25}%`;

  return (
    <section className="min-h-screen bg-background py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <ScrollReveal direction="up">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16"
            style={{ fontFamily: 'Poppins' }}
          >
            <span className="text-white">{t.heading} </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #C0FF3A 20%, #00B2FF 50%)' }}
            >
              {t.headingGradient}
            </span>
            <span className="text-white"> {t.headingEnd}</span>
          </h2>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left column: Steps */}
          <ScrollReveal direction="left">
            <div className="space-y-0">
              {t.steps.map((step, index) => {
                const stepNumber = index + 1;
                const isActive = activeStep === stepNumber;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(stepNumber)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveStep(stepNumber);
                      }
                    }}
                    role="button"
                    aria-pressed={isActive}
                    className={`
                      w-full text-left p-6 md:p-8 rounded-lg transition-all duration-300
                      ${isActive ? 'bg-[hsl(250,45%,15%)]' : 'bg-transparent hover:bg-[hsl(250,45%,12%)]'}
                      focus:outline-none focus:ring-2 focus:ring-coral/50
                    `}
                    style={{ fontFamily: 'Poppins' }}
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      <span
                        className="text-4xl md:text-5xl lg:text-6xl font-bold transition-colors duration-300"
                        style={{
                          color: isActive ? '#C0FF3B' : 'rgba(255, 255, 255, 1)',
                          fontFamily: 'Poppins',
                        }}
                      >
                        {step.number}
                      </span>
                      <div className="flex-1">
                        <h3
                          className={`text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-300 ${isActive ? '' : 'text-white'}`}
                          style={{ color: isActive ? '#C0FF3B' : undefined, fontFamily: 'Poppins' }}
                        >
                          {step.title}
                        </h3>
                        {isActive && (
                          <p className="mt-2 text-white/70 text-sm md:text-base" style={{ fontFamily: 'Poppins', fontWeight: 500 }}>
                            {step.description}
                          </p>
                        )}
                        {isActive && (
                          <div className="mt-4 h-1 w-full bg-[hsl(250,45%,20%)] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500 ease-out"
                              style={{
                                width: progressWidth,
                                background: 'linear-gradient(to right, #C0FF3A 20%, #00B2FF 50%)'
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right column: Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] rounded-[20px] overflow-hidden shadow-2xl">
                <img
                  src={storeImage}
                  alt="Smart Value Store"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;