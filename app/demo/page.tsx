'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type FormState = {
  fullName: string;
  schoolName: string;
  email: string;
  phone: string;
  role: string;
  studentCount: string;
  schoolType: string;
};

const initialState: FormState = {
  fullName: '',
  schoolName: '',
  email: '',
  phone: '',
  role: '',
  studentCount: '',
  schoolType: ''
};

export default function DemoForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!form.fullName || !form.schoolName || !form.email || !form.phone || !form.role) {
      setError('Please complete all required fields.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('http://localhost:8000/api/submit-lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.fullName,
          school_name: form.schoolName,
          email: form.email,
          phone: form.phone,
          role: form.role,
          student_count: form.studentCount,
          school_type: form.schoolType,
          source_url: window.location.href
        })
      });

      const json = await response.json();

      if (!response.ok || json.success !== true) {
        throw new Error(json.message || 'An error occurred while submitting your request.');
      }

      router.push('/demo-access');
    } catch (err) {
      setError((err as Error).message || 'Unable to submit the form right now. Please try again later.');
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-transparent text-slate-100">
      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Request demo access</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl leading-relaxed">Start your <span className="text-emerald-400 font-bold">TS Edu Suite</span> demo with a single request.</h1>
            <p className="max-w-2xl text-slate-400">Complete the form below and receive instant access to administrator, parent and student demo credentials.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/90 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Need help?</p>
            <p className="mt-4 text-slate-300">Complete the form below to access the demo. After submitting, one of our team members can reach out to provide a personalized walkthrough.</p>
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-slate-700/80 bg-slate-950/90 p-8 shadow-soft">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Full Name *</span>
                <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400" placeholder="Jane Doe" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>School Name *</span>
                <input name="schoolName" value={form.schoolName} onChange={handleChange} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400" placeholder="Green Valley Academy" />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email Address *</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400" placeholder="jane@school.edu.ng" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Phone Number *</span>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400" placeholder="+234 800 123 4567" />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Role / Position *</span>
                <select name="role" value={form.role} onChange={handleChange} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400">
                  <option value="">Select position</option>
                  <option value="School Owner">School Owner</option>
                  <option value="Principal">Principal</option>
                  <option value="Head Teacher">Head Teacher</option>
                  <option value="School Administrator">School Administrator</option>
                  <option value="ICT Coordinator">ICT Coordinator</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Number of Students</span>
                <input name="studentCount" value={form.studentCount} onChange={handleChange} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400" placeholder="e.g. 450" />
              </label>
            </div>

            <label className="space-y-2 text-sm text-slate-300">
              <span>School Type</span>
              <input name="schoolType" value={form.schoolType} onChange={handleChange} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400" placeholder="Day, boarding, mixed, private" />
            </label>

            {error && <p className="rounded-3xl bg-rose-500/10 px-4 py-3 text-sm text-rose-200">{error}</p>}

            <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60">
              {submitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
