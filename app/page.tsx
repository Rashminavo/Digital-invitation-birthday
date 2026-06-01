"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Camera, Check, ChevronDown, Clock, MapPin, MessageCircle, Navigation, Phone, Sparkles, Users, X } from "lucide-react";
import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";

const baby = {
  name: "Liam",
  shortName: "L",
  date: "2026-08-16T11:00:00+05:30",
  displayDate: "Sunday, August 16th 2026",
  time: "4:00 PM onwards",
  venue: "Raffles Banquets & Catering",
  address: "262 Kotte Rd, Nugegoda 10250",
  mapsQuery: "Raffles Banquets & Catering 262 Kotte Rd Nugegoda 10250"
};

const timeline = ["Guest Arrival", "Welcome Drinks", "Cake Cutting", "Lunch", "Family Photos", "Celebration Time"];
const milestones = ["Born", "First Smile", "First Crawl", "First Steps", "First Birthday"];
const gallery = [
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&w=900&q=80"
];

function PoloBear({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 420" className={className} role="img" aria-label="Elegant teddy bear in navy blazer">
      <defs>
        <linearGradient id="fur" x1="0" x2="1">
          <stop stopColor="#E6D7BD" />
          <stop offset="1" stopColor="#B99667" />
        </linearGradient>
        <linearGradient id="gold" x1="0" x2="1">
          <stop stopColor="#F1D78A" />
          <stop offset="1" stopColor="#C8A96B" />
        </linearGradient>
      </defs>
      <circle cx="104" cy="76" r="34" fill="url(#fur)" />
      <circle cx="216" cy="76" r="34" fill="url(#fur)" />
      <circle cx="160" cy="105" r="72" fill="url(#fur)" />
      <circle cx="135" cy="96" r="8" fill="#1E2A44" />
      <circle cx="185" cy="96" r="8" fill="#1E2A44" />
      <ellipse cx="160" cy="125" rx="26" ry="19" fill="#F7E6C8" />
      <path d="M148 122q12 13 24 0" stroke="#1E2A44" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M86 190q74-52 148 0v166H86z" fill="#1E2A44" />
      <path d="M118 181l42 112 42-112q-42-24-84 0z" fill="#FAF7F2" />
      <path d="M142 184h36l-18 38z" fill="url(#gold)" />
      <path d="M120 206l40 88 40-88" stroke="#C8A96B" strokeWidth="5" fill="none" />
      <circle cx="110" cy="238" r="7" fill="#C8A96B" />
      <circle cx="210" cy="238" r="7" fill="#C8A96B" />
      <path d="M86 213q-50 34-38 94 24 6 46-13zM234 213q50 34 38 94-24 6-46-13z" fill="#D9C7A3" />
      <path d="M103 356h48v44H98q-12-20 5-44zM169 356h48q17 24 5 44h-53z" fill="#B99667" />
    </svg>
  );
}

function SparkleField() {
  const dots = useMemo(() => Array.from({ length: 38 }, (_, i) => ({ id: i, left: (i * 37) % 100, top: (i * 61) % 100, delay: (i % 9) * 0.35 })), []);
  return <div className="pointer-events-none absolute inset-0 overflow-hidden">{dots.map((d) => <motion.span key={d.id} className="absolute h-1 w-1 rounded-full bg-[#C8A96B]" style={{ left: `${d.left}%`, top: `${d.top}%` }} animate={{ opacity: [0.15, 0.9, 0.15], y: [-8, 8, -8], scale: [1, 1.8, 1] }} transition={{ duration: 4, delay: d.delay, repeat: Infinity }} />)}</div>;
}

function GoldCorner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 86 86" className={className} aria-hidden="true">
      <path d="M12 74h42c12 0 20-8 20-20V12" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M20 74c0-14 9-22 23-22M74 20c-14 0-22 9-22 23" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 68c13-9 5-22 22-28M68 16c-9 13-22 5-28 22" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="22" cy="63" r="3" fill="currentColor" />
      <circle cx="63" cy="22" r="3" fill="currentColor" />
      <path d="M8 74h11M74 8v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlaidInvitationCard({ intro }: { intro: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 38, filter: "blur(20px)" }}
      animate={{ opacity: intro ? 0 : 1, scale: intro ? 0.88 : 1, y: intro ? 38 : 0, filter: intro ? "blur(20px)" : "blur(0px)" }}
      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[520px]"
    >
      <div className="absolute inset-0 translate-y-8 rounded-sm bg-[#1E2A44]/25 blur-2xl" />
      <div className="plaid-frame relative aspect-[5/7] border border-[#0A1020] p-[clamp(18px,5vw,34px)] shadow-[0_34px_80px_rgba(30,42,68,.38)]">
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden border border-[#C8A96B]/70 bg-[#07111F] px-7 py-8 text-center text-[#C8A96B] shadow-[inset_0_0_70px_rgba(0,0,0,.45)]">
          <div className="absolute inset-3 border border-[#C8A96B]/20" />
          <GoldCorner className="absolute left-2 top-2 h-16 w-16 text-[#C8A96B]/85" />
          <GoldCorner className="absolute right-2 top-2 h-16 w-16 rotate-90 text-[#C8A96B]/85" />
          <GoldCorner className="absolute bottom-2 right-2 h-16 w-16 rotate-180 text-[#C8A96B]/85" />
          <GoldCorner className="absolute bottom-2 left-2 h-16 w-16 -rotate-90 text-[#C8A96B]/85" />

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: intro ? 0 : 1, y: intro ? 12 : 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#D9C7A3]/75 sm:text-sm">
            Please join us to celebrate
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.86 }} animate={{ opacity: intro ? 0 : 1, scale: intro ? 0.86 : 1 }} transition={{ delay: 0.45, duration: 0.8 }} className="my-5 w-36 sm:w-44">
            <PoloBear />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, letterSpacing: "0.75em" }} animate={{ opacity: intro ? 0 : 1, letterSpacing: "0.32em" }} transition={{ delay: 0.65, duration: 1 }} className="font-display ml-[0.32em] text-4xl uppercase text-[#D9C7A3] sm:text-5xl">
            {baby.name}&apos;s
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: intro ? 0 : 1, y: intro ? 16 : 0 }} transition={{ delay: 0.85, duration: 0.85 }} className="font-display mt-4 text-3xl italic leading-tight text-[#C8A96B] sm:text-5xl">
            Beary First Birthday
          </motion.p>
          <motion.div initial={{ opacity: 0, scaleX: 0.4 }} animate={{ opacity: intro ? 0 : 1, scaleX: intro ? 0.4 : 1 }} transition={{ delay: 1.0, duration: 0.7 }} className="my-6 h-px w-44 bg-[#C8A96B]/50" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: intro ? 0 : 1 }} transition={{ delay: 1.15, duration: 0.75 }} className="font-display text-base uppercase tracking-[0.08em] text-[#D9C7A3]/90 sm:text-lg">
            {baby.displayDate}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: intro ? 0 : 1, y: intro ? 10 : 0 }} transition={{ delay: 1.3, duration: 0.75 }} className="mt-5 font-display text-lg leading-7 text-[#D9C7A3]/80 sm:text-xl">
            {baby.venue}<br />
            {baby.address}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

function Intro({ onDone }: { onDone: () => void }) {
  return (
    <motion.section className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F2]" exit={{ opacity: 0, filter: "blur(18px)", scale: 1.04 }} transition={{ duration: 1.1 }}>
      <SparkleField />
      <div className="relative z-10 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="mx-auto mb-8 grid h-24 w-24 place-items-center rounded-full border border-[#C8A96B]/60 text-[#C8A96B] shadow-[0_0_60px_rgba(200,169,107,.28)]">
          <span className="font-display text-4xl">{baby.shortName}</span>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="text-xs font-semibold uppercase tracking-[0.45em] text-[#C8A96B]">A first birthday celebration</motion.p>
        <motion.h1 initial={{ opacity: 0, filter: "blur(12px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ delay: 1.25, duration: 1.3 }} className="font-display mt-5 text-5xl text-[#1E2A44] sm:text-7xl">{baby.name}</motion.h1>
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.0, duration: 1 }} className="mx-auto mt-8 w-40 opacity-85"><PoloBear /></motion.div>
        <motion.button onClick={onDone} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="mt-8 rounded-full border border-[#C8A96B] bg-[#1E2A44] px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#FAF7F2] shadow-xl shadow-[#1E2A44]/20">Open Invitation</motion.button>
      </div>
    </motion.section>
  );
}

function Countdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const diff = Math.max(new Date(baby.date).getTime() - now, 0);
  const values = [
    ["Days", Math.floor(diff / 86400000)],
    ["Hours", Math.floor(diff / 3600000) % 24],
    ["Minutes", Math.floor(diff / 60000) % 60],
    ["Seconds", Math.floor(diff / 1000) % 60]
  ];
  return <Section title="Countdown">{values.map(([label, value]) => <motion.div key={label} whileHover={{ y: -6 }} className="soft-glow rounded-lg border border-[#C8A96B]/25 bg-white/80 p-5 text-center"><strong className="font-display block text-4xl text-[#1E2A44]">{String(value).padStart(2, "0")}</strong><span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A96B]">{label}</span></motion.div>)}</Section>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <motion.section initial={{ opacity: 0, y: 34, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.75 }} className="mx-auto w-full max-w-6xl px-5 py-16"><div className="gold-line mx-auto mb-5 h-px w-40" /><h2 className="font-display mb-9 text-center text-4xl text-[#1E2A44] sm:text-5xl">{title}</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{children}</div></motion.section>;
}

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const maps = `https://www.google.com/maps?q=${encodeURIComponent(baby.mapsQuery)}&output=embed`;

  async function submitRsvp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending your RSVP...");
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!scriptUrl) return setStatus("Add NEXT_PUBLIC_GOOGLE_SCRIPT_URL to enable RSVP submission.");
    const form = new FormData(event.currentTarget);
    await fetch(scriptUrl, { method: "POST", mode: "no-cors", body: form });
    event.currentTarget.reset();
    setStatus("Thank you. Your RSVP has been received.");
  }

  return (
    <main className="luxury-pattern min-h-screen overflow-hidden">
      <AnimatePresence>{intro && <Intro onDone={() => setIntro(false)} />}</AnimatePresence>
      <SparkleField />
      <section className="relative grid min-h-screen place-items-center overflow-hidden bg-[#F2EFE8] px-4 py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(200,169,107,.20),transparent_34%),linear-gradient(110deg,rgba(30,42,68,.06),transparent_45%)]" />
        <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_1px_1px,rgba(30,42,68,.12)_1px,transparent_0)] [background-size:18px_18px]" />
        <PlaidInvitationCard intro={intro} />
        <motion.div animate={{ opacity: intro ? 0 : 1 }} transition={{ delay: 1.35 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          <ChevronDown className="mx-auto animate-bounce text-[#C8A96B]" aria-label="Scroll down" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1E2A44]/55">Scroll</span>
        </motion.div>
        <div className="hidden">
          <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C8A96B]">You are cordially invited</p>
          <div className="mt-6 grid items-center gap-8 md:grid-cols-[1fr_1.2fr_1fr]">
            <div className="mx-auto aspect-[4/5] w-48 overflow-hidden rounded-lg border-4 border-[#D9C7A3] bg-[url('https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=700&q=80')] bg-cover bg-center shadow-2xl" aria-label="Baby photo frame" />
            <div>
              <PoloBear className="mx-auto mb-3 w-56" />
              <h1 className="font-display text-5xl text-[#1E2A44] sm:text-7xl">{baby.name}</h1>
              <p className="mt-3 text-xl font-semibold uppercase tracking-[0.25em] text-[#C8A96B]">Turning One</p>
              <p className="mt-5 text-[#1E2A44]/75">{baby.displayDate} · {baby.time}</p>
            </div>
            <div className="rounded-lg border border-[#C8A96B]/30 bg-white/60 p-5 text-left">
              <CalendarDays className="mb-4 text-[#C8A96B]" />
              <p className="font-display text-2xl">A little gentleman&apos;s first celebration.</p>
              <p className="mt-3 text-sm leading-6 text-[#1E2A44]/70">Cream linen, navy tailoring, soft gold light, and all the people who made year one beautiful.</p>
            </div>
          </div>
          <ChevronDown className="mx-auto mt-8 animate-bounce text-[#C8A96B]" aria-label="Scroll down" />
        </div>
      </section>

      <Countdown />
      <Section title="Celebration Timeline">{timeline.map((item, i) => <motion.div key={item} custom={i} whileHover={{ y: -5 }} className="rounded-lg border border-[#C8A96B]/25 bg-white/75 p-5"><Clock className="mb-4 text-[#C8A96B]" /><h3 className="font-display text-2xl">{item}</h3><p className="mt-2 text-sm text-[#1E2A44]/65">{i + 4}:00 PM</p></motion.div>)}</Section>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-[0.9fr_1.4fr]">
        <div className="soft-glow rounded-lg border border-[#C8A96B]/25 bg-white/80 p-7"><MapPin className="mb-4 text-[#C8A96B]" /><h2 className="font-display text-4xl">Venue</h2><p className="mt-4 font-semibold">{baby.venue}</p><p className="mt-2 text-sm leading-6 text-[#1E2A44]/70">{baby.address}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(baby.mapsQuery)}`} target="_blank" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1E2A44] px-5 py-3 text-sm font-semibold text-white"><Navigation size={16} /> Get Directions</a></div>
        <div className="map-frame h-80 overflow-hidden rounded-lg border border-[#C8A96B]/25"><iframe src={maps} title="Venue map" loading="lazy" /></div>
      </section>
      <Section title="Memory Lane">{milestones.map((m) => <div key={m} className="rounded-lg border border-[#C8A96B]/25 bg-[#1E2A44] p-5 text-[#FAF7F2]"><Sparkles className="mb-4 text-[#C8A96B]" /><h3 className="font-display text-2xl">{m}</h3></div>)}</Section>
      <Section title="Photo Gallery">{gallery.map((src, i) => <button key={src} onClick={() => setLightbox(src)} className="group aspect-[4/5] overflow-hidden rounded-lg border border-[#C8A96B]/25 bg-cover bg-center shadow-lg" style={{ backgroundImage: `url(${src})` }} aria-label={`Open baby photo ${i + 1}`}><span className="grid h-full place-items-center bg-[#1E2A44]/0 text-white opacity-0 transition group-hover:bg-[#1E2A44]/35 group-hover:opacity-100"><Camera /></span></button>)}</Section>
      <section className="mx-auto max-w-3xl px-5 py-16">
        <form onSubmit={submitRsvp} className="soft-glow rounded-lg border border-[#C8A96B]/25 bg-white/85 p-6 sm:p-9">
          <h2 className="font-display mb-7 text-center text-4xl">RSVP</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="name" label="Parent/Guest Name" icon={<Users size={16} />} />
            <Input name="phone" label="Phone Number" icon={<Phone size={16} />} />
            <Input name="guests" label="Number of Guests" type="number" icon={<Users size={16} />} />
            <select name="attending" className="rounded-lg border border-[#D9C7A3] bg-[#FAF7F2] p-4 text-sm" required><option value="">Attending?</option><option>Yes</option><option>No</option></select>
          </div>
          <textarea name="message" placeholder="Special Message" className="mt-4 min-h-32 w-full rounded-lg border border-[#D9C7A3] bg-[#FAF7F2] p-4 text-sm" />
          <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1E2A44] px-6 py-4 font-semibold text-white"><MessageCircle size={18} /> Send RSVP</button>
          {status && <p className="mt-4 text-center text-sm text-[#1E2A44]/70">{status}</p>}
        </form>
      </section>
      <footer className="bg-[#1E2A44] px-5 py-16 text-center text-[#FAF7F2]"><Check className="mx-auto mb-5 text-[#C8A96B]" /><h2 className="font-display text-4xl">Thank You</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/70">Your presence is the most beautiful gift as we celebrate one golden year of love.</p></footer>
      <AnimatePresence>{lightbox && <motion.button className="fixed inset-0 z-50 grid place-items-center bg-[#1E2A44]/90 p-5" onClick={() => setLightbox(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><X className="absolute right-6 top-6 text-white" /><Image src={lightbox} alt="Baby gallery preview" width={960} height={1200} unoptimized className="max-h-[86vh] w-auto rounded-lg border border-[#C8A96B] object-contain" /></motion.button>}</AnimatePresence>
    </main>
  );
}

function Input({ label, icon, name, type = "text" }: { label: string; icon: React.ReactNode; name: string; type?: string }) {
  return <label className="flex items-center gap-3 rounded-lg border border-[#D9C7A3] bg-[#FAF7F2] px-4 py-3 text-[#1E2A44]/70">{icon}<input name={name} type={type} placeholder={label} required className="w-full bg-transparent text-sm outline-none placeholder:text-[#1E2A44]/45" /></label>;
}
