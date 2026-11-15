import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const KEY = 'northember_cookie_choice'

export default function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    let seen = null
    try { seen = localStorage.getItem(KEY) } catch { /* ignore */ }
    if (!seen) { const t = setTimeout(() => setShow(true), 1200); return () => clearTimeout(t) }
  }, [])
  const choose = (v) => { try { localStorage.setItem(KEY, v) } catch { /* ignore */ } setShow(false) }
  if (!show) return null
  return (
    <div role="dialog" aria-label="Cookie preferences" className="fixed inset-x-3 bottom-3 sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-sm z-[70] bg-spruce text-snow p-5 shadow-2xl hero-in">
      <p className="text-sm leading-relaxed text-snow/85">
        We use essential cookies to run the shop and your basket. With your consent we also use analytics cookies to understand how the site is used.{' '}
        <Link to="/cookie-policy" className="underline underline-offset-2 text-snow">Cookie policy</Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button onClick={() => choose('all')} className="btn-ember py-2 px-4 text-sm">Accept all</button>
        <button onClick={() => choose('essential')} className="btn-line-light py-2 px-4 text-sm">Essential only</button>
      </div>
    </div>
  )
}
