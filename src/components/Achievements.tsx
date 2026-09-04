import { achievements, hero } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="py-24 px-6 bg-gray-50" aria-label="Achievements and research">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Achievements & Research
        </h2>
        <div className="w-16 h-1.5 bg-yellow-400 rounded-full mb-10" />

        {achievements.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(251,191,36,0.2)] hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-200/40 transition-all duration-300 ease-in-out mb-6"
          >
            <h3 className="text-gray-900 font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}

        <a
          href={hero.cta.resume}
          className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-amber-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-200/40 transition-all duration-300 ease-in-out mt-2"
        >
          Download Full Resume
        </a>
      </div>
    </section>
  );
}
