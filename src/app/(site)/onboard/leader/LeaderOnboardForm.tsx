'use client';

import { useState } from 'react';

const POSITIONS = [
  { id: 'leader-exec-president', label: 'President' },
  { id: 'leader-exec-vp', label: 'Vice President' },
  { id: 'leader-exec-secretary', label: 'General Secretary' },
  { id: 'leader-exec-treasurer', label: 'Treasurer' },
  { id: 'leader-exec-fin-secretary', label: 'Financial Secretary' },
  { id: 'leader-exec-pro', label: 'Public Relations Officer' },
  { id: 'leader-trustee-trustee-1', label: 'Trustee 1' },
  { id: 'leader-trustee-trustee-2', label: 'Trustee 2' },
  { id: 'leader-trustee-trustee-3', label: 'Trustee 3' },
];

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function LeaderOnboardForm({ onboardKey }: { onboardKey: string }) {
  const [status, setStatus] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = new FormData(e.currentTarget);
    form.append('key', onboardKey);

    try {
      const res = await fetch('/api/onboard/leader', {
        method: 'POST',
        body: form,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-green-900">
        <h2 className="text-xl font-semibold mb-2">Thank you!</h2>
        <p>
          Your details have been submitted. The board will review and publish your profile on the
          Leadership page.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="leaderId" className="block text-sm font-medium text-gray-700 mb-2">
          Your Position *
        </label>
        <select
          id="leaderId"
          name="leaderId"
          required
          defaultValue=""
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-blue focus:border-transparent"
        >
          <option value="" disabled>Select your position…</option>
          {POSITIONS.map((p) => (
            <option key={p.id} value={p.id}>{p.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={120}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="term" className="block text-sm font-medium text-gray-700 mb-2">
          Term
        </label>
        <input
          id="term"
          name="term"
          type="text"
          placeholder="e.g. 2024 - 2026"
          maxLength={50}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-blue focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-1">Leave blank if not applicable.</p>
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
          Short Bio *
        </label>
        <textarea
          id="bio"
          name="bio"
          required
          rows={5}
          maxLength={1500}
          placeholder="Two to three sentences about yourself, your background, and what you do for ODA-USA."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oda-blue focus:border-transparent resize-none"
        />
      </div>

      <div>
        <label htmlFor="headshot" className="block text-sm font-medium text-gray-700 mb-2">
          Headshot (optional)
        </label>
        <input
          id="headshot"
          name="headshot"
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-oda-blue file:px-4 file:py-2 file:text-white file:font-semibold hover:file:bg-oda-blue/90"
        />
        <p className="text-xs text-gray-500 mt-1">Any clear photo of yourself works. Max 8MB.</p>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit'}
      </button>

      {status === 'error' && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-900 text-sm">
          {errorMessage || 'Something went wrong. Please try again.'}
        </div>
      )}
    </form>
  );
}
