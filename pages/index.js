// pages/index.js
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatWeDo from "../components/WhatWeDo";
import Expertise from "../components/Expertise";
import PartnerSection from "../components/PartnerSection";
import PartnerChart from "../components/PartnerChart";
import PartnerWhy from "../components/PartnerWhy";
import QuickGuide from "../components/QuickGuide";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI4LYF — Transforming “Reactive Sick Care” into “Predictive Health Care”</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Hero />
      <WhatWeDo />
      <Product />
      <Expertise />
      <PartnerSection />
      <PartnerChart />
      <PartnerWhy />
      <QuickGuide
        title="LYF Suite Quick Guide"
        pdf="/LYF-Suite-Brochure.pdf"
      />
      <QuickGuide
        title="Respire LYF Quick Guide"
        pdf="/Respire-LYF-Broucher.pdf"
      />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
