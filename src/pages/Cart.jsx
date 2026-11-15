import { Link } from 'react-router-dom'
import { useCart, SHIPPING } from '../context/CartContext'
import { QtyControl } from '../components/CartDrawer'
import { img, money } from '../data/company'

export default function Cart() {
  const { items, subtotal, setQty, remove } = useCart()
  const delivery = subtotal >= SHIPPING.freeOver || subtotal === 0 ? 0 : SHIPPING.standard

  return (
    <section className="wrap py-14 lg:py-20">
      <h1 className="text-5xl">Your basket</h1>
      {items.length === 0 ? (
        <div className="mt-10 bg-frost p-10 text-center">
          <p className="text-lg text-moss">There is nothing in your basket yet.</p>
          <Link to="/shop" className="btn-dark mt-6">Browse the shop</Link>
        </div>
      ) : (
        <div className="mt-10 grid lg:grid-cols-[1fr_22rem] gap-10 lg:gap-14 items-start">
          <ul className="divide-y divide-line border-y border-line">
            {items.map((i) => (
              <li key={i.slug} className="py-6 flex gap-5">
                <img src={img(i.image)} alt="" className="w-24 h-28 sm:w-28 sm:h-32 object-cover bg-frost" />
                <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-3">
                  <div>
                    <Link to={`/shop/${i.slug}`} className="font-semibold text-lg hover:text-pine">{i.name}</Link>
                    <p className="text-sm text-smoke">{i.category} · {money(i.price)} each</p>
                    <button onClick={() => remove(i.slug)} className="mt-2 text-sm text-smoke underline underline-offset-2 hover:text-spruce">Remove</button>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3">
                    <QtyControl small value={i.qty} onChange={(q) => setQty(i.slug, q)} />
                    <span className="font-semibold">{money(i.price * i.qty)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <aside className="bg-frost p-6 lg:sticky lg:top-32">
            <h2 className="text-2xl">Order summary</h2>
            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-smoke">Subtotal</dt><dd>{money(subtotal)}</dd></div>
              <div className="flex justify-between"><dt className="text-smoke">UK standard delivery</dt><dd>{delivery === 0 ? 'Free' : money(delivery)}</dd></div>
              <div className="flex justify-between border-t border-line pt-3 text-base font-semibold"><dt>Estimated total</dt><dd>{money(subtotal + delivery)}</dd></div>
            </dl>
            <p className="mt-3 text-xs text-smoke">Includes VAT. Choose express or international delivery at checkout.</p>
            <Link to="/checkout" className="btn-dark w-full mt-6">Go to checkout</Link>
            <Link to="/shop" className="block text-center text-sm mt-4 link">Continue shopping</Link>
          </aside>
        </div>
      )}
    </section>
  )
}
