
export default function Footer() {
  return (
    <footer className="site-footer">
        <div className="wrap footer-wrap">
          <div className="footer-logo">
            <img src="https://ai4lyf.com/wp-content/uploads/logo_color.webp" alt="AI4LYF" style={{ height: 36 }} />
          </div>

          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#contact">Request Demo</a>
          </div>

          <div className="footer-contact">
            <p>Email: info@ai4lyf.com</p>
            <p>Location: Lahore , Pakistan</p>
          </div>
        </div>

        <div className="footer-bottom">© {new Date().getFullYear()} AI4LYF. All Rights Reserved.</div>
      </footer>
  )
}
