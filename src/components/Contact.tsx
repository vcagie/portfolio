import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 text-center">
      <h2 className="text-3xl font-bold text-white">Get in touch</h2>
      <p className="mx-auto mt-4 max-w-md text-slate-300">
        Open to new opportunities and collaborations. Feel free to reach out.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 text-slate-300">
        <a href={`mailto:${profile.email}`} className="hover:text-sky-400">
          {profile.email}
        </a>
        <span>{profile.phone}</span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-400">
          linkedin.com/in/vernando-cahyadi
        </a>
      </div>
      <footer className="mt-16 text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with Vite, React & Tailwind.
      </footer>
    </section>
  )
}
