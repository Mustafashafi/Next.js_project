// pages/index.js
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Product from "../components/Product";

// Swiper imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const cardData = [
    {
      title: "Governments & Organizations",
      img: "https://ai4lyf.com/wp-content/uploads/corporate-1.png",
      description:
        "We help governments and organizations implement predictive healthcare solutions at scale.",
    },
    {
      title: "Care Providers",
      img: "/2.png",
      description:
        "We empower care providers with AI-driven tools for monitoring, diagnosis, and patient care.",
    },
    {
      title: "Individuals",
      img: "/3.png",
      description:
        "We provide individuals with tools to track and improve their health proactively.",
    },
    {
      title: "Medical Device and Manufactures",
      img: "/4.png",
      description:
        "We provide individuals with tools to track and improve their health proactively.",
    },
    {
      title: "Clinical Researchers",
      img: "https://ai4lyf.com/wp-content/uploads/corporate-1.png",
      description:
        "We enable clinical researchers to leverage data-driven insights for faster discoveries.",
    },
  ];

  const expertiseTitles = [
    "Epidemic and Pandemic Management",
    "Holistic Health Management",
    "Remote Patient Monitoring (RPM)",
    "Digitized, Accelerated Clinical Trials",
    "Wireless Medical Device Testing and Evaluation",
    "Bespoke Data Collection Campaigns",
  ];

  const partners = [
    {
      title: "Anyone and Everyone",
      content:
        "As an individual, you, your loved ones, and anyone around you can join us in taking care of personal health by wearing the LYF Watch and using the LYF APP, which provides a comprehensive health management solution.",
    },
    {
      title: "Healthcare Providers",
      content:
        "As a healthcare provider, you can improve your clinical outcomes and quality of care and decrease the burden of the medical diagnosis team by leveraging only actionable insights from our LYF Suite-based RPM and clinical decision assistant platform."},
    {
      title: "Pharmaceuticals",
      content:
        "As a pharmaceutical entity, you can leverage our LYF Suite for site-free, diverse, and cost-effective recruitment and management of study participants. It provides tools for remote, continuous monitoring of participants eliminating most travel requirements to a clinical site. Thus, it can help you accelerate, decentralize, diversify, and digitize clinical trials, thereby substantially reducing the cost and time to market for new therapies and devices." },
{
      title: "Governments",
      content:
        "As a government agency, you can take advantage of our LYF Suite for comprehensive healthcare management at national level and can also use it for the management of epidemics and pandemics." },
        {
      title: "Employers",
      content:
        "It does not matter if it is a small business or a conglomerate; as an employer, if you care for your employees’ health, our LYF Watch and LYF APP can help you offer that care."},
        {
      title: "Insurance Companies",
      content:
        "As an insurance company, you can bring down insurance claims and premiums while increasing your customer satisfaction by helping them improve their holistic health through use of our LYF Watch and LYF APP ." },
      ];

  return (
    <>
      <Head>
        <title>
          AI4LYF — Transforming “Reactive Sick Care” into “Predictive Health Care”
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Hero />

      {/* WHAT WE DO SECTION */}
      <section className="section what-we-do">
        <div className="wrap">
          <h2>What do we do?</h2>
          <div className="icon-cards">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="icon-card"
                onClick={() => setActiveCard(index)}
                style={{ cursor: "pointer" }}
              >
                <img src={card.img} alt={card.title} />
                <p>{card.title}</p>
              </div>
            ))}
          </div>

          {activeCard !== null && (
            <div className="card-description" style={{ marginTop: "20px" }}>
              <p>{cardData[activeCard].description}</p>
            </div>
          )}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <Product />

     {/* EXPERTISE SECTION */}
<section id="expertise" className="section expertise-section">
  <div className="wrap">
    <h2>Our Expertise</h2>

    <div className="expertise-grid">
      {expertiseTitles.map((title, i) => (
        <div className="expert-card" key={i}>
          <video
            src={`/videos/${i + 1}.mp4`}
            autoPlay
            loop
            muted
            playsInline
            className="expert-video"
          ></video>

          <div className="expert-text">
            <h4>{title}</h4>
            <button
              className="btn-outline small"
              onClick={() =>
                setActiveAccordion(activeAccordion === i ? null : i)
              }
            >
              {activeAccordion === i ? "Show Less" : "Read More"}
            </button>
          </div>

          {activeAccordion === i && (
            <p className="expert-description">
              {[
                "AI4LYF helps predict, manage, and mitigate epidemics and pandemics using real-time health analytics and AI forecasting tools.",
                "We provide holistic health solutions that integrate lifestyle, nutrition, and preventive diagnostics to maintain well-being.",
                "Our RPM technology enables continuous patient health tracking from anywhere, improving outcomes and lowering costs.",
                "Accelerate your clinical trials with our AI-driven participant analysis and digitized workflow automation.",
                "We specialize in testing, evaluation, and certification of wireless medical devices under global compliance standards.",
                "Our custom campaigns ensure accurate medical data collection for research, product validation, and AI model training.",
              ][i]}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* PARTNER SECTION WITH ACCORDION */}
      <section className="section partner-section0">
        <h1>Partner With Us</h1>
  <div className="wrap partner-container">
    {/* LEFT SIDE — ACCORDION */}
    <div className="partner-left">
      {partners.map((partner, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() =>
              setActiveAccordion(activeAccordion === index ? null : index)
            }
          >
            {partner.title}
          </div>
          {activeAccordion === index && (
            <div className="accordion-content">
              {partner.content}
            </div>
          )}
        </div>
      ))}
    </div>

    {/* RIGHT SIDE — VIDEO */}
    <div className="partner-right">
      <video
        src="/videos/7.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="partner-video"
      />
    </div>
  </div>
</section>
<section className="section partner-section">
        <div className="wrap">
          <div className="partner-content">
            <div className="partner-text">
              <h1>Let&apos;s work together because:</h1><br />
              <p className="muted">
                Countless studies confirm that the top killer diseases, as reported by WHO in this chart, can be prevented or better managed through continuous instead of episodic health monitoring, early diagnosis, preventive care and holistic health management. AI4LYF’s products are precisely designed to achieve that goal. Let’s save lives together, starting from you and inspiring others around!
              </p>
            </div>
            <div className="partner-image">
              <img
                src="https://ai4lyf.com/wp-content/uploads/whochart.webp"
                alt="WHO chart"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section partner-section1">
        <div className="wrap">
          <div className="partner-content1">
            <div className="partner-text1">
              <h1>Why Partner With Us</h1><br />
              <p className="muted">
                Because we are working on a mission worth pursuing together!

There is no shortage of AI-based healthcare companies.

AI4LYF’s approach is very different. AI4LYF is not focused on exploiting the brute force of AI to further monetize already expensive healthcare through unnecessary gadget selling.

Instead, the raison d’etre of AI4LYF is to deliver what humanity direly needs, and status quo health systems around the world are struggling to deliver, i.e., affordable preventive and predictive health care, and not just expensive “sick care”.
              </p>
            </div>
            <div className="partner-image1">
              <video
        src="/videos/8.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="partner-video"
      />
            </div>
          </div>
        </div>
      </section>




      {/* QUICK GUIDES / IMAGE CAROUSEL SECTION */}
<section className="section quick-guides">
  <div className="wrap">
    <h1>LYF Suite Quick Guide</h1>
    <button
  onClick={() => window.open('/LYF-Suite-Brochure.pdf', '_blank')}
  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
>
  Download PDF Brochure
</button>

    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="quick-guides-swiper"
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      }}
    >
      <SwiperSlide>
        <div className="guide-card">
          <img src="/1.png" alt="Guide 1" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="guide-card">
          <img src="/2.jpg" alt="Guide 2" />
        </div>
      </SwiperSlide><SwiperSlide>
        <div className="guide-card">
          <img src="/2.jpg" alt="Guide 2" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="guide-card">
          <img src="/3.jpg" alt="Guide 3" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="guide-card">
          <img src="/4.jpg" alt="Guide 4" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</section>

<section className="section quick-guides">
  <div className="wrap">
    <h1>Respire LYF Quick Guide</h1>
    <button
  onClick={() => window.open('/Respire-LYF-Broucher.pdf', '_blank')}
  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
>
  Download PDF Brochure
</button>

    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="quick-guides-swiper"
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      }}
    >
      <SwiperSlide>
        <div className="guide-card">
          <img src="/1.png" alt="Guide 1" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="guide-card">
          <img src="/2.jpg" alt="Guide 2" />
        </div>
      </SwiperSlide><SwiperSlide>
        <div className="guide-card">
          <img src="/2.jpg" alt="Guide 2" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="guide-card">
          <img src="/3.jpg" alt="Guide 3" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="guide-card">
          <img src="/4.jpg" alt="Guide 4" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div></section>

{/* TESTIMONIALS / REVIEWS SECTION */}
<section className="section testimonials-section">
  <div className="wrap">
    <h1>What People Say About Us</h1>

    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      className="testimonials-swiper"
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {[
        {
          name: "Dr. Sarah Ahmed",
          role: "Healthcare Specialist",
          review:
            "AI4LYF’s predictive health insights have transformed how we approach patient monitoring. It’s a true revolution in preventive care.",
          img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
        },
        {
          name: "Omar Khan",
          role: "Government Health Advisor",
          review:
            "Our department used AI4LYF solutions for epidemic management — the real-time analytics and dashboards were game changers.",
          img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"   },
        {
          name: "Aisha Al-Mutairi",
          role: "Clinical Researcher",
          review:
            "The LYF Suite streamlined our clinical trials and drastically improved participant management. Highly recommended!",
          img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
        },
        {
          name: "Michael Brown",
          role: "LYF Watch User",
          review:
            "I love the holistic health tracking on the LYF app. It keeps me accountable and helps me monitor my wellness easily.",
          img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
        {
          name: "Linda Garcia",
          role: "Fitness Coach",
          review:
            "LYF’s real-time health monitoring has helped me coach clients based on real data, improving their performance and well-being.",
          img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80",
        },
      ].map((testimonial, i) => (
        <SwiperSlide key={i}>
          <div className="testimonial-card">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="testimonial-img"
            />
            <p className="testimonial-text">“{testimonial.review}”</p>
            <h4>{testimonial.name}</h4>
            <span>{testimonial.role}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


      <Contact />
      <Footer />
    </>
  );
}
