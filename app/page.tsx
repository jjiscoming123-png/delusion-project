"use client"

import { useEffect, useRef, useState } from "react"
import Logo from "@/components/Logo"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--color-background)]/95 backdrop-blur-xl border-b border-[var(--color-accent)]/10 py-4" : "py-6"}`}>
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <Logo size={28} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="text-[13px] font-black tracking-[0.2em] uppercase text-[var(--color-accent)]">DELUSION</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-[12px] text-[var(--color-muted)] font-bold tracking-widest uppercase">
          <a href="#truth" className="hover:text-[var(--color-accent)] transition-colors duration-300">Truth</a>
          <a href="#doctrine" className="hover:text-[var(--color-accent)] transition-colors duration-300">Doctrine</a>
          <a href="#prophecy" className="hover:text-[var(--color-accent)] transition-colors duration-300">Prophecy</a>
        </div>
        <a href="https://x.com/DELUSION_Official" target="_blank" rel="noopener noreferrer"
          className="text-[12px] font-black tracking-[0.15em] uppercase bg-[var(--color-accent)] text-black px-6 py-2.5 hover:bg-[var(--color-accent-dim)] transition-colors duration-200">
          FOLLOW
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pb-12 md:pb-20 overflow-hidden">
      {/* Massive gold glow */}
      <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full bg-[var(--color-accent)] blur-[400px] animate-pulse-gold pointer-events-none" />

      {/* Diagonal decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[var(--color-accent)]/20 via-[var(--color-accent)]/5 to-transparent" style={{transform: 'translateX(-15vw)'}} />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[var(--color-accent)]/10 via-transparent to-transparent" style={{transform: 'translateX(-30vw)'}} />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8 w-full">
        <div className="label animate-fade-up delay-1 mb-4 text-[var(--color-accent)]">The Foundation of Every Fortune</div>
        <h1 className="display-xl animate-fade-up delay-2 mb-6 gold-glow">
          <span className="block text-[var(--color-accent)]">THEY</span>
          <span className="block text-white/10">CALLED</span>
          <span className="block text-white/10">IT</span>
          <span className="block text-[var(--color-accent)]">DELUSION.</span>
        </h1>
        <div className="flex items-end justify-between flex-wrap gap-8">
          <div className="max-w-md animate-fade-up delay-3">
            <p className="body-lg text-[var(--color-muted)]">
              They were right. Every 100x starts with a belief so early,
              so isolated, so apparently irrational — that everyone who hears
              it first calls it by that name.
            </p>
          </div>
          <div className="animate-fade-up delay-4">
            <a href="#truth"
              className="block text-sm font-black tracking-[0.2em] uppercase text-black bg-[var(--color-accent)] px-8 py-4 hover:bg-[var(--color-accent-dim)] transition-colors duration-200">
              READ THE TRUTH →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Truth() {
  const { ref, visible } = useInView()
  return (
    <section id="truth" ref={ref} className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />
      <div className={`max-w-[1300px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="label mb-6">The Truth</div>
            <h2 className="display-lg text-[var(--color-accent)]">
              DELUSION<br />IS THE<br />ENTRY.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8 pt-2">
            <p className="body-lg">
              Every generation has a moment where the crowd is certain and
              the visionary is called delusional. The earth is flat. The car
              will never replace the horse. Nobody will pay for digital art.
              Nobody will pay for internet magic coins.
            </p>
            <p className="body-lg">
              DELUSION is not a mistake. It is a technology. It is how
              the human mind reaches past the consensus of the present
              and grabs the reality of the future before it arrives.
            </p>
            <p className="body-lg">
              The ones who bought early were not smarter. They were more
              delusional. And in crypto, that&apos;s the only edge that matters.
            </p>
            <div className="accent-line mt-4" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Doctrine() {
  const { ref, visible } = useInView()
  const items = [
    { num: "01", title: "BELIEVE BEFORE PROOF", text: "Proof kills the trade. By the time you have evidence, so does everyone else. The entry is always in the dark, in the unverified, in the delusional." },
    { num: "02", title: "SCALE YOUR CONVICTION", text: "Small believers get small returns. The market rewards those who are most wrong in the most spectacular direction. Delusion is leverage." },
    { num: "03", title: "IGNORE THE CONSENSUS", text: "Consensus is the past organized into opinion. Every person telling you it won't work is giving you the buy signal." },
    { num: "04", title: "HOLD THE VISION LONGER", text: "Most people give up one day before the breakthrough. The delusional hold longer because they cannot imagine the alternative being true." },
  ]
  return (
    <section id="doctrine" ref={ref} className="py-28 md:py-40 bg-[var(--color-surface)]">
      <div className={`max-w-[1300px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="label mb-4">The Doctrine</div>
        <h2 className="display-lg mb-20 text-white">
          FOUR<br /><span className="text-[var(--color-accent)]">COMMANDMENTS.</span>
        </h2>
        <div>
          {items.map((item, i) => (
            <div key={i} className="group border-t border-[var(--color-accent)]/10 py-10 md:py-14 hover:border-[var(--color-accent)]/30 transition-colors duration-500">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1 text-[var(--color-accent)] text-xs font-black tracking-widest pt-1">{item.num}</div>
                <h3 className="md:col-span-4 display-md font-black text-white/70 group-hover:text-[var(--color-accent)] transition-colors duration-500">{item.title}</h3>
                <p className="md:col-span-5 md:col-start-7 body-lg">{item.text}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-[var(--color-accent)]/10" />
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  return (
    <div className="py-14 md:py-20 overflow-hidden select-none bg-[var(--color-accent)]">
      <div className="flex whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 animate-[marquee_20s_linear_infinite] items-center gap-0">
            {["THEY CALLED IT DELUSION. ", "THEY WERE RIGHT. ", "THEY CALLED IT DELUSION. ", "THEY WERE RIGHT. ", "THEY CALLED IT DELUSION. ", "THEY WERE RIGHT. "].map((t, i) => (
              <span key={i} className="text-2xl md:text-3xl font-black tracking-wider uppercase text-black px-8">{t}</span>
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  )
}

function Prophecy() {
  const { ref, visible } = useInView()
  return (
    <section id="prophecy" ref={ref} className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />
      <div className={`max-w-[1300px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-3xl">
          <div className="label mb-6">The Prophecy</div>
          <h2 className="display-lg mb-10">
            THE DELUSIONAL<br />WILL<br /><span className="text-[var(--color-accent)]">INHERIT.</span>
          </h2>
          <div className="space-y-8">
            <p className="body-lg">Not the earth. Not the meek. The delusional. The ones who looked at a blank canvas and saw a billion-dollar market. The ones who bought at the peak because they could see a higher peak beyond it.</p>
            <p className="body-lg">DELUSION doesn&apos;t promise returns. It promises belonging — to the class of people who believed before the proof arrived. That class has always, eventually, been proven right. Or at least proven interesting.</p>
          </div>
          <div className="accent-line mt-12" />
        </div>
      </div>
    </section>
  )
}

function Join() {
  const { ref, visible } = useInView()
  return (
    <section ref={ref} className="py-28 md:py-40 bg-[var(--color-surface)]">
      <div className={`max-w-[1300px] mx-auto px-6 lg:px-8 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="display-lg mb-4">STILL<br /><span className="text-[var(--color-accent)]">DELUSIONAL?</span></h2>
        <p className="body-lg max-w-md mx-auto mb-12">Good. The sane ones already left. You&apos;re exactly who we&apos;re looking for.</p>
        <a href="https://x.com/DELUSION_Official" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-sm font-black tracking-[0.2em] uppercase text-black bg-[var(--color-accent)] px-10 py-5 hover:bg-[var(--color-accent-dim)] transition-colors duration-200">
          <span>𝕏</span><span>FOLLOW ON X</span>
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-accent)]/10 py-8 px-6 lg:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo size={20} />
          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[var(--color-accent)]">DELUSION</span>
        </div>
        <p className="text-xs text-[var(--color-muted)] font-medium">© 2026 DELUSION. Not financial advice. The delusion is the point.</p>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main className="noise">
      <Nav /><Hero /><Truth /><Doctrine /><Marquee /><Prophecy /><Join /><Footer />
    </main>
  )
}
