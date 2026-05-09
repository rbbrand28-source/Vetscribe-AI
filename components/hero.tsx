"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./waitlist-form";
import BackgroundGlow from "./ui/background-glow";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <BackgroundGlow />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="glass rounded-full px-4 py-2 text-sm inline-block mb-6">
              AI For Veterinary Teams
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              AI-Powered{" "}
              <span className="gradient-text">
                Veterinary Documentation
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Reduce paperwork. Save hours. Focus on animals.
            </p>

            <div className="mt-10 max-w-md">
              <WaitlistForm />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="hidden lg:block"
        >
          <div className="glass rounded-3xl p-8">
            <div className="space-y-4">
              <div className="h-4 w-40 bg-white/10 rounded-full" />
              <div className="h-32 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 rounded-xl bg-white/5" />
                <div className="h-20 rounded-xl bg-white/5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
