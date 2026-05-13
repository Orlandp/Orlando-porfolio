import { useState, useEffect } from 'react'
 
interface FormState {
  name:    string
  email:   string
  message: string
}
 
type Status = 'idle' | 'sending' | 'sent'
 
export default function Contact() {
  // useState: all form field values in one object
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
 
  // useState: submit lifecycle — idle → sending → sent → idle
  const [status, setStatus] = useState<Status>('idle')
 
  // useEffect: validate email format in real-time when form.email changes
  useEffect(() => {
    if (!form.email) return
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    const input = document.getElementById('emailField') as HTMLInputElement | null
    if (input) {
      input.style.borderColor = isValid
        ? 'rgba(34, 197, 94, 0.5)'  // green — valid
        : 'rgba(239, 68, 68, 0.5)'  // red — invalid
    }
  }, [form.email]) // only re-runs when email changes
 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }
 
  const inputCls =
    'w-full bg-white/[0.04] border border-white/10 text-white ' +
    'placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none ' +
    'focus:border-red-500/50 transition-all'
 
  return (
    <section id="contact" className="py-28 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-red-500 mb-3">
          Contact
        </p>
        <h2 className="reveal text-4xl md:text-5xl font-black text-white leading-tight mb-3">
          Let's work together
        </h2>
        <p className="reveal text-sm text-gray-500 max-w-md mb-16">
          Have a project in mind? My inbox is always open.
        </p>
 
        <form onSubmit={handleSubmit} className="reveal flex flex-col gap-3 max-w-lg">
          <input
            name="name" type="text" placeholder="Your name"
            required value={form.name} onChange={handleChange}
            className={inputCls}
          />
 
          {/* border colour changes via useEffect validation */}
          <input
            id="emailField"
            name="email" type="email" placeholder="your@email.com"
            required value={form.email} onChange={handleChange}
            className={inputCls}
          />
 
          <textarea
            name="message" rows={5} placeholder="Tell me about your project…"
            required value={form.message} onChange={handleChange}
            className={`${inputCls} resize-none`}
          />
 
          {/* button label driven by status useState */}
          <button
            type="submit"
            disabled={status !== 'idle'}
            className="self-start px-6 py-3 bg-red-600 hover:bg-red-500 disabled:opacity-60 text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-all hover:-translate-y-0.5 disabled:hover:translate-y-0"
          >
            {status === 'idle'    && 'Send Message'}
            {status === 'sending' && 'Sending…'}
            {status === 'sent'    && '✓ Message Sent!'}
          </button>
        </form>
      </div>
    </section>
  )
}
 