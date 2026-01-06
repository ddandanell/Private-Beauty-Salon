import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import kienImg from "@assets/generated_images/friendly_male_customer_service_agent_portrait.png";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the message bubble after a short delay
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          y: isOpen ? 0 : 10, 
          scale: isOpen ? 1 : 0.9,
          pointerEvents: isOpen ? "auto" : "none"
        }}
        className="bg-white p-4 rounded-2xl rounded-br-none shadow-xl border border-border/50 max-w-[280px] relative mb-2"
      >
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
          className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
        >
          <X className="w-3 h-3" />
        </button>
        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          Hi, my name is <span className="font-bold text-slate-900">Kien</span>, I'm here for helping you, let me know what I can do. 👋
        </p>
      </motion.div>

      {/* Button with Portrait */}
      <motion.a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-16 h-16 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10">
          <img 
            src={kienImg} 
            alt="Kien - Customer Support" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Online Status Indicator */}
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full z-20 animate-pulse"></span>
        
        {/* WhatsApp Icon Badge */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center border-2 border-white z-20 shadow-sm">
           <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
           </svg>
        </div>
      </motion.a>
    </div>
  );
}
