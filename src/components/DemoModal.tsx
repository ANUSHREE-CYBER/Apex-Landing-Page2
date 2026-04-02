import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl p-8"
            style={{ backgroundColor: "#1A1145", border: "1px solid rgba(255,255,255,0.1)" }}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-1">Schedule a Demo</h2>
            <p className="text-white/50 text-sm mb-6">Fill in your details and we'll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              />
              <input
                type="text"
                placeholder="Company (optional)"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              />
              <textarea
                placeholder="Message (optional)"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              />
              <Button
                type="submit"
                className="w-full rounded-full font-bold h-12 text-black"
                style={{ background: "linear-gradient(90deg, #C0FF3A, #00B2FF)" }}
              >
                Book My Demo
              </Button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;