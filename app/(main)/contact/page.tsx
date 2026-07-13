// app/contact/page.tsx
'use client';

import { useState, useRef, FormEvent } from 'react';
import Link from "next/link";
import Button from "@/components/Button";
import Spacer from "@/components/Spacer";
import Script from 'next/script';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [turnstileToken, setTurnstileToken] = useState<string>('');
    const honeypotRef = useRef<HTMLInputElement>(null);

    // Your form service endpoint (replace with your actual Formspree/Web3Forms ID)
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
    // Your Cloudflare Turnstile site key (get this from https://challenges.cloudflare.com/turnstile/)
    const TURNSTILE_SITE_KEY = "YOUR_TURNSTILE_SITE_KEY";

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Check honeypot - if filled, silently reject (bot detected)
        if (honeypotRef.current?.value) {
            setStatus('sent'); // Show success to bot without actually sending
            return;
        }

        // Check Turnstile - must have been verified
        if (!turnstileToken) {
            setStatus('error');
            return;
        }

        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        formData.append('turnstile', turnstileToken);

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: formData,
            });

            if (res.ok) {
                setStatus('sent');
                (e.target as HTMLFormElement).reset();
                setTurnstileToken('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: "var(--color-background)",
                backgroundImage: "radial-gradient(var(--color-base) 2px, transparent 3px)",
                backgroundSize: "20px 20px",
            }}>

            <div className="mx-auto px-4 py-8 sm:px-6">

                {/* ===== Page Header ===== */}
                <div className="mb-4 text-center">
                    <h1 className="text-3xl font-bold text-(--color-rose) sm:text-4xl">
                        Contact
                    </h1>
                    <p className="mt-2 text-base text-(--color-muted)">
                        Get in Touch
                    </p>
                </div>

                {/* ===== Contact Form Section ===== */}
                <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
                    <section className="mt-0">
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Contact Info Card */}
                            <div className="card p-8">
                                <h2 className="mb-4 text-xl font-semibold text-(--color-rose)">
                                    Let&apos;s Connect
                                </h2>
                                <p className="mb-4 text-sm leading-relaxed text-(--color-subtle)">
                                    I&apos;m always open to discussing opportunities to collaborate, sharing ideas, or just general questions. :) Feel free to reach out!
                                </p>

                                <div className="mt-6 space-y-4">
                                    <div>
                                        <h6 className="mb-2 text-xs font-semibold text-(--color-subtle)">
                                            📧 E-Mail
                                        </h6>
                                        <p className="text-sm text-(--color-text)">
                                            {`contact@ItsMaxine.eu`}
                                        </p>
                                    </div>

                                    <div>
                                        <h6 className="mb-2 text-xs font-semibold text-(--color-subtle)">
                                            📍 Location
                                        </h6>
                                        <p className="text-sm text-(--color-text)">
                                            The Netherlands
                                        </p>
                                    </div>

                                    <div>
                                        <h6 className="mb-2 text-xs font-semibold text-(--color-subtle)">
                                            🔗 Socials
                                        </h6>
                                        <div className="flex flex-wrap gap-2 text-sm">
                                            <Link
                                                href="https://github.com/MaxineCodes"
                                                className="rounded bg-(--color-surface) px-3 py-1 text-(--color-text) hover:bg-(--color-foam)/20">
                                                GitHub
                                            </Link>
                                            <Link
                                                href="https://www.linkedin.com/in/maxinemeijboom/"
                                                className="rounded bg-(--color-surface) px-3 py-1 text-(--color-text) hover:bg-(--color-foam)/20">
                                                LinkedIn
                                            </Link>
                                            <Link
                                                href="https://www.artstation.com/maxine3d"
                                                className="rounded bg-(--color-surface) px-3 py-1 text-(--color-text) hover:bg-(--color-foam)/20">
                                                ArtStation
                                            </Link>
                                            <Link
                                                href="https://bsky.app/profile/maxinecodes.bsky.social"
                                                className="rounded bg-(--color-surface) px-3 py-1 text-(--color-text) hover:bg-(--color-foam)/20">
                                                BlueSky
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form Card */}
                            <div className="card p-8">
                                <Script
                                    src={`https://challenges.cloudflare.com/turnstile/v0/api.js`}
                                    strategy="afterInteractive"
                                />

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Honeypot field - hidden from humans, bots will fill it */}
                                    <input
                                        ref={honeypotRef}
                                        type="text"
                                        name="_gotcha"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                                        readOnly
                                    />

                                    <div>
                                        <label htmlFor="name" className="block mb-1 text-sm font-medium text-(--color-text)">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            className="w-full rounded border border-(--color-overlay) bg-(--color-surface) px-3 py-2 text-(--color-text) focus:border-(--color-foam) focus:outline-none focus:ring-1 focus:ring-(--color-foam)"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-(--color-text)">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full rounded border border-(--color-overlay) bg-(--color-surface) px-3 py-2 text-(--color-text) focus:border-(--color-foam) focus:outline-none focus:ring-1 focus:ring-(--color-foam)"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block mb-1 text-sm font-medium text-(--color-text)">
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            className="w-full rounded border border-(--color-overlay) bg-(--color-surface) px-3 py-2 text-(--color-text) focus:border-(--color-foam) focus:outline-none focus:ring-1 focus:ring-(--color-foam)"
                                        >
                                            <option value="">Select a topic...</option>
                                            <option value="project">Project</option>
                                            <option value="collaboration">Collaboration</option>
                                            <option value="question">General Question</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block mb-1 text-sm font-medium text-(--color-text)">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full rounded border border-(--color-overlay) bg-(--color-surface) px-3 py-2 text-(--color-text) focus:border-(--color-foam) focus:outline-none focus:ring-1 focus:ring-(--color-foam)"
                                        />
                                    </div>

                                    {/* Cloudflare Turnstile Widget */}
                                    <div className="turnstile-widget">
                                        <div
                                            className="cloudflare-turnstile-widget"
                                            data-sitekey={TURNSTILE_SITE_KEY}
                                            data-callback={(token: string) => setTurnstileToken(token)}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <Button
                                            text={status === 'sending' ? 'Sending...' : 'Send Message'}
                                            href={undefined}
                                            variant={'bold'}
                                            onClick={() => {}}
                                            disabled={status === 'sending' || !turnstileToken}
                                        />
                                        {status === 'sent' && (
                                            <p className="text-sm text-(--color-foam)">
                                                Thanks for reaching out! I&apos;ll get back to you soon.
                                            </p>
                                        )}
                                        {status === 'error' && (
                                            <p className="text-sm text-(--color-rose)">
                                                Something went wrong. Please try again or email me directly.
                                            </p>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* ===== Footer Navigation ===== */}
                    <section className="mt-8">
                        <div className="flex justify-center">
                            <Button text={"Back to Home"} href={"/"} variant={'disabled'} />
                        </div>
                    </section>

                    {/* ===== Spacer ===== */}
                    <Spacer />
                </div>
            </div>
        </div>
    );
}