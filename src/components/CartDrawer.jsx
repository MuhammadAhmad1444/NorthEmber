import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus } from 'lucide-react'
import { useCart, SHIPPING } from '../context/CartContext'
import { img, money } from '../data/company'

export function QtyControl({ value, onChange, small }) {
  return (
    <div className={`inline-flex items-center border border-line bg-white ${small ? 'h-9' : 'h-12'}`}>
      <button type="button" onClick={() => onChange(value - 1)} className="w-9 h-full grid place-items-center hover:bg-frost" aria-label="Decrease quantity">
        <Minus size={14} />
      </button>
      <span className="w-8 text-center text-sm font-semibold" aria-live="polite">{value}</span>
      <button type="button" onClick={() => onChange(value + 1)} className="w-9 h-full grid place-items-center hover:bg-frost" aria-label="Increase quantity">
        <Plus size={14} />
      </button>
    </div>
  )
}

export default function CartDrawer() {
  const { open, setOpen, items, subtotal, setQty, remove } = useCart()
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])
  const toFree = Math.max(0, SHIPPING.freeOver - subtotal)

  return (
    <div className={`fixed inset-0 z-[80] ${open ? '' : 'pointer-events-none invisible'}`} aria-hidden={!open}>
      <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-spruce/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />
      <aside
        role="dialog"
        aria-label="Your basket"
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-snow flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-line">
          <h2 className="text-2xl">Your basket</h2>
          <button onClick={() => setOpen(false)} className="p-2 hover:bg-frost" aria-label="Close basket"><X size={20} /></button>
        </div>
        {items.length === 0 ? (
          <div className="flex-1 grid place-items-center px-8 text-center">
            <div>
              <p className="text-smoke">Your basket is empty.</p>
              <Link to="/shop" onClick={() => setOpen(false)} className="btn-dark mt-5">Browse the shop</Link>
            </div>
          </div>
        ) : (
          <>
            <div className="px-6 py-3 bg-frost text-sm text-moss">
              {toFree > 0 ? `Add ${money(toFree)} more for free UK delivery.` : 'Your order qualifies for free UK delivery.'}
            </div>
            <ul className="flex-1 overflow-y-auto divide-y divide-line px-6">
              {items.map((i) => (
                <li key={i.slug} className="py-5 flex gap-4">
                  <img src={img(i.image)} alt="" className="w-20 h-24 object-cover bg-frost" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-3">
                      <Link to={`/shop/${i.slug}`} onClick={() => setOpen(false)} className="font-semibold leading-snug hover:text-pine">{i.name}</Link>
                      <span className="font-semibold">{money(i.price * i.qty)}</span>
                    </div>
                    <p className="text-sm text-smoke">{money(i.price)} each</p>
                    <div className="mt-3 flex items-center justify-between">
                      <QtyControl small value={i.qty} onChange={(q) => setQty(i.slug, q)} />
                      <button onClick={() => remove(i.slug)} className="text-sm text-smoke underline underline-offset-2 hover:text-spruce">Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-line p-6 space-y-3">
              <div className="flex justify-between text-lg"><span>Subtotal</span><span className="font-semibold">{money(subtotal)}</span></div>
              <p className="text-sm text-smoke">Prices include VAT. Delivery is calculated at checkout.</p>
              <Link to="/checkout" onClick={() => setOpen(false)} className="btn-dark w-full">Go to checkout</Link>
              <Link to="/cart" onClick={() => setOpen(false)} className="btn-line w-full">View basket</Link>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
