import Image from "next/image";
import { skills } from "@/lib/data";

function slugify(skill: string) {
  return skill
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const allSkills = [
  ...skills.languages,
  ...skills.dataAi,
  ...skills.tools,
  ...skills.softSkills,
];

// Alternating vertical offsets + tilts give the row a woven, rope-like flow
// rather than a rigid grid. Defined as literal Tailwind classes so the
// JIT compiler can pick them up (dynamic arbitrary values would not).
const weavePattern = [
  { y: "translate-y-0", rotate: "rotate-0" },
  { y: "translate-y-5", rotate: "-rotate-3" },
  { y: "translate-y-2", rotate: "rotate-2" },
  { y: "translate-y-7", rotate: "-rotate-2" },
  { y: "translate-y-1", rotate: "rotate-3" },
  { y: "translate-y-6", rotate: "rotate-0" },
  { y: "translate-y-3", rotate: "-rotate-3" },
  { y: "translate-y-0", rotate: "rotate-2" },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-24 px-6 bg-white" aria-label="Skills">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
        <div className="w-16 h-1.5 bg-yellow-400 rounded-full mb-16" />

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-10">
          {allSkills.map((skill, i) => {
            const { y, rotate } = weavePattern[i % weavePattern.length];
            return (
              <div key={skill} className={`${y} ${rotate}`}>
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-yellow-100/50 hover:border-yellow-300 hover:-translate-y-1 transition-all duration-300 ease-in-out flex items-center justify-center overflow-hidden p-3"
                  title={skill}
                >
                  <Image
                    src={`/images/skills/${slugify(skill)}-logo.png`}
                    alt={skill}
                    width={72}
                    height={72}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
