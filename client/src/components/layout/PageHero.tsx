import { motion } from "framer-motion";

interface PageHeroProps {
  title: string | React.ReactNode;
  subtitle: string;
  image: string;
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
