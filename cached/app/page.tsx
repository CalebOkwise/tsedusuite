'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  { title: 'Student Management', detail: 'Centralize student records, profiles, attendance and history in one secure hub.' },
  { title: 'Fee Management', detail: 'Automate fee plans, invoices, receipts and reminders for every family.' },
  { title: 'Attendance Tracking', detail: 'Capture attendance instantly and monitor student presence with accuracy.' },
  { title: 'Results & Reports', detail: 'Publish progress reports, analytics and exam cards in minutes.' },
  { title: 'Parent Portal', detail: 'Enable parents to view payments, performance and announcements on demand.' },
  { title: 'Timetable & Exams', detail: 'Plan classes, exam schedules and assignments from one dashboard.' }
];

const faqs = [
  { question: 'Can we use TS Edu Suite with our existing student database?', answer: 'Yes. Our team supports fast onboarding and can migrate existing data into the demo environment.' },
  { question: 'Is the live demo restricted for safety?', answer: 'Yes. Demo access is read-only for sensitive workflows while allowing you to explore administration, parent, and student features.' },
  { question: 'How quickly can we get a personalized walkthrough?', answer: 'We respond to demo requests within one business day and schedule a consultation on your preferred date.' }
];

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100">
      <section className="pt-16 pb-20 sm:pb-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="grid gap-14 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-emerald-200 shadow-soft">
                  Trusted by school leaders across Nigeria
                </div>
                <div className="max-w-3xl space-y-6">
                  <h1 className="text-[3.5rem] font-semibold tracking-tight sm:text-[3.5rem] md:text-[3.5rem] text-slate-100">
                    <span className="text-emerald-300">TS Edu Suite:</span> The School Management System Built To Streamline Every Administration Task.
                  </h1>
                  <p className="text-lg leading-8 text-slate-300 sm:text-xl">Bring admissions, attendance, fees, results, communication and reporting together in one polished dashboard for administrators, parents, and students.</p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/demo" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
                    Request a Free Demo
                  </Link>
                  <Link href="/demo" className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
                    View Demo Access
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950/70 p-6 shadow-soft">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-500/20 to-transparent" />
                <div className="relative rounded-[1.5rem] border border-slate-800 bg-slate-950 p-6">
                  <div className="flex items-center justify-between gap-4 rounded-3xl bg-slate-900/90 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-emerald-300 font-semibold">Live school dashboard</p>
                      <p className="mt-2 text-sm font-bold text-white">Admissions, Fees & Reports In One View</p>
                    </div>
                    <div className="h-11 w-11 rounded-2xl bg-emerald-500/40" />
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {['Fee summary', 'Attendance', 'Results', 'Parent messages'].map((item) => (
                      <div key={item} className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300 shadow-[0_16px_35px_-20px_rgba(255,255,255,0.18)]">
                        <p className="font-semibold text-white">{item}</p>
                        <p className="mt-2 text-xs text-slate-500">Fast insights for every school day</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-slate-800/70 bg-slate-900/80 py-16">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            {
              stat: '120+',
              label: 'Schools served',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="absolute right-4 top-4 h-24 w-24 text-emerald-400/10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 11L12 4L20 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 11V18H19V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              stat: '48,000+',
              label: 'Students managed',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="absolute right-4 top-4 h-24 w-24 text-emerald-400/10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7C8 5.34315 9.34315 4 11 4H13C14.6569 4 16 5.34315 16 7V9C16 10.6569 14.6569 12 13 12H11C9.34315 12 8 10.6569 8 9V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 20V18C5 16.8954 5.89543 16 7 16H17C18.1046 16 19 16.8954 19 18V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            },
            {
              stat: '99.8%',
              label: 'Uptime and reliability',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="absolute right-4 top-4 h-24 w-24 text-emerald-400/10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L5 6V11C5 16.523 8.58172 20.7429 12 21C15.4183 20.7429 19 16.523 19 11V6L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 11L11 14L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            }
          ].map((item) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="relative overflow-hidden rounded-[1.5rem] border border-emerald-300/15 bg-white/5 p-8 text-center shadow-[0_30px_80px_-45px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-300 hover:border-emerald-300/30 hover:shadow-[0_30px_100px_-40px_rgba(16,185,129,0.45)]">
              {item.icon}
              <div className="relative z-10">
                <p className="text-4xl font-semibold text-white">{item.stat}</p>
                <p className="mt-3 text-sm text-slate-400">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-20 bg-slate-800/80 text-slate-100 overflow-hidden">
        <div className="absolute left-8 top-6 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-emerald-400/8 blur-3xl" />
        <div className="container space-y-10 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Problems we solve</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Remove the daily school admin burden with one modern platform.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Manual record keeping slows growth',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-emerald-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4H18M6 8H18M9 12H15M7 16H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: 'Fees and payments are difficult to reconcile',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-emerald-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9H16M8 13H14M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: 'Parent communication is fragmented',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-emerald-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20V16H5.5L4 18.5V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 9H16M8 13H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: 'Exam results take too long to publish',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-emerald-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L15 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                )
              },
              {
                title: 'Teacher tasks are uncoordinated',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-emerald-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 5H18V19H6V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 9H15M9 13H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: 'Data is stored in multiple places',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-emerald-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                )
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100 shadow-soft backdrop-blur-xl transition duration-300 hover:border-emerald-300 hover:shadow-[0_20px_70px_-30px_rgba(16,185,129,0.55)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300">
                  {item.icon}
                </div>
                <p className="text-base font-semibold text-white">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800/70 bg-slate-950/90 py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Core benefits</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Designed to save time, reduce errors, and keep every stakeholder aligned.</h2>
            <p className="max-w-2xl text-slate-400">Deliver a reliable school experience with built-in tools for finance, attendance, parent updates, and student progress—all from a single control panel.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { title: 'Save administrative time', desc: 'Automate recurring tasks and free staff to focus on learners.' },
              { title: 'Reduce financial risk', desc: 'Receipt verification and fee tracking that stay accurate.' },
              { title: 'Improve parent trust', desc: 'Share updates, grades, and payments with one portal.' },
              { title: 'Get operational clarity', desc: 'Real-time dashboards show attendance, finance and results.' }
            ].map((item) => (
              <motion.div key={item.title} whileHover={{ scale: 1.02 }} className="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-6">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/80">
        <div className="container space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Feature overview</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Everything your school needs to operate with confidence.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div key={feature.title} whileHover={{ y: -6 }} className="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-6 shadow-soft">
                <p className="text-xl font-semibold text-white">{feature.title}</p>
                <p className="mt-3 text-sm text-slate-400">{feature.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800/70 py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Role-based experience</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A tailored experience for administrators, parents and students.</h2>
            <p className="max-w-2xl text-slate-400">The platform delivers role-specific dashboards and actions so each user sees relevant school data immediately.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { role: 'Administrator', detail: 'Manage classes, fees, staff, reports and school settings from a single control room.' },
              { role: 'Parent', detail: 'View fee status, attendance, results and school notices with secure access.' },
              { role: 'Student', detail: 'Access timetables, assignments, results and school communication in one spot.' }
            ].map((card) => (
              <motion.div key={card.role} whileHover={{ y: -4 }} className="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-6">
                <p className="text-lg font-semibold text-white">{card.role}</p>
                <p className="mt-3 text-sm text-slate-400">{card.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Testimonials</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Trusted by school leaders who want safer, simpler operations.</h2>
            <p className="max-w-2xl text-slate-400">Hear how TS Edu Suite has helped schools cut busywork, speed up results delivery, and keep parents informed.</p>
          </div>
          <div className="grid gap-6">
            {[
              { quote: 'TS Edu Suite transformed our fee collection and made Parent Night easier than ever.', name: 'Mrs. Aisha Balogun, Principal' },
              { quote: 'We now publish results in one click and parents can see progress instantly.', name: 'Mr. Chukwuemeka Ojo, School Administrator' }
            ].map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.01 }} className="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-6">
                <p className="text-lg italic text-slate-200">“{item.quote}”</p>
                <p className="mt-4 font-semibold text-white">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-slate-100">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Frequently asked questions</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Answers to common questions from school leaders.</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((item) => (
              <motion.div key={item.question} whileHover={{ y: -2 }} className="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-6">
                <p className="font-semibold text-white">{item.question}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800/70 py-20">
        <div className="container rounded-[2rem] bg-slate-950/90 p-12 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Ready to get started?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Request demo access and explore TS Edu Suite today.</h2>
              <p className="mt-4 max-w-2xl text-slate-400">See all user roles, dashboards and workflows in a real demo environment tailored for school administrators and educators.</p>
            </div>
            <div className="flex justify-end">
              <Link href="/demo" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
                Get Instant Demo Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/70 py-12">
        <div className="container grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <p className="text-base font-semibold text-white">TS Edu Suite</p>
            <p className="mt-2 text-sm text-slate-400">Modern school ERP platform for administrators, parents and students.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <Link href="/demo">Demo</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
