import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Consultancy from './pages/Consultancy'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'
import { PrivacyPolicy, Terms, ReturnsPolicy, ShippingPolicy, CookiePolicy } from './pages/Legal'

const TITLES = {
  '/': 'North Ember | Home & living goods and IT consultancy, London',
  '/shop': 'Shop | North Ember',
  '/consultancy': 'IT consultancy | North Ember',
  '/about': 'About | North Ember',
  '/contact': 'Contact | North Ember',
  '/faq': 'Help & FAQs | North Ember',
  '/cart': 'Basket | North Ember',
  '/checkout': 'Checkout | North Ember',
  '/privacy-policy': 'Privacy policy | North Ember',
  '/terms': 'Terms & conditions | North Ember',
  '/returns-policy': 'Returns & refunds | North Ember',
  '/shipping-policy': 'Delivery | North Ember',
  '/cookie-policy': 'Cookie policy | North Ember',
}

function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (TITLES[pathname]) document.title = TITLES[pathname]
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <RouteEffects />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-snow px-4 py-2">
          Skip to content
        </a>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main id="main" className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:slug" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/consultancy" element={<Consultancy />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/returns-policy" element={<ReturnsPolicy />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <CartDrawer />
        <CookieBanner />
      </CartProvider>
    </BrowserRouter>
  )
}
