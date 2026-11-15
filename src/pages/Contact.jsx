import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { COMPANY } from '../data/company'

const TOPICS = { order: 'An existing order', product: 'A product question', returns: 'Returns and refunds', consultancy: 'IT consultancy enquiry', other: 'Something else' }

export default function Contact() {
  const [params] = useSearchParams()
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[params.get('topic')] ? params.get('topic') : 'order', ref: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter an email address like name@example.com.'
    if (form.message.trim().length < 10) errs.message = 'Tell us a little more so we can help (at least 10 characters).'
    setErrors(errs)
    if (Object.keys(errs).length) return
    const subject = `${TOPICS[form.topic]}${form.ref ? ` (${form.ref})` : ''} - ${form.name}`
    const body = `${form.message}\n\nName: ${form.name}\nEmail: ${form.email}${form.ref ? `\nOrder reference: ${form.ref}` : ''}`
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const Err = ({ k }) => (errors[k] ? <p className="mt-1.5 text-sm text-ember-deep">{errors[k]}</p> : null)

  return (
    <>
      <header className="bg-frost border-b border-line">
        <div className="wrap py-14 lg:py-20">
          <h1 className="text-5xl lg:text-6xl">Contact us</h1>
          <p className="mt-4 max-w-xl text-lg text-moss">Questions about an order, a product or a consultancy project. We reply within one working day.</p>
        </div>
      </header>

      <section className="wrap py-14 lg:py-20 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <div className="space-y-8">
          {[
            { icon: Mail, t: 'Email', v: <a href={`mailto:${COMPANY.email}`} className="link">{COMPANY.email}</a> },
            { icon: Phone, t: 'Telephone', v: <a href={COMPANY.phoneHref} className="link">{COMPANY.phone}</a> },
            { icon: Clock, t: 'Opening hours', v: COMPANY.hours },
            { icon: MapPin, t: 'Office', v: COMPANY.addressLines.map((l) => <span key={l} className="block">{l}</span>) },
          ].map(({ icon: Icon, t, v }) => (
            <div key={t} className="flex gap-4">
              <Icon size={20} strokeWidth={1.7} className="text-ember-deep mt-1 shrink-0" />
              <div><h2 className="font-sans text-base font-semibold tracking-normal">{t}</h2><div className="text-smoke mt-1">{v}</div></div>
            </div>
          ))}
          <p className="text-sm text-smoke border-t border-line pt-6">
            Our office is not a shop. Collections are by appointment only. For returns, see the <Link to="/returns-policy" className="link text-spruce">returns policy</Link>.
          </p>
        </div>

        {sent ? (
          <div className="bg-frost p-8 lg:p-10 self-start">
            <CheckCircle2 size={36} strokeWidth={1.5} className="text-moss" />
            <h2 className="text-3xl mt-4">Message ready to send</h2>
            <p className="mt-3 text-smoke">Your email app has opened with your message. Press send and we will reply within one working day. If nothing opened, email us directly at <a href={`mailto:${COMPANY.email}`} className="link text-spruce">{COMPANY.email}</a>.</p>
            <button onClick={() => { setSent(false); setForm((f) => ({ ...f, message: '', ref: '' })) }} className="btn-line mt-6">Write another message</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-5 self-start">
            <div><label htmlFor="c-name" className="field-label">Name</label><input id="c-name" className="field" autoComplete="name" value={form.name} onChange={set('name')} /><Err k="name" /></div>
            <div><label htmlFor="c-email" className="field-label">Email</label><input id="c-email" type="email" className="field" autoComplete="email" value={form.email} onChange={set('email')} /><Err k="email" /></div>
            <div><label htmlFor="c-topic" className="field-label">What is it about?</label>
              <select id="c-topic" className="field" value={form.topic} onChange={set('topic')}>
                {Object.entries(TOPICS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
              </select>
            </div>
            <div><label htmlFor="c-ref" className="field-label">Order reference (optional)</label><input id="c-ref" className="field" placeholder="NE-..." value={form.ref} onChange={set('ref')} /></div>
            <div className="sm:col-span-2"><label htmlFor="c-msg" className="field-label">Message</label><textarea id="c-msg" rows={6} className="field" value={form.message} onChange={set('message')} /><Err k="message" /></div>
            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button type="submit" className="btn-dark">Send message</button>
              <p className="text-xs text-smoke">We use your details only to reply. See our <Link to="/privacy-policy" className="underline">privacy policy</Link>.</p>
            </div>
          </form>
        )}
      </section>
    </>
  )
}
