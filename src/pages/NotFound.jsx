import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="wrap py-24 lg:py-32 max-w-2xl">
      <h1 className="text-5xl lg:text-6xl">We couldn't find that page</h1>
      <p className="mt-5 text-lg text-moss">The link may be out of date, or the product may have sold out and been removed.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/shop" className="btn-dark">Browse the shop</Link>
        <Link to="/" className="btn-line">Go to the homepage</Link>
      </div>
    </section>
  )
}
