import {
  Mic,
  FileText,
  Brain,
  LayoutTemplate,
  Laptop,
  ShieldCheck
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice-to-Medical Notes"
  },
  {
    icon: FileText,
    title: "SOAP Note Automation"
  },
  {
    icon: Brain,
    title: "AI Transcription"
  },
  {
    icon: LayoutTemplate,
    title: "Smart Veterinary Templates"
  },
  {
    icon: Laptop,
    title: "Multi-device Support"
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-Ready Infrastructure"
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Built for modern veterinary teams
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-8 hover:-translate-y-1 transition"
            >
              <feature.icon className="h-10 w-10 text-purple-400 mb-6" />

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
