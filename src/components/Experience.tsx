import { motion } from 'framer-motion'
import { education, experience, certifications } from '../data/profile'
import FadeIn from './FadeIn'

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="text-center font-mono text-2xl font-semibold text-slate-100">Experience</h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 rounded-lg border border-white/5 bg-term-panel p-6 sm:p-8">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-wide text-slate-500">
            $ git log --oneline --graph
          </p>
          <div className="flex flex-col">
            {experience.map((job, i) => {
              const isCurrent = i === 0
              const isLast = i === experience.length - 1
              return (
                <motion.div
                  key={job.company + job.period}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="flex items-stretch"
                >
                  <div className="flex w-5 flex-shrink-0 flex-col items-center">
                    <span
                      className={
                        isCurrent
                          ? 'mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-term-green shadow-[0_0_8px_rgba(74,222,128,0.55)]'
                          : 'mt-1 h-2 w-2 flex-shrink-0 rounded-full border-[1.5px] border-slate-600 bg-slate-800'
                      }
                    />
                    {!isLast && <span className="mt-1 w-px flex-1 bg-white/10" />}
                  </div>
                  <div className={`pb-6 pl-3 ${isLast ? 'pb-0' : ''}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`font-mono text-[13px] font-medium ${
                          isCurrent ? 'text-slate-100' : 'text-slate-400'
                        }`}
                      >
                        {job.role}
                      </span>
                      {isCurrent && (
                        <span className="rounded-sm border border-term-purple/20 bg-term-purple/10 px-1.5 py-0.5 font-mono text-[9px] text-term-purple">
                          HEAD→main
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[11.5px] text-slate-500">
                      {job.company} · {job.period}
                    </p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[12px] leading-relaxed text-slate-500">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10 rounded-lg border border-white/5 bg-term-panel p-6 sm:p-8">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-wide text-slate-500">
            // education & certifications
          </p>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.school} className="border-l-2 border-white/10 pl-4">
                <p className="font-mono text-[13px] text-slate-100">{edu.degree}</p>
                <p className="mt-0.5 text-[11.5px] text-slate-500">
                  {edu.school} · {edu.period}
                </p>
              </div>
            ))}
            {certifications.map((cert) => (
              <div key={cert.name} className="border-l-2 border-white/10 pl-4">
                <p className="font-mono text-[13px] text-slate-100">{cert.name}</p>
                <p className="mt-0.5 text-[11.5px] text-slate-500">{cert.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
