import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import { COMPANY } from '../data/company'
import { SHIPPING } from '../context/CartContext'

const UPDATED = '15 November 2026'
const Mail = () => <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
const Who = () => (
  <>
    <strong>{COMPANY.legalName}</strong>, a private limited company registered in England and Wales
    {COMPANY.number ? <> (company number {COMPANY.number})</> : null}, with its registered office at {COMPANY.address}
  </>
)

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy policy" updated={UPDATED} intro="How we collect, use and protect your personal data when you shop with us, contact us or use our consultancy services.">
      <h2>Who we are</h2>
      <p><Who />, is the data controller for personal data collected through {COMPANY.domain}. We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>Order details:</strong> name, email, phone number, delivery address and the products you buy.</li>
        <li><strong>Enquiries:</strong> the information you include when you contact us or request a consultancy proposal.</li>
        <li><strong>Payment:</strong> payments are processed by our card payment provider. We receive confirmation of payment but never your full card number.</li>
        <li><strong>Technical data:</strong> IP address, browser type and pages visited, collected through essential cookies and, with your consent, analytics cookies.</li>
      </ul>

      <h2>How and why we use it</h2>
      <table>
        <thead><tr><th>Purpose</th><th>Lawful basis</th></tr></thead>
        <tbody>
          <tr><td>Processing and delivering your order, handling returns</td><td>Performance of a contract</td></tr>
          <tr><td>Replying to enquiries and providing consultancy services</td><td>Contract, or our legitimate interests</td></tr>
          <tr><td>Keeping accounting and tax records</td><td>Legal obligation</td></tr>
          <tr><td>Preventing fraud and keeping the site secure</td><td>Legitimate interests</td></tr>
          <tr><td>Analytics and marketing emails</td><td>Consent, which you can withdraw at any time</td></tr>
        </tbody>
      </table>

      <h2>Who we share it with</h2>
      <p>We share data only with service providers who help us run the business: our payment processor, delivery couriers, website hosting and email providers, and our accountants. Each is bound by a contract requiring them to protect your data. We never sell personal data.</p>
      <p>Some providers may process data outside the UK. Where they do, we rely on UK adequacy regulations or the International Data Transfer Agreement to keep it protected.</p>

      <h2>How long we keep it</h2>
      <p>Order and accounting records are kept for six years to meet HMRC requirements. Enquiries that do not lead to an order are deleted after 24 months. Marketing preferences are kept until you unsubscribe.</p>

      <h2>Your rights</h2>
      <p>You have the right to access, correct or delete your data, to restrict or object to processing, to data portability and to withdraw consent. To exercise any right, email <Mail />. We respond within one month.</p>
      <p>If you are unhappy with how we handle your data you can complain to the Information Commissioner's Office at <a href="https://ico.org.uk" target="_blank" rel="noreferrer">ico.org.uk</a> or on 0303 123 1113.</p>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage title="Terms and conditions" updated={UPDATED} intro="These terms apply to all orders placed through this website and to consultancy services we provide.">
      <h2>1. About us</h2>
      <p>This website is operated by <Who />. Contact us at <Mail /> or {COMPANY.phone}.</p>

      <h2>2. Orders</h2>
      <p>When you place an order you make an offer to buy. We email an acknowledgement and a secure payment link. A contract is formed when we confirm your payment has been received. We may decline an order, for example if an item is out of stock or a price was displayed in error, in which case any payment is refunded in full.</p>

      <h2>3. Prices and payment</h2>
      <p>Prices are in pounds sterling and include VAT where applicable. Delivery charges are shown at checkout before you place your order. Payment is taken through our payment provider by card or digital wallet.</p>

      <h2>4. Delivery</h2>
      <p>Delivery options, charges and timescales are set out in our <Link to="/shipping-policy">delivery policy</Link>. Risk in the goods passes to you on delivery.</p>

      <h2>5. Your right to cancel</h2>
      <p>Under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 you may cancel your order within 14 days of receiving the goods without giving a reason. Our <Link to="/returns-policy">returns policy</Link> extends this to 30 days and explains how to return items.</p>

      <h2>6. Faulty goods</h2>
      <p>Your rights under the Consumer Rights Act 2015 are not affected. If goods are faulty, not as described or not fit for purpose, you are entitled to a repair, replacement or refund.</p>

      <h2>7. Product safety</h2>
      <p>Candles and scented products carry safety labels that must be followed. We are not liable for loss or damage caused by misuse, including leaving a candle burning unattended.</p>

      <h2>8. Consultancy services</h2>
      <p>Consultancy work is provided under a written proposal that sets out scope, price and timings. Where a proposal conflicts with these terms, the proposal takes precedence. Services are provided with reasonable care and skill.</p>

      <h2>9. Liability</h2>
      <p>Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or any liability that cannot be limited by law. Otherwise our liability for any order is limited to the price paid for it.</p>

      <h2>10. Governing law</h2>
      <p>These terms are governed by the law of England and Wales. If you live in Scotland or Northern Ireland you may also bring proceedings in your local courts.</p>
    </LegalPage>
  )
}

export function ReturnsPolicy() {
  return (
    <LegalPage title="Returns and refunds" updated={UPDATED} intro="If you are not happy with something, you can return it within 30 days of delivery.">
      <h2>Returning an item</h2>
      <ul>
        <li>Email <Mail /> with your order reference and the items you want to return, within 30 days of delivery.</li>
        <li>We reply with the returns address and instructions.</li>
        <li>Pack the items securely in their original packaging where possible and send them back with a tracked service. Keep your proof of postage.</li>
      </ul>

      <h2>Condition of returns</h2>
      <p>Items must be unused and in a resaleable condition. For hygiene and safety reasons, candles that have been lit and scent products that have been opened cannot be returned unless they are faulty.</p>

      <h2>Refunds</h2>
      <p>We refund the item price within 14 days of receiving your return, to the original payment method. If you cancel your whole order within 14 days of delivery we also refund the standard delivery charge. Return postage is paid by you unless the item is faulty or we sent the wrong item.</p>

      <h2>Damaged or faulty items</h2>
      <p>If something arrives damaged or develops a fault, email a photo within 7 days of delivery. We will send a replacement or give a full refund including all delivery costs, and arrange collection where needed.</p>

      <h2>Consultancy services</h2>
      <p>You may cancel a consultancy contract within 14 days of agreeing it. If you asked us to start work during that period, we may charge for the work already done.</p>
    </LegalPage>
  )
}

export function ShippingPolicy() {
  return (
    <LegalPage title="Delivery policy" updated={UPDATED} intro="Every order is packed by hand at our London studio and dispatched within 1 to 2 working days.">
      <h2>Delivery options</h2>
      <table>
        <thead><tr><th>Service</th><th>Delivery time after dispatch</th><th>Cost</th></tr></thead>
        <tbody>
          <tr><td>UK standard</td><td>2 to 4 working days</td><td>£{SHIPPING.standard.toFixed(2)}, free over £{SHIPPING.freeOver}</td></tr>
          <tr><td>UK express</td><td>Next working day if ordered and paid by 1pm</td><td>£{SHIPPING.express}</td></tr>
          <tr><td>International tracked</td><td>5 to 10 working days</td><td>From £14.95</td></tr>
        </tbody>
      </table>

      <h2>Dispatch</h2>
      <p>Orders are dispatched Monday to Friday, excluding UK bank holidays, once payment has been confirmed. You receive an email with tracking details when your order leaves us.</p>

      <h2>International orders</h2>
      <p>We ship to Ireland, most of Europe, the United States, Canada and Australia. Orders may be subject to import duties and taxes charged by the destination country, which are the responsibility of the recipient.</p>

      <h2>Lost or delayed parcels</h2>
      <p>If your order has not arrived within 5 working days of the expected date, email <Mail /> and we will investigate with the courier. If a parcel is confirmed lost, we send a replacement or a full refund.</p>
    </LegalPage>
  )
}

export function CookiePolicy() {
  return (
    <LegalPage title="Cookie policy" updated={UPDATED} intro="What cookies and similar storage this website uses and how to control them.">
      <h2>What cookies are</h2>
      <p>Cookies are small text files stored on your device by websites you visit. We also use your browser's local storage, which works in a similar way.</p>

      <h2>Cookies we use</h2>
      <table>
        <thead><tr><th>Name</th><th>Purpose</th><th>Type</th><th>Duration</th></tr></thead>
        <tbody>
          <tr><td>northember_cart_v1</td><td>Remembers the items in your basket</td><td>Essential</td><td>Until cleared</td></tr>
          <tr><td>northember_cookie_choice</td><td>Remembers your cookie choice</td><td>Essential</td><td>Until cleared</td></tr>
          <tr><td>Analytics cookies</td><td>Help us understand which pages are used, in aggregate</td><td>Analytics, only with consent</td><td>Up to 13 months</td></tr>
        </tbody>
      </table>

      <h2>Managing cookies</h2>
      <p>You can choose essential cookies only when the banner appears. You can also block or delete cookies in your browser settings; the basket will not work without essential storage. To change your choice, clear this site's data in your browser and reload the page.</p>
    </LegalPage>
  )
}
