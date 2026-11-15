import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, CheckCircle2 } from 'lucide-react'
import { useCart, SHIPPING } from '../context/CartContext'
import { COMPANY, img, money } from '../data/company'

const METHODS = [
  { id: 'standard', label: 'UK standard, 2 to 4 working days', price: (sub) => (sub >= SHIPPING.freeOver ? 0 : SHIPPING.standard), uk: true },
  { id: 'express', label: 'UK express, next working day if ordered by 1pm', price: () => SHIPPING.express, uk: true },
  { id: 'intl', label: 'International tracked, 5 to 10 working days', price: () => 14.95, uk: false },
]

const EMPTY = { name: '', email: '', phone: '', line1: '', line2: '', city: '', postcode: '', country: 'United Kingdom', notes: '' }

export default function Checkout() {
  const { items, subtotal, clear } = useCart()
  const [form, setForm] = useState(EMPTY)
  const [method, setMethod] = useState('standard')
  const [agree, setAgree] = useState(false)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(null)

  const isUK = form.country === 'United Kingdom'
  const available = METHODS.filter((m) => m.uk === isUK)
  const chosen = available.find((m) => m.id === method) || available[0]
  const delivery = chosen.price(subtotal)
  const total = subtotal + delivery
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter an email address like name@example.com.'
    if (!form.line1.trim()) errs.line1 = 'Enter the first line of your address.'
    if (!form.city.trim()) errs.city = 'Enter your town or city.'
    if (!form.postcode.trim()) errs.postcode = 'Enter your postcode.'
    if (!agree) errs.agree = 'Please accept the terms to place your order.'
    setErrors(errs)
    if (Object.keys(errs).length) return

    const ref = 'NE-' + Date.now().toString(36).toUpperCase().slice(-6)
    const lines = items.map((i) => `${i.qty} x ${i.name} (${i.sku}) - ${money(i.price * i.qty)}`).join('\n')
    const body = [
      `Order reference: ${ref}`, '', lines, '',
      `Subtotal: ${money(subtotal)}`, `Delivery (${chosen.label}): ${delivery === 0 ? 'Free' : money(delivery)}`, `Total: ${money(total)}`, '',
      'Deliver to:', form.name, form.line1, form.line2, form.city, form.postcode, form.country, '',
      `Email: ${form.email}`, `Phone: ${form.phone}`, form.notes ? `Notes: ${form.notes}` : '',
    ].filter((l) => l !== undefined).join('\n')
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`Order ${ref}`)}&body=${encodeURIComponent(body)}`
    setDone({ ref, total, email: form.email })
    clear()
    window.scrollTo(0, 0)
  }

  if (done) {
    return (
      <section className="wrap py-20 lg:py-28 max-w-2xl">
        <CheckCircle2 className="text-moss" size={40} strokeWidth={1.5} />
        <h1 className="mt-5 text-5xl">Order received</h1>
        <p className="mt-4 text-lg text-moss">Your order reference is <strong className="text-spruce">{done.ref}</strong>.</p>
        <ol className="mt-8 space-y-4 text-smoke">
          <li><strong className="text-spruce">1. Check your email.</strong> Your email app has opened with the order details. Send it so we receive your order.</li>
          <li><strong className="text-spruce">2. Pay securely.</strong> Within one working day we email a secure payment link for {money(done.total)} to {done.email}.</li>
          <li><strong className="text-spruce">3. We dispatch.</strong> Once payment is confirmed your order leaves our London studio within 1 to 2 working days.</li>
        </ol>
        <p className="mt-8 text-sm text-smoke">If your email app did not open, write to <a className="link text-spruce" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> quoting {done.ref}.</p>
        <Link to="/shop" className="btn-dark mt-8">Back to the shop</Link>
      </section>
    )
  }

  if (items.length === 0) {
    return (
      <section className="wrap py-20 text-center">
        <h1 className="text-4xl">Your basket is empty</h1>
        <p className="mt-3 text-smoke">Add something to your basket to check out.</p>
        <Link to="/shop" className="btn-dark mt-6">Browse the shop</Link>
      </section>
    )
  }

  const Err = ({ k }) => (errors[k] ? <p className="mt-1.5 text-sm text-ember-deep">{errors[k]}</p> : null)

  return (
    <section className="wrap py-12 lg:py-16">
      <h1 className="text-5xl">Checkout</h1>
      <form onSubmit={submit} noValidate className="mt-10 grid lg:grid-cols-[1fr_24rem] gap-10 lg:gap-14 items-start">
        <div className="space-y-10">
          <fieldset>
            <legend className="font-display text-2xl mb-5">Contact</legend>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2"><label className="field-label" htmlFor="name">Full name</label><input id="name" className="field" autoComplete="name" value={form.name} onChange={set('name')} /><Err k="name" /></div>
              <div><label className="field-label" htmlFor="email">Email</label><input id="email" type="email" className="field" autoComplete="email" value={form.email} onChange={set('email')} /><Err k="email" /></div>
              <div><label className="field-label" htmlFor="phone">Phone (for delivery updates)</label><input id="phone" type="tel" className="field" autoComplete="tel" value={form.phone} onChange={set('phone')} /></div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-display text-2xl mb-5">Delivery address</legend>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2"><label className="field-label" htmlFor="line1">Address line 1</label><input id="line1" className="field" autoComplete="address-line1" value={form.line1} onChange={set('line1')} /><Err k="line1" /></div>
              <div className="sm:col-span-2"><label className="field-label" htmlFor="line2">Address line 2 (optional)</label><input id="line2" className="field" autoComplete="address-line2" value={form.line2} onChange={set('line2')} /></div>
              <div><label className="field-label" htmlFor="city">Town or city</label><input id="city" className="field" autoComplete="address-level2" value={form.city} onChange={set('city')} /><Err k="city" /></div>
              <div><label className="field-label" htmlFor="postcode">Postcode</label><input id="postcode" className="field" autoComplete="postal-code" value={form.postcode} onChange={set('postcode')} /><Err k="postcode" /></div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="country">Country</label>
                <select id="country" className="field" value={form.country} onChange={(e) => { set('country')(e); setMethod(e.target.value === 'United Kingdom' ? 'standard' : 'intl') }}>
                  {['United Kingdom', 'Ireland', 'France', 'Germany', 'Netherlands', 'Belgium', 'Spain', 'Italy', 'Sweden', 'Denmark', 'United States', 'Canada', 'Australia'].map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-display text-2xl mb-5">Delivery method</legend>
            <div className="space-y-3">
              {available.map((m) => (
                <label key={m.id} className={`flex items-center justify-between gap-4 border p-4 cursor-pointer ${chosen.id === m.id ? 'border-spruce bg-white' : 'border-line'}`}>
                  <span className="flex items-center gap-3">
                    <input type="radio" name="method" checked={chosen.id === m.id} onChange={() => setMethod(m.id)} className="accent-[#17231F]" />
                    {m.label}
                  </span>
                  <span className="font-semibold">{m.price(subtotal) === 0 ? 'Free' : money(m.price(subtotal))}</span>
                </label>
              ))}
            </div>
            {!isUK && <p className="mt-3 text-sm text-smoke">Orders outside the UK may be charged import duties or taxes by the destination country.</p>}
          </fieldset>

          <div>
            <label className="field-label" htmlFor="notes">Order notes (optional)</label>
            <textarea id="notes" rows={3} className="field" placeholder="Gift message or delivery instructions" value={form.notes} onChange={set('notes')} />
          </div>
        </div>

        <aside className="bg-frost p-6 lg:sticky lg:top-32">
          <h2 className="text-2xl">Your order</h2>
          <ul className="mt-5 space-y-4">
            {items.map((i) => (
              <li key={i.slug} className="flex gap-3 text-sm">
                <img src={img(i.image)} alt="" className="w-14 h-16 object-cover" />
                <div className="flex-1"><p className="font-semibold">{i.name}</p><p className="text-smoke">Qty {i.qty}</p></div>
                <span>{money(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-6 pt-4 border-t border-line space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-smoke">Subtotal</dt><dd>{money(subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-smoke">Delivery</dt><dd>{delivery === 0 ? 'Free' : money(delivery)}</dd></div>
            <div className="flex justify-between pt-3 border-t border-line text-base font-semibold"><dt>Total</dt><dd>{money(total)}</dd></div>
          </dl>
          <p className="text-xs text-smoke mt-1">Includes VAT</p>

          <label className="mt-6 flex gap-3 text-sm text-smoke">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-1 accent-[#17231F]" />
            <span>I agree to the <Link to="/terms" className="link text-spruce">terms and conditions</Link> and have read the <Link to="/returns-policy" className="link text-spruce">returns policy</Link>.</span>
          </label>
          <Err k="agree" />
          <button type="submit" className="btn-dark w-full mt-5"><Lock size={16} />Place order</button>
          <p className="mt-4 text-xs leading-relaxed text-smoke">
            After you place your order we email you a secure payment link from our card processor. Your order is confirmed once payment is received. We never ask for card details by email or phone.
          </p>
        </aside>
      </form>
    </section>
  )
}
