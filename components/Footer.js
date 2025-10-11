import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-wrap">
        <div className="footer-logo">
          <Image
            src="https://ai4lyf.com/wp-content/uploads/logo_color.webp"
            alt="AI4LYF"
            width={150}
            height={36}
            style={{ height: 36, width: "auto" }}
          />
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Request Demo</a>
        </div>

        <div className="footer-contact">
          <p>Email: info@ai4lyf.com</p>
          <p>Location: Lahore, Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AI4LYF. All Rights Reserved.
      </div>
    </footer>
  );
}
