import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf } from "lucide-react";
import Button from "/src/components/Button.jsx";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-40 px-6 bg-zinc-950 text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-emerald-500/20 blur-[120px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-green-500/10 blur-[120px] bottom-[-200px] right-[-200px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* ICON */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="flex justify-center mb-6"
        >
          <Leaf className="text-emerald-400" size={40} />
        </motion.div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Start Turning Waste Into{" "}
          <span className="text-emerald-400">Impact</span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Join EcoLoop and become part of a global movement using AI to reduce
          waste, earn rewards, and protect the planet.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <Button href="/scan" className="flex items-center gap-2">
            Start Scanning
            <ArrowRight size={18} />
          </Button>

          <Button
            href="/signup"
            variant="outline"
            className="flex items-center gap-2"
          >
            Create Account
            <Sparkles size={18} />
          </Button>
        </div>

        {/* MINI TRUST TEXT */}
        <p className="mt-8 text-xs text-gray-500">
          No ads. No clutter. Just AI-powered sustainability.
        </p>
      </div>
    </section>
  );
}
