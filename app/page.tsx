"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Baby, Cake, CalendarDays, Camera, Check, ChevronDown, Coffee, Gift, MapPin, MessageCircle, Navigation, Phone, Sparkles, Users, X } from "lucide-react";
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

const timeline = [
  { time: "4:00 PM", title: "Guest Arrival", detail: "A warm welcome with soft music and golden smiles.", icon: Users },
  { time: "4:30 PM", title: "Welcome Drinks", detail: "Elegant refreshments served as everyone gathers.", icon: Coffee },
  { time: "5:15 PM", title: "Cake Cutting", detail: "Liam's first candle moment, framed with family love.", icon: Cake },
  { time: "6:00 PM", title: "Lunch", detail: "A relaxed celebration meal for family and friends.", icon: Gift },
  { time: "6:45 PM", title: "Family Photos", detail: "Timeless portraits with our little gentleman.", icon: Camera },
  { time: "7:15 PM", title: "Celebration Time", detail: "Music, laughter, blessings, and birthday memories.", icon: Sparkles }
];
const milestones = [
  { date: "August 16, 2025", title: "Born", detail: "The day our sweetest little gentleman arrived and changed everything." },
  { date: "October 2025", title: "First Smile", detail: "A tiny smile that made every quiet morning feel golden." },
  { date: "March 2026", title: "First Crawl", detail: "Small hands, brave moves, and the beginning of big adventures." },
  { date: "July 2026", title: "First Steps", detail: "Careful steps forward, cheered on by everyone who loves him." },
  { date: "August 16, 2026", title: "First Birthday", detail: "One beautiful year of cuddles, laughter, wonder, and love." }
];
const contacts = [
  { name: "Nirmal", phone: "+94 74 381 6127", href: "tel:+94743816127" },
  { name: "Nirmani", phone: "+94 76 107 8464", href: "tel:+94761078464" }
];
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

function TasselBackdrop() {
  const tassels = useMemo(() => Array.from({ length: 8 }, (_, i) => ({ id: i, left: 6 + i * 13, delay: i * 0.35, length: 78 + (i % 3) * 22 })), []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-0 hidden h-48 overflow-hidden opacity-55 sm:block" aria-hidden="true">
      {tassels.map((item) => (
        <motion.div
          key={item.id}
          className="tassel-string absolute top-0"
          style={{ left: `${item.left}%`, height: item.length }}
          animate={{ y: [0, 8, 0], rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 5.5, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <span />
        </motion.div>
      ))}
    </div>
  );
}

function PhotoInvitation({ intro }: { intro: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.06, filter: "blur(22px)" }}
      animate={{ opacity: intro ? 0 : 1, scale: intro ? 1.06 : 1, filter: intro ? "blur(22px)" : "blur(0px)" }}
      transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
    >
      <Image
        src="/images/liam-photo.jpg"
        alt="Liam's first birthday invitation"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#1E2A44]/45 to-transparent" />
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
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.0, duration: 1 }} className="mx-auto mt-8 h-44 w-44 overflow-hidden rounded-full border border-[#C8A96B]/45 bg-white/60 shadow-2xl shadow-[#1E2A44]/15">
          <Image src="/images/bear.jpg" alt="Polo bear" width={320} height={320} priority className="h-full w-full object-cover" />
        </motion.div>
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
  return (
    <motion.section initial={{ opacity: 0, y: 34, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.75 }} className="mx-auto w-full max-w-5xl px-5 py-16">
      <div className="gold-line mx-auto mb-5 h-px w-40" />
      <h2 className="font-display mb-9 text-center text-4xl text-[#1E2A44] sm:text-5xl">Countdown</h2>
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:gap-4 lg:max-w-none lg:grid-cols-4">
        {values.map(([label, value]) => (
          <motion.div key={label} whileHover={{ y: -6 }} className="soft-glow rounded-lg border border-[#C8A96B]/25 bg-white/85 p-5 text-center">
            <strong className="font-display block text-4xl text-[#1E2A44] sm:text-5xl">{String(value).padStart(2, "0")}</strong>
            <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C8A96B] sm:text-xs">{label}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
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
      <TasselBackdrop />
      <SparkleField />
      <section className="relative min-h-screen overflow-hidden bg-[#F2EFE8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(200,169,107,.20),transparent_34%),linear-gradient(110deg,rgba(30,42,68,.06),transparent_45%)]" />
        <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_1px_1px,rgba(30,42,68,.12)_1px,transparent_0)] [background-size:18px_18px]" />
        <PhotoInvitation intro={intro} />
        <motion.div animate={{ opacity: intro ? 0 : 1 }} transition={{ delay: 1.35 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          <ChevronDown className="mx-auto animate-bounce text-[#C8A96B]" aria-label="Scroll down" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">Scroll</span>
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
      <motion.section initial={{ opacity: 0, y: 34, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.75 }} className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="gold-line mx-auto mb-5 h-px w-40" />
        <h2 className="font-display mb-10 text-center text-4xl text-[#1E2A44] sm:text-5xl">Celebration Timeline</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="relative overflow-hidden rounded-lg border border-[#C8A96B]/25 bg-white/80 p-5 shadow-lg shadow-[#1E2A44]/5">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#D9C7A3]/20" />
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-[#C8A96B]/35 bg-[#FAF7F2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A96B]">{item.time}</span>
                  <Icon className="text-[#C8A96B]" size={24} />
                </div>
                <h3 className="font-display text-2xl text-[#1E2A44]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#1E2A44]/65">{item.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-[0.9fr_1.4fr]">
        <div className="soft-glow rounded-lg border border-[#C8A96B]/25 bg-white/80 p-7"><MapPin className="mb-4 text-[#C8A96B]" /><h2 className="font-display text-4xl">Venue</h2><p className="mt-4 font-semibold">{baby.venue}</p><p className="mt-2 text-sm leading-6 text-[#1E2A44]/70">{baby.address}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(baby.mapsQuery)}`} target="_blank" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1E2A44] px-5 py-3 text-sm font-semibold text-white"><Navigation size={16} /> Get Directions</a></div>
        <div className="map-frame h-80 overflow-hidden rounded-lg border border-[#C8A96B]/25"><iframe src={maps} title="Venue map" loading="lazy" /></div>
      </section>
      <motion.section initial={{ opacity: 0, y: 34, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.75 }} className="mx-auto w-full max-w-4xl px-5 py-12">
        <div className="gold-line mx-auto mb-5 h-px w-40" />
        <h2 className="font-display mb-8 text-center text-4xl text-[#1E2A44] sm:text-5xl">Contact Details</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map((contact) => (
            <motion.a key={contact.name} href={contact.href} whileHover={{ y: -5 }} className="soft-glow flex items-center gap-4 rounded-lg border border-[#C8A96B]/25 bg-white/85 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#1E2A44] text-[#C8A96B]">
                <Phone size={20} />
              </span>
              <span>
                <span className="font-display block text-2xl text-[#1E2A44]">{contact.name}</span>
                <span className="mt-1 block text-sm font-medium text-[#1E2A44]/65">{contact.phone}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </motion.section>
      <motion.section initial={{ opacity: 0, y: 34, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.75 }} className="mx-auto w-full max-w-4xl px-5 py-16">
        <div className="gold-line mx-auto mb-5 h-px w-40" />
        <h2 className="font-display mb-10 text-center text-4xl text-[#1E2A44] sm:text-5xl">Memory Lane</h2>
        <div className="relative">
          <div className="absolute left-5 top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-transparent via-[#C8A96B] to-transparent sm:left-1/2" />
          <div className="space-y-5">
            {milestones.map((m, i) => (
              <motion.article key={m.title} initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${i % 2 === 0 ? "" : "sm:[&>div]:col-start-2"}`}>
                <span className="absolute left-[13px] top-7 z-10 grid h-4 w-4 place-items-center rounded-full border border-[#C8A96B] bg-[#FAF7F2] sm:left-1/2 sm:-translate-x-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8A96B]" />
                </span>
                <div className="ml-12 rounded-lg border border-[#C8A96B]/25 bg-white/85 p-5 shadow-lg shadow-[#1E2A44]/5 sm:ml-0">
                  <div className="mb-3 flex items-center gap-2 text-[#C8A96B]">
                    <Baby size={18} />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">{m.date}</span>
                  </div>
                  <h3 className="font-display text-2xl text-[#1E2A44]">{m.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#1E2A44]/65">{m.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
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
