import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/[0.06] to-transparent" />
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute top-10 right-0 h-[700px] w-[700px] opacity-90">
          <Spline scene="https://prod.spline.design/4lyTnLJyQd-43uh0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-white/70 dark:bg-white/5 px-3 py-1 text-sm text-pink-700 dark:text-pink-300 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-pink-500" />
                IT Service Provider
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Pink-first solutions for modern teams
              </h1>
              <p className="mt-6 text-lg text-slate-700/90 dark:text-slate-300/90 max-w-xl">
                We design, build and manage reliable cloud, security and DevOps infrastructures. Fast, scalable and delightfully supported.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-pink-600 text-white px-5 py-3 font-semibold shadow-lg shadow-pink-600/30 hover:bg-pink-500 transition">
                  Get a quote
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-pink-500/40 text-pink-700 dark:text-pink-300 px-5 py-3 font-semibold hover:bg-pink-500/10 transition">
                  Explore services
                </a>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300/80">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-500" /> 24/7 Support</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-500" /> SLA-backed</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-500" /> ISO-ready</div>
              </div>
            </motion.div>
          </div>
          <div className="h-[520px] lg:h-[640px]" />
        </div>
      </div>
    </section>
  )
}
