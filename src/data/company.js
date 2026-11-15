// Single source of truth for company details.
// Add the Companies House number to `number` when it is issued; it then appears site-wide.
export const COMPANY = {
  brand: 'North Ember',
  legalName: 'North Ember Ltd',
  number: '17580441',
  incorporated: '13 November 2026',
  addressLines: ['Office 2261', '60 Tottenham Court Road', 'Fitzrovia, London', 'W1T 2EW'],
  address: 'Office 2261, 60 Tottenham Court Road, Fitzrovia, London, W1T 2EW',
  phone: '+44 7460 676834',
  phoneHref: 'tel:+447460676834',
  email: 'info@northember.online',
  domain: 'northember.online',
  hours: 'Monday to Friday, 9:00 to 17:30 (UK time)',
}

export const img = (name) => `${import.meta.env.BASE_URL}images/${name}.jpg`
export const money = (n) => `£${n.toFixed(2)}`
