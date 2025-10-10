import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url('https://ai4lyf.com/wp-content/uploads/lyfsuite.webp')`,
          }}
        />
        <div className="wrap hero-content">
          <img src="/ai4lyf.svg" alt="AI4LYF Logo" className="header-logo" /><br />
          <div className="hero-tag">
            Start living to your fullest with LYF Suite
          </div>
          <h1 className="hero-title">
            Transforming “Reactive Sick Care” into “ <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Predictive Health Care”
          </h1>
          <p className="hero-sub">
            Through innovations in Artificial Intelligence, Biosensing and
            Connectivity.
          </p>
        </div>
      </section>
    </>
  );
}
