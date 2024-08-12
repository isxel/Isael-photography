import React from "react";
import "./../styles/Comission.css";
import supraGarageRear from "../assets/img/supraGarageRear.jpg";
import supraGarageSide from "../assets/img/supraGarageSide.jpg";
import supraGarageFront from "../assets/img/supraGarageFront.jpg";
import supraGarageRear2 from "../assets/img/supraGarageRear2.jpg";
import teslaFront from "../assets/img/teslaFront.jpg";
import teslaBrake from "../assets/img/teslaBrake.jpg";
import teslaEmblem from "../assets/img/teslaEmblem.jpg";
import teslaInterior from "../assets/img/teslaInterior.jpg";
import teslaSpoiler from "../assets/img/teslaSpoiler.jpg";
import teslaWheel from "../assets/img/teslaWheel.jpg";

const Commissions = () => {
  const shoots = [
    {
      title: "Toyota Supra Shoot",
      description:
        "This photoshoot captures the elegance and timeless beauty of the Porsche Carrera S. The goal was to highlight the sleek lines and powerful presence of this iconic sports car.",
      images: [
        { id: 1, src: supraGarageRear, alt: "Toyota Supra Rear" },
        { id: 2, src: supraGarageSide, alt: "Porsche Carrera S Rear" },
        { id: 3, src: supraGarageRear2, alt: "Porsche Carrera S Side" },
        { id: 4, src: supraGarageFront, alt: "Porsche Carrera S Detail" },
      ],
    },
    {
      title: "Tesla Model Y Shoot",
      description:
        "A bold and aggressive photoshoot featuring a modern muscle car. The focus was on capturing the raw power and muscular stance that defines this genre of automobiles.",
      images: [
        { id: 1, src: teslaFront, alt: "Modern Muscle Front" },
        { id: 2, src: teslaBrake, alt: "Modern Muscle Rear" },
        { id: 3, src: teslaEmblem, alt: "Modern Muscle Side" },
        { id: 4, src: teslaInterior, alt: "Modern Muscle Detail" },
        { id: 5, src: teslaSpoiler, alt: "Modern Muscle Interior" },
        { id: 6, src: teslaWheel, alt: "Modern Muscle Wheel" },
      ],
    },
  ];

  return (
    <div className="commissions-container">
      {shoots.map((shoot, index) => (
        <section key={index} className="photoshoot-section">
          <h2>{shoot.title}</h2>
          <p>{shoot.description}</p>
          <div className="photo-grid">
            {shoot.images.map((image) => (
              <img key={image.id} src={image.src} alt={image.alt} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Commissions;
