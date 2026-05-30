import { motion } from "framer-motion";
import { Recycle, Trees, Users, Globe } from "lucide-react";
import CountUp from "/src/components/CountUp.jsx";
import Sparkline from "/src/components/Sparkline.jsx";

export default function Impact() {
  const stats = [
    {
      icon: Recycle,
      value: "12,450+",
      label: "Waste Items Scanned",
      trend: [10, 20, 35, 50, 80, 120],
    },
    {
      icon: Trees,
      value: "2.4 Tons",
      label: "CO₂ Emissions Reduced",
      trend: [5, 10, 18, 30, 45, 60],
    },
    {
      icon: Users,
      value: "1,850+",
      label: "Active EcoLoop Users",
      trend: [50, 120, 300, 600, 1200, 1850],
    },
    {
      icon: Globe,
      value: "92%",
      label: "Recycling Success Rate",
      trend: [60, 65, 70, 78, 85, 92],
    },
  ];

  return (
    <section id="impact" className="py-32 px-6 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Creating Real Impact
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Every scan contributes to a cleaner planet. We’re not just tracking
            waste — we’re reducing it.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""));

            const suffix = stat.value.includes("+")
              ? "+"
              : stat.value.includes("Tons")
                ? " Tons"
                : "";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  bg-white/5
                  border border-white/10
                  rounded-3xl
                  p-8
                  backdrop-blur-md
                  relative
                  overflow-hidden
                "
              >
                {/* ICON */}
                <Icon className="text-emerald-400 mb-5" size={36} />

                {/* NUMBER */}
                <h3 className="text-3xl font-bold mb-2">
                  <CountUp end={numericValue} />
                  {suffix}
                </h3>

                {/* LABEL */}
                <p className="text-gray-400">{stat.label}</p>

                {/* SPARKLINE */}
                <div className="mt-4 opacity-90">
                  <Sparkline data={stat.trend} />
                </div>

                {/* subtle glow effect */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-tr
                    from-emerald-500/5
                    to-transparent
                    pointer-events-none
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* IMPACT HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-16
            bg-gradient-to-r
            from-emerald-500/10
            to-green-500/10
            border border-emerald-500/20
            rounded-3xl
            p-10
            text-center
          "
        >
          <h3 className="text-3xl font-bold mb-4">Every Scan Matters</h3>

          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One small action creates long-term environmental change. EcoLoop
            turns everyday waste decisions into measurable global impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
