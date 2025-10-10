import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section relative">
        {/* Background Video */}
        <video
          className="hero-bg absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/9.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="wrap hero-content relative z-10">
          <img src="/ai4lyf.svg" alt="AI4LYF Logo" className="header-logo" /><br />
          <div className="hero-tag">
            Start living to your fullest with LYF Suite
          </div>
          <h1 className="hero-title">
            Transforming “Reactive Sick Care” into “ <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Predictive Health Care”
          </h1>
          <p className="hero-sub">
            Through innovations in Artificial Intelligence, Biosensing and
            Connectivity.
          </p>
        </div>

        {/* Optional overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />
      </section>
    </>
  );
}
