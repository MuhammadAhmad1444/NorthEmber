import { Link } from 'react-router-dom'
import { Truck, RotateCcw, ShieldCheck, MessageSquare } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'
import { img } from '../data/company'
import { SHIPPING } from '../context/CartContext'

const PROMISES = [
  { icon: Truck, title: 'Delivered across the UK', text: `Free on orders over £${SHIPPING.freeOver}. Most orders arrive in 2 to 4 working days.` },
  { icon: RotateCcw, title: '30 days to return', text: 'Changed your mind? Send unused items back within 30 days for a full refund.' },
  { icon: ShieldCheck, title: 'Secure payment', text: 'Payments are handled by our card processor. We never see or store your card details.' },
  { icon: MessageSquare, title: 'Real people in London', text: 'Questions about an order are answered by our own team, usually the same working day.' },
]

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-spruce text-snow overflow-hidden">
        <div
          aria-hidden="true"
          className="ember-glow pointer-events-none absolute -left-40 bottom-[-18rem] w-[46rem] h-[46rem] rounded-full"
          style={{ background: 'radial-gradient(closest-side, rgba(224,137,43,0.38), rgba(224,137,43,0) 70%)' }}
        />
        <div className="wrap relative grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center py-14 lg:py-24">
          <div className="hero-in">
            <h1 className="text-snow text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.4rem]">
              Warmth for the long evenings.
            </h1>
            <p className="mt-6 max-w-md text-lg text-snow/75">
              Candles, ceramics and textiles chosen for slower nights at home. Poured, thrown and woven by small makers, sent from our London studio.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-ember">Shop the collection</Link>
              <Link to="/consultancy" className="btn-line-light">IT consultancy</Link>
            </div>
          </div>
          <div className="relative hero-in" style={{ animationDelay: '120ms' }}>
            <img
              src={img('hero')}
              alt="Hands cupping a lit amber candle on a dark table"
              className="w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] object-cover"
              fetchpriority="high"
            />
            <div className="absolute left-0 bottom-0 bg-snow text-spruce px-5 py-4 max-w-[17rem]">
              <p className="font-display text-xl leading-snug">Amber & Cedar</p>
              <p className="text-sm text-smoke mt-1">Our signature soy candle, around 45 hours of burn.</p>
              <Link to="/shop/amber-cedar-soy-candle" className="link text-sm font-semibold mt-2 inline-block">View candle</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="wrap py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl lg:text-5xl">Most loved this season</h2>
            <p className="mt-3 text-smoke max-w-lg">The pieces customers come back for, from the candle that started it all to stackable stoneware.</p>
          </div>
          <Link to="/shop" className="btn-line">See all products</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {featured.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* Promises */}
      <section className="bg-frost border-y border-line">
        <dl className="wrap grid sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {PROMISES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <Icon className="text-ember-deep shrink-0 mt-0.5" size={22} strokeWidth={1.7} />
              <div>
                <dt className="font-semibold">{title}</dt>
                <dd className="text-sm text-smoke mt-1 leading-relaxed">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      {/* Story band */}
      <section className="wrap py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="grid grid-cols-5 gap-4">
          <img src={img('living-room')} alt="A calm living room with a sofa, rug and soft daylight" loading="lazy" className="col-span-3 aspect-[3/4] object-cover" />
          <img src={img('vase-trio')} alt="Three matte clay vases" loading="lazy" className="col-span-2 self-end aspect-[3/4] object-cover" />
        </div>
        <div>
          <h2 className="text-4xl lg:text-5xl">Fewer things, made properly.</h2>
          <p className="mt-6 text-lg text-moss leading-relaxed">
            We started North Ember because we wanted a home that felt calm without buying a lot to get there. Every piece we sell is something we use ourselves: candles that burn cleanly to the bottom of the glass, mugs heavy enough to hold heat, linen that gets better with washing.
          </p>
          <p className="mt-4 text-smoke leading-relaxed">
            We work with a short list of makers, keep stock small and reorder often, which is why some things sell out and come back.
          </p>
          <Link to="/about" className="btn-dark mt-8">Read our story</Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-pine text-snow">
        <div className="wrap py-20 lg:py-24">
          <h2 className="text-snow text-4xl lg:text-5xl max-w-xl">Shop by room and ritual</h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              { label: 'Candles & scent', image: 'candle-fireside', text: 'Soy candles, room oils and gift sets.' },
              { label: 'Ceramics', image: 'tumbler-set', text: 'Mugs, tumblers and small vases.' },
              { label: 'Textiles', image: 'cushion-linen', text: 'Washed linen for sofas and beds.' },
            ].map((c) => (
              <Link key={c.label} to={`/shop?c=${encodeURIComponent(c.label)}`} className="group block bg-spruce">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img(c.image)} alt="" loading="lazy" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition duration-700" />
                </div>
                <div className="p-5">
                  <p className="font-display text-2xl text-snow">{c.label}</p>
                  <p className="text-sm text-snow/65 mt-1">{c.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy */}
      <section className="wrap py-20 lg:py-28 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <p className="kicker">North Ember for business</p>
          <h2 className="mt-3 text-4xl lg:text-5xl">IT consultancy for small teams</h2>
          <p className="mt-6 text-lg text-moss leading-relaxed">
            Running an online shop taught us what small businesses actually need from their technology. We now help other independents choose, set up and look after the systems they rely on.
          </p>
          <ul className="mt-6 space-y-2 text-smoke">
            <li>Systems reviews and technology roadmaps</li>
            <li>E-commerce platform selection and migration</li>
            <li>Microsoft 365 and Google Workspace setup</li>
            <li>Cyber Essentials readiness and data protection</li>
          </ul>
          <Link to="/consultancy" className="btn-dark mt-8">See consultancy services</Link>
        </div>
        <img src={img('consult-team')} alt="Two consultants working at a desk with monitors" loading="lazy" className="order-1 lg:order-2 w-full aspect-[4/3] object-cover" />
      </section>

      {/* Contact strip */}
      <section className="bg-frost border-t border-line">
        <div className="wrap py-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl">Need help with an order?</h2>
            <p className="mt-2 text-smoke">Our team replies to every message within one working day.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-dark">Contact us</Link>
            <Link to="/faq" className="btn-line">Read the FAQs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
