import WaitlistForm from "./waitlist-form";

export default function FinalCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto glass rounded-[40px] p-12 text-center">
        <h2 className="text-5xl font-bold">
          Join the future of veterinary AI
        </h2>

        <p className="mt-6 text-white/70">
          Be among the first veterinary teams to access
          VetScribe AI.
        </p>

        <div className="max-w-md mx-auto mt-10">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
