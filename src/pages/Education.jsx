import { motion } from "framer-motion";
import { BookOpen, Recycle, Leaf, AlertTriangle } from "lucide-react";

export default function Education() {
  const tips = [
    {
      icon: Recycle,
      title: "Sort Waste Correctly",
      text: "Separate plastics, metals, and organic waste before disposal to improve recycling efficiency.",
    },
    {
      icon: Leaf,
      title: "Compost Organic Waste",
      text: "Food scraps and plant waste can be turned into nutrient-rich compost instead of being dumped.",
    },
    {
      icon: AlertTriangle,
      title: "Avoid Contamination",
      text: "Dirty recyclables can ruin entire batches. Always rinse containers before recycling.",
    },
    {
      icon: BookOpen,
      title: "Learn Local Rules",
      text: "Recycling rules vary by region. EcoLoop helps you adapt to your local system.",
    },
  ];

  return (
    <section id="education" className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Learn. Act. Impact.
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Small habits create big environmental change. EcoLoop teaches you
            how to make every action count.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="
                  bg-white/5
                  border border-white/10
                  rounded-3xl
                  p-6
                  backdrop-blur-md
                "
              >
                <Icon className="text-emerald-400 mb-4" size={30} />

                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {tip.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
