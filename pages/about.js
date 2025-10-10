import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function About() {
  return (
    <>
      <Header />
      <Hero />
      <section className="section partner-section">
        <div className="wrap">
          <div className="partner-content">
            <div className="partner-text">
              <h1>Our Vision</h1>
              <p className='muted'>
  Transforming the status quo reactive, expensive, sporadically accessible, and episodic &quot;Sick care&quot; into a predictive, preventive, personalized, continuously accessible, and affordable &quot;healthcare&quot; for fuller and longer lives for all.
</p>

            </div>
            <div className="partner-image">
              <img
                src="/about.webp"
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
              <h1>Our Mission</h1>
              <p className="muted">
                At AI4LYF, our mission is to make this vision possible through AI, Biosensing and Wireless Communications innovations. Our integrated wearable and ambient biosensing solutions enable harnessing the multi-sensory, multi-modal data on human health with unprecedented temporal resolution and precision. By distilling this rich data, our powerful propriety AI platform delivers in-situ, faster and predictive diagnostics and remote health monitoring solutions with reliability unmatched in the industry. </p>
            </div>
            <div className="partner-image1">
              <img
                src="/mission.webp"
                alt="WHO chart"
              />
            </div>
          </div>
        </div>
      </section>
      <section className='aboutpage'>
<h1>About Us</h1>
<p>AI4LYF exists to transform “Sick Care” into “Healthcare” through innovative healthcare products that bring together the power of advances in Artificial Intelligence (AI), Biosensing and Wireless Communications. We believe that the concerted multi-disciplinary innovations, and not the just the brute force of AI alone as touted very often, can enable the upgrades direly needed in the healthcare echo-system to realize this mission.</p>

      </section>
      <section className="section partner-section">
        <div className="wrap">
          <div className="partner-content">
            <div className="partner-text3">
            
              <p>
              AI4LYF is on a mission to transform “Sick Care” into “Healthcare” through multidisciplinary innovation that combines Artificial Intelligence (AI), biosensing, and wireless communication technologies.

Our team has built a first-of-its-kind,  <img
                src="/aboutus.webp"
                alt="WHO chart"
              />end-to-end health monitoring platform that continuously tracks human health using affordable wearable and ambient sensors. This platform enables real-time, predictive diagnostics, remote patient monitoring, and AI-driven health anomaly detection—enhancing outcomes for both medical professionals and patients.

For clinicians, it reduces workload and improves decision-making. For researchers and pharmaceutical companies, it introduces digital twin technology, enabling faster, decentralized, and cost-efficient clinical trials.

For individuals, our AI4LYF Watch and App deliver personalized, holistic health guidance—going beyond fitness tracking to provide tailored coaching based on biomarkers, lifestyle, sleep, and medical history, helping users achieve optimal health and longevity. </p>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}
