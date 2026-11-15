import { COMPANY } from '../data/company'

export default function LegalPage({ title, updated, intro, children }) {
  return (
    <div>
      <header className="bg-frost border-b border-line">
        <div className="wrap py-14 lg:py-20">
          <h1 className="text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-4 text-smoke">Last updated {updated}</p>
          {intro && <p className="mt-5 max-w-2xl text-lg text-moss">{intro}</p>}
        </div>
      </header>
      <div className="wrap py-12 lg:py-16 legal">
        {children}
        <h2>Contact</h2>
        <p>
          {COMPANY.legalName}, {COMPANY.address}.<br />
          Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or call{' '}
          <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>.
        </p>
      </div>
    </div>
  )
}
