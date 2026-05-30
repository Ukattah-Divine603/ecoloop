import { motion } from "framer-motion";
import { Award, Trophy, Leaf, Medal, Crown } from "lucide-react";

export default function Gamification() {
  return (
    <section id="gamification" className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Sustainability Made Rewarding
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Every scan contributes to a cleaner world and helps you level up
            your environmental impact.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEVEL CARD */}
          <motion.div
            whileHover={{ y: -5 }}
            className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur-md
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="text-emerald-400" size={28} />

              <h3 className="text-2xl font-semibold">Eco Level Progress</h3>
            </div>

            <div className="flex justify-between mb-3">
              <span>Green Explorer</span>
              <span>70 / 100 XP</span>
            </div>

            <div
              className="
                h-4
                bg-white/10
                rounded-full
                overflow-hidden
              "
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="
                  h-full
                  bg-emerald-400
                "
              />
            </div>

            <p className="mt-4 text-gray-400">
              30 XP away from becoming a
              <span className="text-emerald-400"> Green Guardian</span>
            </p>
          </motion.div>

          {/* LEADERBOARD */}
          <motion.div
            whileHover={{ y: -5 }}
            className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur-md
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <Crown className="text-yellow-400" size={28} />

              <h3 className="text-2xl font-semibold">Community Leaderboard</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>🥇 Sarah</span>
                <span>1,250 XP</span>
              </div>

              <div className="flex justify-between">
                <span>🥈 David</span>
                <span>1,120 XP</span>
              </div>

              <div className="flex justify-between">
                <span>🥉 Emma</span>
                <span>1,050 XP</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Badges */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Unlock Eco Badges
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Badge 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                text-center
              "
            >
              <Award className="mx-auto text-yellow-400" size={32} />

              <h4 className="mt-3">Recycling Rookie</h4>
            </motion.div>

            {/* Badge 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                text-center
              "
            >
              <Leaf className="mx-auto text-emerald-400" size={32} />

              <h4 className="mt-3">Organic Hero</h4>
            </motion.div>

            {/* Badge 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                text-center
              "
            >
              <Medal className="mx-auto text-blue-400" size={32} />

              <h4 className="mt-3">Eco Champion</h4>
            </motion.div>

            {/* Badge 4 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                text-center
              "
            >
              <Trophy className="mx-auto text-orange-400" size={32} />

              <h4 className="mt-3">Planet Protector</h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
