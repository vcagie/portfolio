import FadeIn from './FadeIn'

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="text-center font-mono text-2xl font-semibold text-slate-100">Projects</h2>
        </FadeIn>
        <FadeIn
          delay={0.1}
          className="mt-10 rounded-lg border border-dashed border-white/10 bg-term-panel p-8 text-center sm:p-10"
        >
          <p className="font-mono text-[11px] text-slate-500">// TODO</p>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-400">
            Personal and side projects are coming soon. This portfolio site is itself the first one —
            more will be added here as they're built.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
