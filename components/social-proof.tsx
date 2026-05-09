export default function SocialProof() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            "10+ Hours Saved Weekly",
            "Built For Modern Clinics",
            "Enterprise Grade Security"
          ].map((item, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold">{item}</h3>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8">
            <p className="text-white/70">
              “VetScribe AI dramatically reduces our admin
              workload.”
            </p>

            <div className="mt-6">
              <h4 className="font-semibold">
                Dr. Sarah Mitchell
              </h4>
              <p className="text-sm text-white/50">
                Veterinary Director
              </p>
            </div>
          </div>

          <div className="glass rounded-3xl p-8">
            <p className="text-white/70">
              “The future of veterinary documentation.”
            </p>

            <div className="mt-6">
              <h4 className="font-semibold">
                Emily Carter
              </h4>
              <p className="text-sm text-white/50">
                Clinic Operations Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
