import { Link } from 'react-router-dom'
import { COMPANY } from '../data/company'
import { SHIPPING } from '../context/CartContext'

const GROUPS = [
  {
    title: 'Orders and payment',
    items: [
      ['How do I place an order?', 'Add products to your basket and go to checkout. Once you place the order we email a secure payment link from our card processor. Your order is confirmed and dispatched once payment is received.'],
      ['Which payment methods do you accept?', 'Major debit and credit cards through our secure payment provider. We never ask for card details by email or phone.'],
      ['Can I change or cancel my order?', `Yes, until it is dispatched. Email ${COMPANY.email} with your order reference as soon as possible.`],
      ['Do you charge VAT?', 'All prices on the shop include UK VAT where applicable.'],
    ],
  },
  {
    title: 'Delivery',
    items: [
      ['How much is delivery?', `UK standard delivery is £${SHIPPING.standard.toFixed(2)}, free on orders over £${SHIPPING.freeOver}. Express next working day delivery is £${SHIPPING.express}. International tracked delivery starts at £14.95.`],
      ['How long will it take?', 'Orders are dispatched from London within 1 to 2 working days. UK standard delivery takes 2 to 4 working days after dispatch; international orders 5 to 10 working days.'],
      ['Do you ship outside the UK?', 'Yes, to Ireland, most of Europe, the United States, Canada and Australia. Import duties or taxes may be charged by the destination country.'],
    ],
  },
  {
    title: 'Returns',
    items: [
      ['What is your returns policy?', 'You can return unused items in their original condition within 30 days of delivery for a full refund of the item price. Candles that have been burned cannot be returned unless faulty.'],
      ['My item arrived damaged. What should I do?', 'We are sorry. Email us a photo within 7 days of delivery and we will send a replacement or a full refund, including delivery costs.'],
    ],
  },
  {
    title: 'Products',
    items: [
      ['Are your candles safe?', 'They are made from natural soy wax with cotton wicks and comply with UK CLP labelling. Never leave a burning candle unattended and keep it away from children, pets and draughts.'],
      ['Do you offer gift wrapping?', 'Every order is packed in recycled card ready to give. Add a gift message in the order notes at checkout and we will include a handwritten card.'],
    ],
  },
]

export default function Faq() {
  return (
    <>
      <header className="bg-frost border-b border-line">
        <div className="wrap py-14 lg:py-20">
          <h1 className="text-5xl lg:text-6xl">Help & FAQs</h1>
          <p className="mt-4 max-w-xl text-lg text-moss">Answers to the questions we are asked most. Can't find yours? <Link to="/contact" className="link text-spruce">Contact us</Link>.</p>
        </div>
      </header>
      <div className="wrap py-14 lg:py-20 space-y-14">
        {GROUPS.map((g) => (
          <section key={g.title} className="grid lg:grid-cols-[16rem_1fr] gap-6 lg:gap-12">
            <h2 className="text-3xl">{g.title}</h2>
            <div className="border-t border-line">
              {g.items.map(([q, a]) => (
                <details key={q} className="border-b border-line py-5 group">
                  <summary className="cursor-pointer list-none flex justify-between gap-6 font-semibold">
                    {q}<span className="text-smoke text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-smoke leading-relaxed max-w-prose">{a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
