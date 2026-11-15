import { Link } from 'react-router-dom'
import { COMPANY, img } from '../data/company'

const VALUES = [
  ['Made to be used', 'We choose products for how they perform day to day: burn time, heat retention, how fabric wears after twenty washes.'],
  ['Small makers, fair terms', 'We buy from a short list of UK and European makers, pay on time and order in quantities that suit them.'],
  ['Less packaging', 'Orders ship in recycled card with paper tape. No plastic void fill, no unnecessary inserts.'],
  ['Straight answers', 'Whether you are a customer or a consultancy client, you get a clear reply from a person who knows the answer.'],
]

export default function About() {
  return (
    <>
      <section className="wrap py-16 lg:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-end">
        <div>
          <p className="kicker">About {COMPANY.legalName}</p>
          <h1 className="mt-4 text-5xl lg:text-7xl">{COMPANY.legalName}: a small London company with two crafts.</h1>
          <p className="mt-5 text-smoke">Private limited company registered in England and Wales{COMPANY.number ? `, company number ${COMPANY.number}` : ''}.</p>
        </div>
        <p className="text-lg text-moss leading-relaxed">
          {COMPANY.legalName} sells home and living goods online and provides IT consultancy to small businesses. Both come from the same place: a belief that the things you use every day should be chosen carefully and work properly.
        </p>
      </section>

      <img src={img('living-lounge')} alt="A bright, calm living room" className="w-full h-[42vh] lg:h-[60vh] object-cover" />

      <section className="wrap py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="text-4xl">The shop</h2>
          <p className="mt-5 text-smoke leading-relaxed">
            North Ember began with a candle. We wanted one that burned cleanly, smelled like a winter walk rather than a sweet shop and came in a glass worth keeping. Finding one took months; making our own with a small chandler took longer.
          </p>
          <p className="mt-4 text-smoke leading-relaxed">
            The collection has grown slowly since: stoneware from a pottery that throws by hand, washed linen, a few everyday pieces. Everything is stocked and packed at our London studio and sent to customers across the UK and abroad.
          </p>
        </div>
        <div>
          <h2 className="text-4xl">The consultancy</h2>
          <p className="mt-5 text-smoke leading-relaxed">
            Building and running our own online shop meant learning the hard parts: platforms, payments, data protection, email that actually arrives. Other small businesses started asking for help, and that work became our consultancy practice.
          </p>
          <p className="mt-4 text-smoke leading-relaxed">
            We keep it focused on businesses like ours. Fixed prices, plain English and documentation you can keep. <Link to="/consultancy" className="link text-spruce">See what we offer</Link>.
          </p>
        </div>
      </section>

      <section className="bg-pine text-snow">
        <div className="wrap py-20 lg:py-24">
          <h2 className="text-snow text-4xl lg:text-5xl">What we hold ourselves to</h2>
          <dl className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {VALUES.map(([t, d]) => (
              <div key={t} className="border-t border-snow/20 pt-5">
                <dt className="font-display text-2xl text-snow">{t}</dt>
                <dd className="mt-2 text-snow/70 leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="wrap py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl">Company information</h2>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {[
              ['Registered name', COMPANY.legalName],
              ['Company type', 'Private limited company, registered in England and Wales'],
              ...(COMPANY.number ? [['Company number', COMPANY.number]] : []),
              ['Registered office', COMPANY.address],
              ['Activities', 'Online retail of home and living goods; information technology consultancy'],
              ['Email', COMPANY.email],
              ['Telephone', COMPANY.phone],
            ].map(([k, v]) => (
              <div key={k} className="py-3.5 grid sm:grid-cols-[11rem_1fr] gap-1">
                <dt className="text-sm font-semibold">{k}</dt>
                <dd className="text-smoke">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img src={img('london')} alt="Aerial view of London and the River Thames" loading="lazy" className="w-full aspect-[4/3] object-cover" />
      </section>
    </>
  )
}
