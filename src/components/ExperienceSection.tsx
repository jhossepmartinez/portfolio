import type { Experience } from "../types";

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group border-l border-neutral-800 pl-6 py-6 hover:border-neutral-600 transition-colors">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
        <div>
          <h3 className="text-neutral-100 font-medium">{experience.role}</h3>
          <p className="text-neutral-500 text-sm">{experience.company}</p>
        </div>
        <span className="text-neutral-600 text-sm mt-1 md:mt-0">
          {experience.period}
        </span>
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs text-neutral-500 bg-neutral-900 px-2.5 py-1 border border-neutral-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
          Experience
        </h2>
        <p className="text-neutral-500 text-sm mb-12">
          Professional journey and roles
        </p>
        <div className="space-y-2">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
