import { useState } from "react";
import Image from "next/image";

export default function WhatWeDo() {
  const [activeCard, setActiveCard] = useState(null);

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
      title: "Medical Device and Manufacturers",
      img: "/4.png",
      description:
        "We provide medical device manufacturers with AI-powered insights for innovation and safety.",
    },
    {
      title: "Clinical Researchers",
      img: "https://ai4lyf.com/wp-content/uploads/corporate-1.png",
      description:
        "We enable clinical researchers to leverage data-driven insights for faster discoveries.",
    },
  ];

  return (
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
              <div className="icon-img">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={150}
                  height={150}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
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
  );
}
