import { Link } from 'react-router-dom'
import Logo from './Logo'
import { COMPANY } from '../data/company'

const COLS = [
  {
    title: 'Shop',
    links: [['/shop', 'All products'], ['/shop?c=Candles%20%26%20scent', 'Candles & scent'], ['/shop?c=Ceramics', 'Ceramics'], ['/shop?c=Textiles', 'Textiles']],
  },
  { title: 'Company', links: [['/about', 'About us'], ['/consultancy', 'IT consultancy'], ['/contact', 'Contact'], ['/faq', 'Help & FAQs']] },
  {
    title: 'Policies',
    links: [['/shipping-policy', 'Delivery'], ['/returns-policy', 'Returns & refunds'], ['/terms', 'Terms & conditions'], ['/privacy-policy', 'Privacy policy'], ['/cookie-policy', 'Cookie policy']],
  },
]

export default function Footer() {
  return (
    <footer className="bg-spruce text-snow/75 mt-auto">
      <div className="wrap py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo light />
          <address className="not-italic mt-6 text-sm leading-7">
            {COMPANY.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
          </address>
          <p className="mt-4 text-sm leading-7">
            <a href={COMPANY.phoneHref} className="hover:text-snow">{COMPANY.phone}</a>
            <br />
            <a href={`mailto:${COMPANY.email}`} className="hover:text-snow">{COMPANY.email}</a>
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <h2 className="font-sans text-sm font-semibold text-snow tracking-normal">{c.title}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.links.map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-snow">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-snow/10">
        <div className="wrap py-6 text-xs leading-6 text-snow/55 flex flex-col md:flex-row md:justify-between gap-2">
          <p>
            {COMPANY.legalName} is a private limited company registered in England and Wales
            {COMPANY.number ? `, company number ${COMPANY.number}` : ''}. Registered office: {COMPANY.address}.
          </p>
          <p className="whitespace-nowrap">© {new Date().getFullYear()} {COMPANY.legalName}</p>
        </div>
      </div>
    </footer>
  )
}
