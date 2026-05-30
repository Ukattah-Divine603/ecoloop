import { motion } from "framer-motion";
import { Recycle, Leaf, Award } from "lucide-react";
import Button from "/src/components/Button.jsx";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/vecteezy_green-simple-natural-outdoor-travel-video-from-top_38999616.mp4"
          type="video/mp4"
        />
      </video>

      {/* 🌑 Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-black/30 to-black/80" />

      {/* 🧠 Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-black max-w-5xl">
          Turn Waste Into <span className="text-emerald-400">Opportunity</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          AI-powered recycling, sustainability tracking, and eco rewards — all
          in one platform.
        </p>

        <div className="flex gap-4 mt-10">
          <Button>Start Scanning</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>

      {/* 🌿 Floating Cards */}

      {/* Card 1 */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="hidden md:flex absolute top-32 left-10 z-20
        bg-white/10 backdrop-blur-md border border-white/20
        px-5 py-4 rounded-2xl text-white shadow-2xl items-center gap-2"
      >
        <Recycle size={18} className="text-emerald-400" />
        Plastic Detected
      </motion.div>

      {/* Card 2 */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="hidden md:flex absolute bottom-40 left-20 z-20
        bg-white/10 backdrop-blur-md border border-white/20
        px-5 py-4 rounded-2xl text-white shadow-2xl items-center gap-2"
      >
        <Leaf size={18} className="text-emerald-400" />
        +5 Eco Points Earned
      </motion.div>

      {/* Card 3 */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="hidden md:flex absolute top-40 right-14 z-20
        bg-white/10 backdrop-blur-md border border-white/20
        px-5 py-4 rounded-2xl text-white shadow-2xl items-center gap-2"
      >
        <Award size={18} className="text-emerald-400" />
        Level Up: Green Guardian
      </motion.div>
    </section>
  );
}
