import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'sending' | 'sent';

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    if (!form.email) {
      setIsValidEmail(true);
      return;
    }
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    setIsValidEmail(isValid);
  }, [form.email]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;
    
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  const inputCls =
    'w-full bg-white/5 border border-white/10 text-foreground placeholder-neutral-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary focus:bg-white/10 transition-all';

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-2 gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-6"
          >
            Let's build<br />something great.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 leading-relaxed mb-8"
          >
            Whether you have a project in mind or just want to say hi, my inbox is always open. 
            I'll try my best to get back to you!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 glass-card border-l-4 border-l-primary"
          >
            <p className="text-sm text-neutral-300 font-medium">Currently available for freelance opportunities.</p>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              className={inputCls}
            />
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={handleChange}
              className={`${inputCls} ${!isValidEmail && form.email ? 'border-red-500/50 focus:border-red-500' : ''}`}
            />
          </div>

          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              required
              value={form.message}
              onChange={handleChange}
              className={`${inputCls} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status !== 'idle'}
            className="flex items-center justify-center gap-2 w-full py-4 bg-foreground text-background font-bold rounded-xl hover:bg-neutral-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {status === 'idle' && (
              <>
                <span>Send Message</span>
                <Send size={18} />
              </>
            )}
            {status === 'sending' && (
              <>
                <span>Sending...</span>
                <Loader2 size={18} className="animate-spin" />
              </>
            )}
            {status === 'sent' && (
              <>
                <span>Message Sent!</span>
                <CheckCircle size={18} className="text-green-600" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
 