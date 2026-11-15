import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Truck, RotateCcw } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { QtyControl } from '../components/CartDrawer'
import { findProduct, PRODUCTS } from '../data/products'
import { img, money } from '../data/company'
import { useCart, SHIPPING } from '../context/CartContext'
import NotFound from './NotFound'

export default function Product() {
  const { slug } = useParams()
  const p = findProduct(slug)
  const { add } = useCart()
  const [qty, setQty] = useState(1)

  useEffect(() => {
    setQty(1)
    if (p) document.title = `${p.name} | North Ember`
  }, [slug, p])

  if (!p) return <NotFound />
  const related = PRODUCTS.filter((x) => x.slug !== p.slug && x.category === p.category).concat(PRODUCTS.filter((x) => x.category !== p.category)).slice(0, 4)

  return (
    <>
      <nav className="wrap pt-6 text-sm text-smoke" aria-label="Breadcrumb">
        <Link to="/shop" className="hover:text-spruce">Shop</Link>
        <span className="mx-2">/</span>
        <Link to={`/shop?c=${encodeURIComponent(p.category)}`} className="hover:text-spruce">{p.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-spruce">{p.name}</span>
      </nav>

      <section className="wrap py-8 lg:py-12 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="bg-frost self-start lg:sticky lg:top-32">
          <img src={img(p.image)} alt={p.name} className="w-full aspect-[4/5] object-cover" />
        </div>
        <div className="lg:py-6">
          <h1 className="text-4xl lg:text-5xl">{p.name}</h1>
          <p className="mt-4 text-2xl font-semibold">{money(p.price)}</p>
          <p className="text-sm text-smoke">Including VAT</p>
          <p className="mt-6 text-lg text-moss leading-relaxed">{p.short}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <QtyControl value={qty} onChange={(q) => setQty(Math.max(1, Math.min(20, q)))} />
            <button onClick={() => add(p.slug, qty)} className="btn-dark h-12 flex-1 min-w-[12rem]">Add to basket</button>
          </div>
          <p className="mt-3 text-sm text-moss">In stock, dispatched within 1 to 2 working days.</p>

          <div className="mt-10 border-t border-line">
            <details open className="border-b border-line py-5 group">
              <summary className="cursor-pointer font-semibold list-none flex justify-between">About this piece<span className="text-smoke group-open:rotate-45 transition-transform">+</span></summary>
              <p className="mt-3 text-smoke leading-relaxed">{p.description}</p>
            </details>
            <details className="border-b border-line py-5 group">
              <summary className="cursor-pointer font-semibold list-none flex justify-between">Details and care<span className="text-smoke group-open:rotate-45 transition-transform">+</span></summary>
              <ul className="mt-3 text-smoke space-y-1">
                {p.details.map((d) => <li key={d}>{d}</li>)}
                <li>Product code {p.sku}</li>
              </ul>
            </details>
            <details className="border-b border-line py-5 group">
              <summary className="cursor-pointer font-semibold list-none flex justify-between">Delivery and returns<span className="text-smoke group-open:rotate-45 transition-transform">+</span></summary>
              <div className="mt-3 text-smoke space-y-3">
                <p className="flex gap-3"><Truck size={18} className="shrink-0 mt-1 text-ember-deep" />UK standard delivery £{SHIPPING.standard.toFixed(2)}, free over £{SHIPPING.freeOver}. Express next working day £{SHIPPING.express}.</p>
                <p className="flex gap-3"><RotateCcw size={18} className="shrink-0 mt-1 text-ember-deep" />Return unused items within 30 days for a full refund. <Link to="/returns-policy" className="link text-spruce">Returns policy</Link></p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="wrap py-16 border-t border-line">
        <h2 className="text-3xl mb-8">You might also like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {related.map((r) => <ProductCard key={r.slug} p={r} />)}
        </div>
      </section>
    </>
  )
}
