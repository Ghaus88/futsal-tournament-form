import Image from "next/image";
import {
  BadgeCheck,
  CalendarCheck2,
  Goal,
  Mail,
  ShieldCheck,
  Trophy,
  Users
} from "lucide-react";

const tournaments = [
  {
    title: "Elite Winter Cup",
    description:
      "A high-intensity invitational tournament featuring the region's strongest futsal clubs.",
    icon: Trophy
  },
  {
    title: "City Night League",
    description:
      "Weekly prime-time fixtures with live updates, disciplined officiating, and premium venue standards.",
    icon: CalendarCheck2
  },
  {
    title: "Future Stars Showcase",
    description:
      "A development-focused tournament spotlighting young talent and professional scouting opportunities.",
    icon: Goal
  }
];

const projects = [
  {
    title: "Matchday Media Hub",
    description:
      "End-to-end event media production, highlight reels, and tournament storytelling for brand partners.",
    icon: BadgeCheck
  },
  {
    title: "Referee Excellence Program",
    description:
      "Continuous training sessions, rule refreshers, and match simulation workshops for elite officiating.",
    icon: ShieldCheck
  },
  {
    title: "Community Futsal Nights",
    description:
      "Open-format futsal evenings connecting local players, coaches, and supporters in a professional setting.",
    icon: Users
  }
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tournaments", href: "#tournaments" },
  { label: "Referees", href: "#referees" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-[0.2em] text-neutral-900">
            FUTBOL EXCLUSIVE
          </a>
          <ul className="hidden gap-6 text-sm font-medium text-neutral-700 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="transition hover:text-black" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section
        id="top"
        className="relative isolate flex min-h-[78vh] items-end border-b border-neutral-200 bg-black"
      >
        <Image
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1500&q=80"
          alt="Futsal players competing"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-20 text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-300">Premium Futsal Experiences</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Futbol Exclusive
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-200">
            Building elite futsal tournaments, trusted refereeing crews, and standout community projects with a clean, professional touch.
          </p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-neutral-900">About</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">
          Futbol Exclusive is dedicated to delivering polished futsal experiences for clubs, players, and supporters. Our team combines operational discipline, technical expertise, and a passion for the game to host events that feel premium from kickoff to final whistle.
        </p>
      </section>

      <section id="tournaments" className="border-y border-neutral-200 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-neutral-900">Tournaments</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tournaments.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Icon className="h-8 w-8 text-neutral-900" />
                <h3 className="mt-5 text-xl font-semibold text-neutral-900">{title}</h3>
                <p className="mt-3 text-neutral-700">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="referees" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-neutral-900">Referees</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Our officiating team is selected for composure, consistency, and complete command of futsal laws. Every referee is supported by continuous education and match analysis to ensure fair, professional, and high-tempo competition.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-neutral-300 bg-black">
            <Image
              src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1000&q=80"
              alt="Futsal referee observing the game"
              fill
              className="object-cover opacity-85"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-neutral-200 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-neutral-900">Projects</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Icon className="h-8 w-8 text-neutral-900" />
                <h3 className="mt-5 text-xl font-semibold text-neutral-900">{title}</h3>
                <p className="mt-3 text-neutral-700">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-neutral-900">Contact</h2>
        <p className="mt-6 max-w-2xl text-lg text-neutral-700">
          Partner with Futbol Exclusive to host your next standout futsal experience.
        </p>
        <a
          href="mailto:contact@futbolexclusive.com"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-3 font-medium text-white transition hover:bg-black"
        >
          <Mail className="h-5 w-5" />
          contact@futbolexclusive.com
        </a>
      </section>
    </main>
  );
}
