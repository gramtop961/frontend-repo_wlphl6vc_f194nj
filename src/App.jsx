import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors">
      {/* Background accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-x-0 top-[-10%] mx-auto h-[350px] max-w-[900px] bg-pink-500/10 blur-3xl rounded-full" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <CTA />

      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} PinkTech Services. All rights reserved.</p>
          <div className="text-sm text-slate-600 dark:text-slate-400">Built for performance • Secured by design</div>
        </div>
      </footer>
    </div>
  )
}

export default App
