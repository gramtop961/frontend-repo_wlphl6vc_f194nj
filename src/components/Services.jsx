import { Cloud, Shield, Wrench, Server, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Kubernetes, CI/CD, IaC and scalable cloud architecture on AWS, GCP and Azure.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Hardening, zero-trust, SOC2/ISO 27001 readiness and continuous monitoring.',
  },
  {
    icon: Server,
    title: 'Managed Infrastructure',
    desc: '24/7 monitoring, SRE on-call, backups, patching and cost optimization.',
  },
  {
    icon: Wrench,
    title: 'On-demand Engineering',
    desc: 'Senior engineers for migrations, performance tuning and incident response.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-10 right-10 h-56 w-56 bg-pink-400/20 blur-3xl rounded-full" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6 text-pink-700 dark:text-pink-300">
          <Sparkles size={18} />
          <h2 className="text-2xl font-bold">What we do</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 hover:shadow-xl hover:shadow-pink-500/10 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 text-white flex items-center justify-center shadow-lg shadow-pink-500/30">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-700/90 dark:text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
