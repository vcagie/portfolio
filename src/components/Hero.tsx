import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const stats = [
  { label: 'yrs exp', value: '4+' },
  { label: 'companies', value: '3' },
  { label: 'current role', value: 'PIC' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-4 pt-24 pb-16 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl overflow-hidden rounded-lg shadow-2xl shadow-black/60"
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 bg-term-chrome px-4 py-2.5 border-b border-white/5">
          <span className="h-3 w-3 flex-shrink-0 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 flex-shrink-0 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 flex-shrink-0 rounded-full bg-[#28c840]" />
          <span className="flex-1 truncate text-center font-mono text-[11px] text-white/25">
            ~/portfolio/engineer.config.ts
          </span>
        </div>

        <div
          className="flex flex-col bg-term-bg sm:flex-row"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(74,222,128,0.07) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        >
          {/* code editor */}
          <div className="border-b border-white/5 px-5 py-6 font-mono text-[12px] leading-relaxed sm:w-1/2 sm:border-b-0 sm:border-r">
            <div className="text-term-green">// engineer.config.ts</div>
            <div className="h-1.5" />
            <div>
              <span className="text-term-purple">export const</span>{' '}
              <span className="text-term-sky">engineer</span> <span className="text-slate-300">= {'{'}</span>
            </div>
            <div className="pl-4">
              <span className="text-term-sky">name</span>
              <span className="text-slate-400">: </span>
              <span className="text-term-amber">"{profile.name}"</span>
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4">
              <span className="text-term-sky">role</span>
              <span className="text-slate-400">: </span>
              <span className="text-term-amber">"Software Engineer"</span>
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4">
              <span className="text-term-sky">yoe</span>
              <span className="text-slate-400">: </span>
              <span className="text-term-green">4</span>
              <span className="text-slate-500"> // years</span>
            </div>
            <div className="pl-4">
              <span className="text-term-sky">stack</span>
              <span className="text-slate-400">: {'{'}</span>
            </div>
            <div className="pl-8">
              <span className="text-term-sky">fe</span>
              <span className="text-slate-400">: </span>
              <span className="text-term-amber">"React + TS"</span>
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-8">
              <span className="text-term-sky">be</span>
              <span className="text-slate-400">: </span>
              <span className="text-term-amber">"Spring / .NET"</span>
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4">
              <span className="text-slate-400">{'},'}</span>
            </div>
            <div className="pl-4">
              <span className="text-term-sky">focus</span>
              <span className="text-slate-400">: </span>
              <span className="text-term-amber">"Logistics Platforms"</span>
              <span className="text-slate-400">,</span>
            </div>
            <div className="text-slate-300">{'}'}</div>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="text-term-green">$</span>
              <span
                className="inline-block h-3.5 w-[7px] bg-term-green"
                style={{ animation: 'blink 1.1s ease-in-out infinite' }}
              />
            </div>
          </div>

          {/* bio */}
          <div className="flex flex-col justify-center px-5 py-7 sm:flex-1 sm:px-7">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-term-green">
              software engineer · indonesia
            </p>
            <h1 className="mb-3 font-mono text-3xl font-semibold leading-tight text-slate-100 sm:text-[34px]">
              {profile.name}
            </h1>
            <p className="mb-5 text-[13px] leading-relaxed text-slate-400">{profile.summary}</p>

            <div className="mb-5 flex gap-6 border-b border-white/5 pb-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-xl font-medium leading-none text-term-green">{stat.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wide text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="#contact"
                className="rounded-sm border border-term-green px-4 py-2 font-mono text-xs text-term-green transition hover:bg-term-green/10"
              >
                $ contact
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-white/10 px-4 py-2 font-mono text-xs text-slate-500 transition hover:border-white/20 hover:text-slate-300"
              >
                ./cv.pdf
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
