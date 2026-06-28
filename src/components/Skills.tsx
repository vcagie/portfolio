import { skills } from '../data/profile'
import FadeIn from './FadeIn'

const byCategory = (names: string[]) => skills.filter((g) => names.includes(g.category)).flatMap((g) => g.items)

const layers = [
  { label: 'frontend', color: 'term-green', items: byCategory(['Frontend', 'Mobile']) },
  { label: 'backend', color: 'term-sky', items: byCategory(['Backend']) },
  { label: 'infra', color: 'term-amber', items: byCategory(['Databases', 'Tools']) },
]

const practices = skills.find((g) => g.category === 'Practices')

const tagClasses: Record<string, string> = {
  'term-green': 'text-term-green border-term-green/20 bg-term-green/[0.07]',
  'term-sky': 'text-term-sky border-term-sky/20 bg-term-sky/[0.07]',
  'term-amber': 'text-term-amber border-term-amber/20 bg-term-amber/[0.07]',
}

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="text-center font-mono text-2xl font-semibold text-slate-100">Skills</h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 rounded-lg border border-white/5 bg-term-panel p-6 sm:p-8">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-wide text-slate-500">
            // skills — grouped by layer
          </p>
          <div className="flex flex-col gap-4">
            {layers.map((layer) => (
              <div key={layer.label} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <span className="font-mono text-[11px] text-slate-500 sm:w-20 sm:flex-shrink-0">
                  {layer.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-sm border px-2.5 py-1 font-mono text-[11px] ${tagClasses[layer.color]}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {practices && (
          <FadeIn delay={0.2} className="mt-6 text-center">
            <p className="font-mono text-[10px] uppercase tracking-wide text-slate-600">practices</p>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              {practices.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-slate-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
