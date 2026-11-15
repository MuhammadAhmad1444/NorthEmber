import { Link } from 'react-router-dom'
import { img } from '../data/company'

const SERVICES = [
  {
    title: 'Technology review and roadmap',
    price: 'From £650',
    text: 'A structured look at the systems, devices and subscriptions your business runs on. You get a written report with what to keep, what to change and a costed 12-month plan.',
    includes: ['Half-day discovery session', 'Audit of software, licences and devices', 'Written report and prioritised roadmap'],
  },
  {
    title: 'E-commerce platform setup and migration',
    price: 'From £1,450',
    text: 'Choosing, configuring or moving an online shop: product catalogue, payments, delivery rules, VAT settings and the policies you need to trade legally in the UK.',
    includes: ['Platform recommendation', 'Catalogue and payment configuration', 'Launch checklist and handover training'],
  },
  {
    title: 'Microsoft 365 and Google Workspace',
    price: 'From £395',
    text: 'Business email on your own domain, shared drives, sensible permissions and multi-factor sign-in, set up properly the first time.',
    includes: ['Domain and email configuration', 'User accounts and shared storage', 'Security baseline with MFA'],
  },
  {
    title: 'Cyber Essentials readiness and data protection',
    price: 'From £550',
    text: 'Practical preparation for the government-backed Cyber Essentials scheme, plus a UK GDPR review of how you collect and store customer data.',
    includes: ['Gap assessment against the five controls', 'Remediation guidance', 'Privacy notice and data map review'],
  },
  {
    title: 'Ongoing IT support retainer',
    price: 'From £180 per month',
    text: 'A named consultant for questions, small changes and new starters, with a monthly health check of your accounts and backups.',
    includes: ['Email and video support in working hours', 'Monthly health check', 'Discounted project rates'],
  },
]

const STEPS = [
  ['Introductory call', 'A free 30-minute call to understand your business and what is not working.'],
  ['Written proposal', 'A fixed-price proposal with scope, timings and deliverables. No hourly surprises.'],
  ['Delivery', 'We do the work with you, keeping changes documented and explained in plain English.'],
  ['Handover', 'You receive documentation, logins and a recorded walkthrough so your team stays in control.'],
]

export default function Consultancy() {
  return (
    <>
      <section className="bg-spruce text-snow">
        <div className="wrap py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-ember-glow">North Ember for business</p>
            <h1 className="mt-4 text-snow text-5xl lg:text-6xl">IT consultancy for small businesses</h1>
            <p className="mt-6 text-lg text-snow/75 max-w-lg">
              Independent advice and hands-on setup for businesses of 1 to 50 people. We recommend what fits, not what pays us commission.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact?topic=consultancy" className="btn-ember">Book an introductory call</Link>
              <a href="#services" className="btn-line-light">View services and prices</a>
            </div>
          </div>
          <img src={img('consult-laptop')} alt="A person working on a laptop" className="w-full aspect-[4/3] object-cover" />
        </div>
      </section>

      <section id="services" className="wrap py-20 lg:py-28 scroll-mt-28">
        <h2 className="text-4xl lg:text-5xl max-w-2xl">Services and starting prices</h2>
        <p className="mt-4 text-smoke max-w-2xl">Every project is quoted at a fixed price after an introductory call. Prices exclude VAT.</p>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {SERVICES.map((s) => (
            <article key={s.title} className="py-8 grid lg:grid-cols-[1.1fr_1.4fr_auto] gap-4 lg:gap-12">
              <h3 className="text-2xl">{s.title}</h3>
              <div>
                <p className="text-smoke leading-relaxed">{s.text}</p>
                <ul className="mt-3 text-sm text-moss space-y-1 list-disc pl-5">
                  {s.includes.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
              <p className="font-semibold whitespace-nowrap lg:text-right">{s.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-frost border-y border-line">
        <div className="wrap py-20 lg:py-24">
          <h2 className="text-4xl lg:text-5xl">How a project works</h2>
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t-2 border-spruce pt-5">
                <span className="font-display text-4xl text-ember-deep">{i + 1}</span>
                <h3 className="mt-3 font-sans text-lg font-semibold tracking-normal">{t}</h3>
                <p className="mt-2 text-sm text-smoke leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <img src={img('consult-analytics')} alt="A laptop showing a sales dashboard" loading="lazy" className="w-full aspect-[4/3] object-cover" />
        <div>
          <h2 className="text-4xl">Who we work with</h2>
          <p className="mt-5 text-lg text-moss leading-relaxed">
            Independent retailers, studios, clinics, charities and professional practices across the UK. Most of our clients do not have an IT department and want someone who will explain the options clearly and then get it done.
          </p>
          <p className="mt-4 text-smoke leading-relaxed">
            Work is delivered remotely across the UK, with on-site visits available in London.
          </p>
          <Link to="/contact?topic=consultancy" className="btn-dark mt-8">Tell us about your business</Link>
        </div>
      </section>
    </>
  )
}
