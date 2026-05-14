'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-transparent text-slate-100">
      <section className="container py-20">
        <div className="space-y-6 rounded-[2rem] border border-slate-700/80 bg-slate-900/90 p-10 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Privacy Policy</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">TS Edu Suite respects your privacy.</h1>
            <p className="mt-4 max-w-3xl text-slate-400">We collect only the information required to deliver your demo request and keep your data secure.</p>
          </div>
          <div className="space-y-6 text-slate-300">
            <div>
              <h2 className="text-xl font-semibold text-white">Data Collection</h2>
              <p className="mt-3 leading-7">When you request a demo we collect your name, school, email, phone number, role, student count and school type. This information is used to verify and personalize your access.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Use of Information</h2>
              <p className="mt-3 leading-7">We use lead data to send demo credentials, respond to your inquiry, and provide follow-up communications from Team Source.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Security</h2>
              <p className="mt-3 leading-7">Lead information is stored in a secure database and handled in accordance with best practice data protection standards.</p>
            </div>
          </div>
          <Link href="/" className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 sm:w-auto">
            Return to homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
