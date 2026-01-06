import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <span className="bg-white text-slate-900 px-4 py-2 rounded-full shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity -mr-4 pr-6 pointer-events-none">
        Chat with us
      </span>
      <div className="w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center text-white hover:bg-[#20bd5a] transition-colors relative">
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
      </div>
    </motion.a>
  );
}
