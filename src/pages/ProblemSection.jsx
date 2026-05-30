import { motion } from "framer-motion";
import { Trash2, AlertTriangle, BookOpen } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem" className="relative py-28 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          The Waste Problem We Can’t Ignore
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Every day, millions of tons of waste are improperly disposed of — not
          because people don’t care, but because they don’t know.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-md
              rounded-2xl
              p-6
              text-left
              shadow-lg
            "
          >
            <Trash2 className="text-red-400 mb-4" size={28} />

            <h3 className="text-xl font-semibold mb-2">Waste Pollution</h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Landfills are overflowing and plastic waste continues to damage
              ecosystems, oceans, and communities worldwide.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-md
              rounded-2xl
              p-6
              text-left
              shadow-lg
            "
          >
            <AlertTriangle className="text-yellow-400 mb-4" size={28} />

            <h3 className="text-xl font-semibold mb-2">
              Lack of Recycling Knowledge
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Most people don’t know what can or cannot be recycled, leading to
              contamination and wasted effort.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-md
              rounded-2xl
              p-6
              text-left
              shadow-lg
            "
          >
            <BookOpen className="text-emerald-400 mb-4" size={28} />

            <h3 className="text-xl font-semibold mb-2">No Guidance Systems</h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              There is no simple, real-time system that tells users how to
              properly dispose of waste in their environment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
