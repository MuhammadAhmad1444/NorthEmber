import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { findProduct } from '../data/products'

const KEY = 'northember_cart_v1'
const CartContext = createContext(null)

export const SHIPPING = { freeOver: 50, standard: 4.5, express: 8.95 }

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((l) => findProduct(l.slug)) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(load)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(lines)) } catch { /* storage unavailable */ }
  }, [lines])

  const api = useMemo(() => {
    const items = lines.map((l) => ({ ...findProduct(l.slug), qty: l.qty }))
    const count = lines.reduce((n, l) => n + l.qty, 0)
    const subtotal = items.reduce((n, i) => n + i.price * i.qty, 0)
    return {
      items, count, subtotal, open, setOpen,
      add(slug, qty = 1) {
        setLines((prev) => {
          const found = prev.find((l) => l.slug === slug)
          if (found) return prev.map((l) => (l.slug === slug ? { ...l, qty: Math.min(l.qty + qty, 20) } : l))
          return [...prev, { slug, qty }]
        })
        setOpen(true)
      },
      setQty(slug, qty) {
        setLines((prev) => (qty <= 0 ? prev.filter((l) => l.slug !== slug) : prev.map((l) => (l.slug === slug ? { ...l, qty: Math.min(qty, 20) } : l))))
      },
      remove(slug) { setLines((prev) => prev.filter((l) => l.slug !== slug)) },
      clear() { setLines([]) },
    }
  }, [lines, open])

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
