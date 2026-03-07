import card01 from "@/assets/card-03.svg"; // Green gradient - 01
import card02 from "@/assets/card-02.svg"; // Red - 02
import card03 from "@/assets/card-01.svg"; // Gold - 03
import card04 from "@/assets/card-06.svg"; // Teal - 04
import card05 from "@/assets/card-05.svg"; // Mauve - 05
import card06 from "@/assets/card-04.svg"; // Purple - 06
import card07 from "@/assets/card-09.svg"; // Green - 07
import card08 from "@/assets/card-08.svg"; // Brown - 08
import card09 from "@/assets/card-07.svg"; // Blue/purple - 09

// Icons - Icon A for cards 1,4,5,6,7,8,9 | Icon B for card 2 | Icon C for card 3
import storeIcon from "@/assets/store-icon.svg";
import rocketIcon from "@/assets/rocket-icon.svg";
import diagnosisIcon from "@/assets/diagnosis-icon.svg";

interface LifecycleSectionProps {
  locale?: 'en' | 'hi';
}

const translations = {
  en: {
    title: "trade-in Lifecycle",
    smartValue: "Smart Value",
    cards: [
      "Customer Visit to our Store",
      "Initiate Trade-in",
      "Device Diagnosis",
      "Instant Quotation",
      "Finalize Trade-in",
      "Buyer Price Bidding",
      "Device Ownership & Shipment",
      "Buyer Device Confirmation",
      "Payment Verification"
    ]
  },
  hi: {
    title: "ट्रेड-इन जीवनचक्र",
    smartValue: "स्मार्ट वैल्यू",
    cards: [
      "हमारे स्टोर पर ग्राहक का दौरा",
      "ट्रेड-इन शुरू करें",
      "डिवाइस निदान",
      "तत्काल उद्धरण",
      "ट्रेड-इन को अंतिम रूप दें",
      "खरीदार मूल्य बोली",
      "डिवाइस स्वामित्व और शिपमेंट",
      "खरीदार डिवाइस पुष्टि",
      "भुगतान सत्यापन"
    ]
  }
};

const cardImages = [card01, card02, card03, card04, card05, card06, card07, card08, card09];

// Icon mapping: Card 1,4,5,6,7,8,9 → storeIcon | Card 2 → rocketIcon | Card 3 → diagnosisIcon
const cardIcons = [
  storeIcon,    // Card 1
  rocketIcon,   // Card 2
  diagnosisIcon, // Card 3
  storeIcon,    // Card 4
  storeIcon,    // Card 5
  storeIcon,    // Card 6
  storeIcon,    // Card 7
  storeIcon,    // Card 8
  storeIcon     // Card 9
];

const LifecycleSection = ({ locale = 'en' }: LifecycleSectionProps) => {
  const t = translations[locale];

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-bold font-poppins mb-12 md:mb-16">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(to right, #C0FF3A 20%, #00B2FF 50%)'
            }}
          >
            {t.smartValue}
          </span>
          <span className="text-white"> {t.title}</span>
        </h2>

        {/* Cards Grid - 3x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cardImages.map((cardSrc, index) => (
            <div key={index} className="relative group">
              {/* Card Image - using the SVG as-is with baked-in numbering */}
              <div className="relative w-full aspect-[433/360] rounded-2xl overflow-hidden">
                <img
                  src={cardSrc}
                  alt={`Step ${index + 1}: ${t.cards[index]}`}
                  className="w-full h-full object-cover"
                />
                {/* Icon + Text group - centered both vertically and horizontally */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={cardIcons[index]}
                      alt=""
                      aria-hidden="true"
                      className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <p className="text-white text-sm md:text-base font-poppins font-medium text-center px-4">
                      {t.cards[index]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifecycleSection;
