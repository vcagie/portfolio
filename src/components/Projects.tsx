import { motion } from 'framer-motion'
import { projects } from '../data/profile'
import FadeIn from './FadeIn'

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="text-center font-mono text-2xl font-semibold text-slate-100">Projects</h2>
        </FadeIn>

        <div className="mt-10 flex flex-col gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="block rounded-lg border border-white/5 bg-term-panel p-6 transition hover:border-term-green/30 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-mono text-base font-semibold text-slate-100">{project.name}</h3>
                <span className="font-mono text-[11px] text-term-green">live demo ↗</span>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-term-sky/20 bg-term-sky/[0.07] px-2 py-0.5 font-mono text-[10.5px] text-term-sky"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <FadeIn
          delay={0.1 * projects.length + 0.1}
          className="mt-5 rounded-lg border border-dashed border-white/10 bg-term-panel/50 p-6 text-center"
        >
          <p className="font-mono text-[11px] text-slate-500">// more coming soon</p>
        </FadeIn>
      </div>
    </section>
  )
}
