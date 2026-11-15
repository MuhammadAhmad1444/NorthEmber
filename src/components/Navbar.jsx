import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag } from 'lucide-react'
import Logo from './Logo'
import { useCart, SHIPPING } from '../context/CartContext'

const LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/consultancy', label: 'IT consultancy' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count, setOpen: openCart } = useCart()
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-spruce text-snow/85 text-[13px]">
        <div className="wrap py-2 flex justify-center sm:justify-between gap-4">
          <p>Free UK delivery on orders over £{SHIPPING.freeOver}</p>
          <p className="hidden sm:block">Dispatched from London within 1 to 2 working days</p>
        </div>
      </div>
      <div className="bg-snow/95 backdrop-blur border-b border-line">
        <nav className="wrap h-16 lg:h-[72px] flex items-center justify-between" aria-label="Main">
          <Link to="/" aria-label="North Ember home"><Logo /></Link>
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-colors ${isActive ? 'text-spruce underline decoration-ember decoration-2 underline-offset-[10px]' : 'text-smoke hover:text-spruce'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => openCart(true)}
              className="relative p-2.5 hover:bg-frost transition-colors"
              aria-label={`Open basket, ${count} item${count === 1 ? '' : 's'}`}
            >
              <ShoppingBag size={21} strokeWidth={1.7} />
              {count > 0 && (
                <span className="absolute top-1 right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-ember text-spruce text-[11px] font-bold grid place-items-center">
                  {count}
                </span>
              )}
            </button>
            <button className="md:hidden p-2.5 hover:bg-frost" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[100px] bottom-0 bg-snow z-40 border-t border-line overflow-y-auto">
          <div className="wrap py-6 flex flex-col">
            {[{ to: '/', label: 'Home' }, ...LINKS, { to: '/faq', label: 'Help & FAQs' }].map((l) => (
              <NavLink key={l.to} to={l.to} end className="font-display text-3xl py-3 border-b border-line">
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
