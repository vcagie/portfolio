import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-800 text-3xl font-semibold text-slate-300 ring-2 ring-slate-700">
        VC
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">{profile.name}</h1>
        <p className="mt-2 text-lg text-sky-400">{profile.title}</p>
        <p className="mt-1 text-sm text-slate-400">{profile.location}</p>
      </div>
      <p className="max-w-2xl text-slate-300">{profile.summary}</p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className="rounded-full bg-sky-500 px-6 py-2 font-medium text-white transition hover:bg-sky-400"
        >
          Get in touch
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-600 px-6 py-2 font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
