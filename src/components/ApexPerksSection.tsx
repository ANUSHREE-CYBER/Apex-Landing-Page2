import phoneMockup from "@/assets/phone-mockup.svg";
import maskGroup from "@/assets/mask-group-2.svg";
import discountIcon from "@/assets/discount-icon.svg";
import personIcon from "@/assets/person-icon.svg";
import stopwatchIcon from "@/assets/stopwatch-icon.svg";
import ScrollReveal from "@/components/ScrollReveal";

interface ApexPerksSectionProps {
  locale?: 'en' | 'hi';
}

const translations = {
  en: {
    headingStart: "Why choose ",
    headingGradient: "Smart Value",
    headingEnd: " ?",
    perksTitle: "Exclusive Apex Value Perks",
    perks: [
      {
        title: "Special Trade-Up Discounts",
        description: "Save more when you upgrade through us"
      },
      {
        title: "Personalized Support",
        description: "Our in-store specialists ensure you find the perfect fit"
      },
      {
        title: "Fast Process",
        description: "No shipping delays—just immediate action"
      }
    ]
  },
  hi: {
    headingStart: "क्यों चुनें ",
    headingGradient: "स्मार्ट वैल्यू",
    headingEnd: " ?",
    perksTitle: "विशेष एपेक्स वैल्यू लाभ",
    perks: [
      {
        title: "विशेष ट्रेड-अप छूट",
        description: "हमारे माध्यम से अपग्रेड करने पर अधिक बचत करें"
      },
      {
        title: "व्यक्तिगत सहायता",
        description: "हमारे इन-स्टोर विशेषज्ञ आपको सही फिट खोजने में मदद करते हैं"
      },
      {
        title: "तेज़ प्रक्रिया",
        description: "कोई शिपिंग देरी नहीं—बस तुरंत कार्रवाई"
      }
    ]
  }
};

const perkIcons = [discountIcon, personIcon, stopwatchIcon];

const ApexPerksSection = ({ locale = 'en' }: ApexPerksSectionProps) => {
  const t = translations[locale];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#0E072F' }}>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollReveal direction="up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16" style={{ fontFamily: 'Poppins' }}>
            <span className="text-white">{t.headingStart}</span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #C0FF3A 20%, #00B2FF 50%)' }}
            >
              {t.headingGradient}
            </span>
            <span className="text-white">{t.headingEnd}</span>
          </h2>
        </ScrollReveal>

        {/* Main Content Container */}
        <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden">
          <img
            src={maskGroup}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

              {/* Left Column - Phone Mockup */}
              <ScrollReveal direction="left" delay={0.1} className="w-full lg:w-1/2">
                <div className="w-full flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-[600px] md:max-w-[750px]">
                    <img
                      src={phoneMockup}
                      alt="Smart Value phone trade-in"
                      className="w-full h-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column - Perks */}
              <div className="w-full lg:w-1/2">
                <ScrollReveal direction="right" delay={0.1}>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-8"
                    style={{ fontFamily: 'Poppins', color: '#C0FF3B' }}
                  >
                    {t.perksTitle}
                  </h3>
                </ScrollReveal>

                <ul className="space-y-6">
                  {t.perks.map((perk, index) => (
                    <ScrollReveal key={index} direction="right" delay={0.2 + index * 0.15}>
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                          <img
                            src={perkIcons[index]}
                            alt={`${perk.title} icon`}
                            className="w-12 h-12"
                          />
                        </div>
                        <div>
                          <h4
                            className="text-lg md:text-xl font-bold text-white mb-1"
                            style={{ fontFamily: 'Poppins' }}
                          >
                            {perk.title}
                          </h4>
                          <p
                            className="text-white/90 text-sm md:text-base"
                            style={{ fontFamily: 'Poppins', fontWeight: 500 }}
                          >
                            {perk.description}
                          </p>
                        </div>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApexPerksSection;