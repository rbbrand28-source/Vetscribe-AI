"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WaitlistForm() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "" });
    }

    setLoading(false);
  }

  return (
    <div className="glass rounded-3xl p-6">
      {success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold">
            You're on the waitlist ✨
          </h3>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
          />

          <input
            required
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-purple-600 py-3 font-medium transition hover:scale-[1.02] hover:bg-purple-500"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </form>
      )}
    </div>
  );
}
