import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50" aria-label="About me">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">About</h2>
        <div className="w-16 h-1.5 bg-yellow-400 rounded-full mb-10" />

        <p className="text-gray-600 leading-relaxed mb-8">{about.summary}</p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(251,191,36,0.2)] hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-200/40 transition-all duration-300 ease-in-out">
            <h3 className="text-sm font-semibold text-amber-600 mb-3 uppercase tracking-wide">
              Education
            </h3>
            <p className="text-gray-900 font-medium">
              {about.education.degree}
            </p>
            <p className="text-gray-600 text-sm mt-1">
              {about.education.institution}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Graduated: {about.education.graduationDate} · GPA:{" "}
              {about.education.gpa}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(251,191,36,0.2)] hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-200/40 transition-all duration-300 ease-in-out">
            <h3 className="text-sm font-semibold text-amber-600 mb-3 uppercase tracking-wide">
              Fun fact
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {about.funFact}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
