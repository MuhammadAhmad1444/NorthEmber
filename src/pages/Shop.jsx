import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, CATEGORIES } from '../data/products'

const SORTS = {
  featured: { label: 'Featured', fn: (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) },
  low: { label: 'Price, low to high', fn: (a, b) => a.price - b.price },
  high: { label: 'Price, high to low', fn: (a, b) => b.price - a.price },
  name: { label: 'Name, A to Z', fn: (a, b) => a.name.localeCompare(b.name) },
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const cat = params.get('c') || 'All'
  const sort = SORTS[params.get('s')] ? params.get('s') : 'featured'

  const list = useMemo(
    () => PRODUCTS.filter((p) => cat === 'All' || p.category === cat).sort(SORTS[sort].fn),
    [cat, sort],
  )

  const update = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'All' || value === 'featured') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  return (
    <>
      <header className="bg-frost border-b border-line">
        <div className="wrap py-14 lg:py-20">
          <h1 className="text-5xl lg:text-6xl">{cat === 'All' ? 'The shop' : cat}</h1>
          <p className="mt-4 max-w-xl text-lg text-moss">
            Every product is in stock in London and dispatched within 1 to 2 working days. Prices include VAT.
          </p>
        </div>
      </header>

      <section className="wrap py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-8 mb-10 border-b border-line">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {['All', ...CATEGORIES].map((c) => (
              <button
                key={c}
                onClick={() => update('c', c)}
                aria-pressed={cat === c}
                className={`px-4 py-2 text-sm font-medium border transition-colors ${cat === c ? 'bg-spruce border-spruce text-snow' : 'border-line text-smoke hover:border-spruce hover:text-spruce'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 text-sm text-smoke">
            Sort by
            <select value={sort} onChange={(e) => update('s', e.target.value)} className="field py-2 w-auto">
              {Object.entries(SORTS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </label>
        </div>

        <p className="text-sm text-smoke mb-6">{list.length} product{list.length === 1 ? '' : 's'}</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
          {list.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>
    </>
  )
}
