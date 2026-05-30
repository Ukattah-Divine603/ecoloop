import { motion } from "framer-motion";
import { CheckCircle, Recycle, Leaf, Award } from "lucide-react";

export default function AIDemo() {
  return (
    <section id="ai-demo" className="py-32 px-6 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">See AI In Action</h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            EcoLoop analyzes waste in seconds, helping users recycle correctly
            while earning rewards.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="
              relative
              bg-white/5
              border border-white/10
              rounded-3xl
              overflow-hidden
              backdrop-blur-md
            "
          >
            {/* Waste Image */}
            <img
              src="/plastic-bottle.jpg"
              alt="Plastic Bottle"
              className="
                w-full
                h-[500px]
                object-cover
                brightness-75
              "
            />

            {/* AI Vision Badge */}
            <motion.div
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                absolute
                top-6
                left-1/2
                -translate-x-1/2
                bg-black/70
                backdrop-blur-md
                px-4 py-2
                rounded-full
                text-sm
                text-emerald-400
                border border-emerald-500/20
                z-20
              "
            >
              AI Vision Active
            </motion.div>

            {/* Scanner Group */}
            <motion.div
              animate={{
                top: ["-30%", "120%", "-30%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-0
                w-full
                pointer-events-none
                z-10
              "
            >
              {/* Glow Area */}
              <div
                className="
                  h-24
                  bg-gradient-to-b
                  from-emerald-500/50
                  via-emerald-400/20
                  to-transparent
                "
              />

              {/* Scan Beam */}
              <div
                className="
                  h-[2px]
                  bg-emerald-400
                  shadow-[0_0_30px_#4ade80]
                "
              />
            </motion.div>

            {/* Scanner Corners */}

            <div
              className="
                absolute
                top-4
                left-4
                w-10
                h-10
                border-l-2
                border-t-2
                border-emerald-400
                z-20
              "
            />

            <div
              className="
                absolute
                top-4
                right-4
                w-10
                h-10
                border-r-2
                border-t-2
                border-emerald-400
                z-20
              "
            />

            <div
              className="
                absolute
                bottom-4
                left-4
                w-10
                h-10
                border-l-2
                border-b-2
                border-emerald-400
                z-20
              "
            />

            <div
              className="
                absolute
                bottom-4
                right-4
                w-10
                h-10
                border-r-2
                border-b-2
                border-emerald-400
                z-20
              "
            />

            {/* Detection Badge */}
            <div
              className="
                absolute
                bottom-6
                left-6
                bg-black/70
                backdrop-blur-md
                border border-white/10
                rounded-xl
                px-4
                py-3
                z-20
              "
            >
              <div className="flex items-center gap-2">
                <Recycle size={18} className="text-emerald-400" />

                <span className="text-sm">PET Plastic Detected</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur-md
              relative
            "
          >
            {/* Floating Eco Points */}
            <motion.div
              animate={{
                y: [-10, -40],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="
                absolute
                top-6
                right-6
                text-emerald-400
                font-bold
              "
            >
              +2 Eco Points
            </motion.div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="text-emerald-400" size={24} />

              <h3 className="text-xl font-semibold">AI Analysis Complete</h3>
            </div>

            {/* Results */}
            <div className="space-y-5">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Material</span>

                <span className="font-medium">PET Plastic</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Recyclable</span>

                <span className="text-emerald-400 font-medium">Yes</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Environmental Impact</span>

                <span className="text-orange-400 font-medium">High</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Decomposition Time</span>

                <span className="font-medium">450 Years</span>
              </div>
            </div>

            {/* Rewards */}
            <div
              className="
                mt-8
                bg-emerald-500/10
                border border-emerald-500/20
                rounded-2xl
                p-5
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="text-emerald-400" size={20} />

                <span className="font-medium">+2 Eco Points Earned</span>
              </div>

              <div className="flex items-center gap-3">
                <Award className="text-yellow-400" size={20} />

                <span className="font-medium">
                  Badge Unlocked: Recycling Rookie
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
