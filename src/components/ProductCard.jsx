import { Link } from 'react-router-dom'
import { img, money } from '../data/company'

export default function ProductCard({ p }) {
  return (
    <Link to={`/shop/${p.slug}`} className="group block">
      <div className="aspect-[4/5] overflow-hidden bg-frost">
        <img src={img(p.image)} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-sans text-base font-semibold tracking-normal group-hover:text-pine">{p.name}</h3>
          <p className="text-sm text-smoke mt-0.5">{p.category}</p>
        </div>
        <p className="font-semibold whitespace-nowrap">{money(p.price)}</p>
      </div>
    </Link>
  )
}
