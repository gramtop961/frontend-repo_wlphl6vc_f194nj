import { Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Ready to modernize your IT?
        </h2>
        <p className="mt-4 text-slate-700/90 dark:text-slate-300/90">
          Tell us about your goals and we’ll tailor a plan that fits your team and budget.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-3 gap-3">
          <input type="email" required placeholder="Your email" className="sm:col-span-2 w-full rounded-lg border border-pink-500/40 bg-white/80 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500" />
          <button className="inline-flex items-center justify-center rounded-lg bg-pink-600 text-white px-5 py-3 font-semibold shadow-lg shadow-pink-600/30 hover:bg-pink-500 transition">
            <Mail className="mr-2" size={18} />
            Request callback
          </button>
        </form>
        <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">We respond within 1 business day.</p>
      </div>
    </section>
  )
}
