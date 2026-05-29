'use client';

import Link from 'next/link';

const credentials = [
  { role: 'Administrator', description: 'Full access to school operations, fee management, reports and user settings.', username: 'admin@demo.com', password: 'DemoAdmin123' },
  { role: 'Parent', description: 'View student progress, fee status and school announcements.', username: 'parent@demo.com', password: 'DemoParent123' },
  { role: 'Student', description: 'Access timetable, assignments, results and attendance records.', username: 'student@demo.com', password: 'DemoStudent123' }
];

export default function DemoAccess() {
  return (
    <main className="min-h-screen bg-transparent text-slate-100">
      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Demo access ready</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Your demo access is ready. Explore the platform for administrator, parent and student roles.</h1>
            <p className="max-w-2xl text-slate-400">Use the credentials below to launch the live demo and see how TS Edu Suite can transform your school administration.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/90 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Need a walkthrough?</p>
            <p className="mt-4 text-slate-300">Book a personalized demo and let our team show you how TS Edu Suite fits your school.</p>
            <Link href="#launch" className="mt-6 inline-flex rounded-full bg-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-600">
              Launch Live Demo
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {credentials.map((item) => (
            <div key={item.role} className="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{item.role}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{item.role} Demo</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
              <div className="mt-6 space-y-3 rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm text-slate-300"><span className="font-semibold text-white">Username:</span> {item.username}</p>
                <p className="text-sm text-slate-300"><span className="font-semibold text-white">Password:</span> {item.password}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="launch" className="mt-16 rounded-[2rem] border border-slate-700/80 bg-slate-950/90 p-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Launch your demo</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Explore the live school application with your demo account.</h2>
              <p className="mt-4 max-w-2xl text-slate-400">Open the sandbox environment and review the full student, parent and admin workflows at `tsedusuite.teamsource.net/app`.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="https://tsedusuite.teamsource.net/app" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
                Launch Live Demo
              </Link>
              <Link href="mailto:sales@teamsource.net?subject=TS%20Edu%20Suite%20Personalized%20Walkthrough" className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
                Book a Walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
