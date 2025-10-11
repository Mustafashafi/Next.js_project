import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header() {
  const router = useRouter()
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="wrap">
        {/* Logo */}
        <div className="logo">
          <img
            src="https://ai4lyf.com/wp-content/uploads/logo_color.webp"
            alt="AI4LYF"
            style={{ height: 70 }}
          />
        </div>


        {/* Navigation */}
        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
            Home
          </Link>

          {/* Products Dropdown */}
          <div
            className={`dropdown ${isProductsOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
            onClick={() => setIsProductsOpen(!isProductsOpen)} // for mobile
          >
            <button
              className={`dropdown-toggle ${
                router.asPath.includes('#products') ? 'active' : ''
              }`}
            >
              Products
            </button>

            {isProductsOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#product1">LYF SUITE</a>
                </li>
                <li>
                  <a href="#product2">D-TWIN</a>
                </li>
                <li>
                  <a href="#product3">DTP</a>
                </li>
                <li>
                  <a href="#product4">LYF DATA</a>
                </li>
              </ul>
            )}
          </div>

          <a
            href="#expertise"
            className={router.asPath.includes('#expertise') ? 'active' : ''}
          >
            Our Expertise
          </a>

          <Link
            href="/about"
            className={router.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>

          <a
            href="#contact"
            className={router.asPath.includes('#contact') ? 'active' : ''}
          >
            Contact
          </a>
        </nav>

        {/* Right Side Buttons */}
        <div className="header-buttons">
          <img src="/ai4lyf.svg" alt="AI4LYF Logo" className="header-logo" />
          <a className="btn-primary" href="#contact">
            Request a Demo
          </a>
        </div>
      </div>

      {/* Optional Mobile Overlay */}
      {isMobileMenuOpen && <div className="menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
    </header>
  )
}
