import { Button } from "./ui/button";
import { motion } from "motion/react";

interface HeroSectionProps {
  onTakePledge: () => void;
  onTakeQuiz: () => void;
}

export function HeroSection({ onTakePledge, onTakeQuiz }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Flag Colors Accent */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-2 mb-8"
          >
            <div className="w-20 h-1 bg-[#FF9933] rounded-full"></div>
            <div className="w-20 h-1 bg-white border border-gray-300 rounded-full"></div>
            <div className="w-20 h-1 bg-[#138808] rounded-full"></div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="block text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#FF9933] via-[#000080] to-[#138808] bg-clip-text text-transparent">
              Samajhdaar Bharat
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl text-gray-700">
              Civic Sense. Indian Pride. Everyday Action.
            </p>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 mb-8 italic"
          >
            Because civic sense is not taught. It is lived.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Samajhdaar Bharat aims to transform civic sense from a lecture into a lifestyle.
            The focus is not on rules—but on class, respect, and pride in public behavior.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              onClick={onTakePledge}
              size="lg"
              className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Take the Civic Pledge 🇮🇳
            </Button>
            <Button 
              onClick={onTakeQuiz}
              size="lg"
              variant="outline"
              className="border-2 border-[#138808] text-[#138808] hover:bg-[#138808] hover:text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Are You Samajhdaar?
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
