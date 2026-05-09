export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-xl font-bold">
          VetScribe AI
        </h2>

        <a
          href="mailto:rbbrand28@gmail.com"
          className="text-white/60 hover:text-white transition"
        >
          rbbrand28@gmail.com
        </a>
      </div>
    </footer>
  );
}
