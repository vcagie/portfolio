import { profile } from '../data/profile'
import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 text-center sm:px-6">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="font-mono text-2xl font-semibold text-slate-100">Get in touch</h2>
          <p className="mx-auto mt-3 max-w-md text-[13px] text-slate-400">
            Open to new opportunities and collaborations. Feel free to reach out.
          </p>
        </FadeIn>
        <FadeIn
          delay={0.1}
          className="mt-8 inline-flex flex-col gap-3 rounded-lg border border-white/5 bg-term-panel px-8 py-6 font-mono text-[13px] text-slate-400"
        >
          <a href={`mailto:${profile.email}`} className="transition hover:text-term-green">
            {profile.email}
          </a>
          <span className="text-slate-500">{profile.phone}</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-term-green"
          >
            linkedin.com/in/vernando-cahyadi
          </a>
        </FadeIn>
        <footer className="mt-14 font-mono text-[10px] text-slate-600">
          © {new Date().getFullYear()} {profile.name}. Built with Vite, React & Tailwind.
        </footer>
      </div>
    </section>
  )
}
