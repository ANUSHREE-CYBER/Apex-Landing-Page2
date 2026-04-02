import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpeg";
import ScrollReveal from "@/components/ScrollReveal";

interface ContactSectionProps {
  locale?: 'en' | 'hi';
}

const translations = {
  en: {
    contactForm: "Contact Form",
    name: "Name",
    email: "Email",
    comment: "Comment or message",
    submit: "SUBMIT  >",
    location: "Location",
    locationValue: "Location 1",
    phone: "Phone",
    phoneValue: "+91 9XXXXXXXXX",
    emailLabel: "Email",
    emailValue: "abc@gmail.com",
    smartValue: "Smart Value",
    tagline: "Upgrade your\nDigital World with\nSmart Value",
    followUs: "Follow us",
    termsTitle: "Terms & Services",
    cookiePolicy: "Cookie Policy",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    copyright: "© 2025 SmartValue. All rights reserved.",
  },
  hi: {
    contactForm: "संपर्क फ़ॉर्म",
    name: "नाम",
    email: "ईमेल",
    comment: "टिप्पणी या संदेश",
    submit: "सबमिट  >",
    location: "स्थान",
    locationValue: "स्थान 1",
    phone: "फ़ोन",
    phoneValue: "+91 9XXXXXXXXX",
    emailLabel: "ईमेल",
    emailValue: "abc@gmail.com",
    smartValue: "Smart Value",
    tagline: "Smart Value के साथ\nअपनी डिजिटल दुनिया\nअपग्रेड करें",
    followUs: "हमें फॉलो करें",
    termsTitle: "नियम और सेवाएं",
    cookiePolicy: "कुकी नीति",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    copyright: "© 2025 SmartValue. सर्वाधिकार सुरक्षित।",
  }
};

const ContactSection = ({ locale = 'en' }: ContactSectionProps) => {
  const t = translations[locale];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#0E072F' }}>
      <div className="max-w-[1200px] mx-auto">

        {/* Contact Card */}
        <ScrollReveal direction="up">
          <div className="relative flex flex-col lg:flex-row rounded-3xl overflow-visible" style={{ minHeight: '480px' }}>

            {/* Left Image */}
            <div className="relative w-full lg:w-[45%] rounded-l-3xl overflow-hidden" style={{ minHeight: '400px' }}>
              <img
                src={contactBg}
                alt="Office lounge"
                className="w-full h-full object-cover"
                style={{ minHeight: '100%' }}
              />
              {/* Green Info Box */}
              <div
                className="absolute top-1/2 -translate-y-1/2 z-20 rounded-2xl p-5 md:p-6"
                style={{ backgroundColor: '#C9DF8F', maxWidth: '220px', left: '-24px' }}
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#000000' }} />
                    <div>
                      <p className="font-poppins font-medium text-sm" style={{ color: '#000000' }}>{t.location}</p>
                      <p className="font-poppins font-bold text-sm" style={{ color: '#000000' }}>{t.locationValue}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#000000' }} />
                    <div>
                      <p className="font-poppins font-medium text-sm" style={{ color: '#000000' }}>{t.phone}</p>
                      <p className="font-poppins font-bold text-sm" style={{ color: '#000000' }}>{t.phoneValue}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#000000' }} />
                    <div>
                      <p className="font-poppins font-medium text-sm" style={{ color: '#000000' }}>{t.emailLabel}</p>
                      <p className="font-poppins font-bold text-sm" style={{ color: '#000000' }}>{t.emailValue}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div
              className="w-full lg:w-[55%] rounded-r-3xl rounded-b-3xl lg:rounded-bl-none p-8 md:p-10 flex flex-col justify-between"
              style={{ background: 'linear-gradient(to bottom, #FFFFFF, #999999)' }}
            >
              <div>
                <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-6" style={{ color: '#000000' }}>
                  {t.contactForm}
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="font-poppins font-bold text-sm mb-1.5 block" style={{ color: '#000000' }}>{t.name}</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg px-4 py-3 font-poppins text-sm outline-none"
                      style={{ backgroundColor: 'rgba(97, 100, 104, 0.2)', color: '#000000' }}
                      placeholder={t.name}
                    />
                  </div>
                  <div>
                    <label className="font-poppins font-bold text-sm mb-1.5 block" style={{ color: '#000000' }}>{t.email}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg px-4 py-3 font-poppins text-sm outline-none"
                      style={{ backgroundColor: 'rgba(97, 100, 104, 0.2)', color: '#000000' }}
                      placeholder={t.email}
                    />
                  </div>
                  <div>
                    <label className="font-poppins font-bold text-sm mb-1.5 block" style={{ color: '#000000' }}>{t.comment}</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg px-4 py-3 font-poppins text-sm outline-none resize-none"
                      style={{ backgroundColor: 'rgba(97, 100, 104, 0.2)', color: '#000000', minHeight: '120px' }}
                      placeholder={t.comment}
                    />
                  </div>
                </form>
              </div>
              <button
                type="submit"
                className="mt-3 self-start rounded-lg px-6 py-2.5 font-poppins font-bold text-sm transition-all hover:brightness-110"
                style={{ backgroundColor: '#C9DF8F', color: '#000000' }}
                onClick={handleSubmit}
              >
                {t.submit}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-20 flex flex-col md:flex-row justify-between items-start gap-10">
            <div>
              <h3 className="font-poppins font-bold text-xl md:text-2xl text-white/80 mb-2">{t.smartValue}</h3>
              <p className="font-poppins font-medium text-xs text-white/60 whitespace-pre-line leading-relaxed mb-6">
                {t.tagline}
              </p>
              <p className="font-poppins font-bold text-sm text-white/80 mb-3">{t.followUs}</p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-right">
              <h3 className="font-poppins font-bold text-lg text-white/80 mb-3">{t.termsTitle}</h3>
              <div className="flex flex-col gap-1.5">
                <a href="#" className="font-poppins font-medium text-sm text-white/60 hover:text-white/80 transition-colors">{t.cookiePolicy}</a>
                <a href="#" className="font-poppins font-medium text-sm text-white/60 hover:text-white/80 transition-colors">{t.privacyPolicy}</a>
                <a href="#" className="font-poppins font-medium text-sm text-white/60 hover:text-white/80 transition-colors">{t.termsOfService}</a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="mt-8 mb-4 w-full h-px bg-white/20" />

        {/* Copyright */}
        <p className="text-center font-poppins font-medium text-xs text-white/40">
          {t.copyright}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;