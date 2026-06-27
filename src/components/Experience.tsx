import { education, experience, certifications } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <h2 className="text-center text-3xl font-bold text-white">Experience</h2>
      <div className="mx-auto mt-10 max-w-3xl space-y-10">
        {experience.map((job) => (
          <div key={job.company + job.period} className="border-l-2 border-slate-800 pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{job.role}</h3>
              <span className="text-sm text-slate-400">{job.period}</span>
            </div>
            <p className="text-sm font-medium text-sky-400">{job.company}</p>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-slate-300">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-20 text-center text-3xl font-bold text-white">Education & Certifications</h2>
      <div className="mx-auto mt-10 max-w-3xl space-y-6">
        {education.map((edu) => (
          <div key={edu.school} className="border-l-2 border-slate-800 pl-6">
            <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
            <p className="text-sm text-sky-400">{edu.school}</p>
            <p className="text-sm text-slate-400">{edu.period}</p>
          </div>
        ))}
        {certifications.map((cert) => (
          <div key={cert.name} className="border-l-2 border-slate-800 pl-6">
            <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
            <p className="text-sm text-slate-400">{cert.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
