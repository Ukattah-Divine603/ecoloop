import { motion } from "framer-motion";
import { Camera, Brain, Trophy } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          How EcoLoop Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Three simple steps between waste and impact.
        </motion.p>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-md
              rounded-2xl
              p-8
              text-center
              shadow-lg
            "
          >
            <div className="flex justify-center mb-4">
              <Camera className="text-emerald-400" size={32} />
            </div>

            <h3 className="text-xl font-semibold mb-2">Scan Waste</h3>

            <p className="text-gray-400 text-sm">
              Upload or capture an image of any waste item using your device.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-md
              rounded-2xl
              p-8
              text-center
              shadow-lg
            "
          >
            <div className="flex justify-center mb-4">
              <Brain className="text-yellow-400" size={32} />
            </div>

            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>

            <p className="text-gray-400 text-sm">
              Our AI identifies the material, environmental impact, and disposal
              method.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-md
              rounded-2xl
              p-8
              text-center
              shadow-lg
            "
          >
            <div className="flex justify-center mb-4">
              <Trophy className="text-emerald-400" size={32} />
            </div>

            <h3 className="text-xl font-semibold mb-2">Earn Eco Points</h3>

            <p className="text-gray-400 text-sm">
              Get rewarded with points, badges, and progress toward higher eco
              levels.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
