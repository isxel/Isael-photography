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
import ajFront from "../assets/img/ajFront.jpg";
import ajRear from "../assets/img/ajRear.jpg";
import ajSide from "../assets/img/ajSide.jpg";
import ajTopWheel from "../assets/img/ajTopWheel.jpg";
import ajWheel from "../assets/img/ajWheel.jpg";
import srtFrontBadge from "../assets/img/srtFrontBadge.jpg";
import srtInterior from "../assets/img/srtInterior.jpg";
import srtNightBadge from "../assets/img/srtNightBadge.jpg";
import srtNightFront from "../assets/img/srtNightFront.jpg";
import srtNightRear from "../assets/img/srtNightRear.jpg";
import srtNightRearBadge from "../assets/img/srtNightRearBadge.jpg";
import srtNightWheel from "../assets/img/srtNightWheel.jpg";
import srtRear from "../assets/img/srtRear.jpg";
import srtRearBadge from "../assets/img/srtRearBadge.jpg";
import srtWheel from "../assets/img/srtWheel.jpg";
import mk2Front from "../assets/img/mk2Front.jpg";
import mk2Interior from "../assets/img/mk2Interior.jpg";
import mk2Rear from "../assets/img/mk2Rear.jpg";
import mk2RearAngle from "../assets/img/mk2RearAngle.jpg";
import subie1Front from "../assets/img/subie1Front.jpg";
import subie1FrontWheel from "../assets/img/subie1FrontWheel.jpg";
import subie1RearWheel from "../assets/img/subie1RearWheel.jpg";
import subie2Front from "../assets/img/subie2Front.jpg";
import subieDuo from "../assets/img/subieDuo.jpg";
import subieDuoSide from "../assets/img/subieDuoSide.jpg";
import rsDriving from "../assets/img/rsDriving.jpg";
import rsFront from "../assets/img/rsFront.jpg";
import rsFrontWheel from "../assets/img/rsFrontWheel.jpg";
import rsRearWheel from "../assets/img/rsRearWheel.jpg";

const Commissions = () => {
  const shoots = [
    {
      title: "Toyota Supra Shoot",
      description:
        "The toyota supra is a car that has been a staple in the automotive world for decades. This photoshoot was taking in a parking garage which really helped to highlight the sleek lines and aggressive stance of the car.",
      images: [
        { id: 1, src: supraGarageRear, alt: "Toyota Supra Rear" },
        { id: 2, src: supraGarageSide, alt: "Porsche Carrera S Rear" },
        { id: 3, src: supraGarageRear2, alt: "Porsche Carrera S Side" },
        { id: 4, src: supraGarageFront, alt: "Porsche Carrera S Detail" },
      ],
    },
    {
      title: "Toyota Mark II",
      description:
        "The Toyota Mark II is a classic Japanese car that has been a staple in the automotive world for decades.",
      images: [
        { id: 1, src: mk2Front, alt: "Modern Muscle Front" },
        { id: 2, src: mk2Interior, alt: "Modern Muscle Rear" },
        { id: 3, src: mk2Rear, alt: "Modern Muscle Side" },
        { id: 4, src: mk2RearAngle, alt: "Modern Muscle Detail" },
      ],
    },
    {
      title: "Subaru WRX Duo",
      description:
        "Capturing the different generation and body shapes the Subaru WRX offers. The goal was to highlight the sleek lines and powerful presence of this iconic sports car.",
      images: [
        { id: 1, src: subie1Front, alt: "Subaru WRX Front" },
        { id: 2, src: subie1FrontWheel, alt: "Subaru WRX Front Wheel" },
        { id: 3, src: subie1RearWheel, alt: "Subaru WRX Rear Wheel" },
        { id: 4, src: subie2Front, alt: "Subaru WRX Front" },
        { id: 5, src: subieDuo, alt: "Subaru WRX Front" },
        { id: 6, src: subieDuoSide, alt: "Subaru WRX Side" },
      ],
    },
    {
      title: "Ford Focus RS",
      description:
        "A bold and aggressive photoshoot featuring a modern muscle car. The focus was on capturing the raw power and muscular stance that defines this genre of automobiles.",
      images: [
        { id: 1, src: rsDriving, alt: "Modern Muscle Front" },
        { id: 2, src: rsFront, alt: "Modern Muscle Rear" },
        { id: 3, src: rsFrontWheel, alt: "Modern Muscle Side" },
        { id: 4, src: rsRearWheel, alt: "Modern Muscle Detail" },
      ],
    },
    {
      title: "Tesla Model Y",
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
    {
      title: "Subaru Impreza",
      description:
        "This Subaru Impreza was captured in a parking garage to emphasize the stance of the car",
      images: [
        { id: 1, src: ajFront, alt: "Modern Muscle Front" },
        { id: 2, src: ajRear, alt: "Modern Muscle Rear" },
        { id: 3, src: ajSide, alt: "Modern Muscle Side" },
        { id: 4, src: ajTopWheel, alt: "Modern Muscle Detail" },
        { id: 5, src: ajWheel, alt: "Modern Muscle Interior" },
      ],
    },
    {
      title: "Dodge SRT Challenger",
      description:
        "A bold and aggressive photoshoot featuring a modern muscle car. The focus was on capturing the raw power and muscular stance that defines this genre of automobiles.",
      images: [
        { id: 1, src: srtFrontBadge, alt: "Modern Muscle Front" },
        { id: 2, src: srtInterior, alt: "Modern Muscle Rear" },
        { id: 3, src: srtNightBadge, alt: "Modern Muscle Side" },
        { id: 4, src: srtNightFront, alt: "Modern Muscle Detail" },
        { id: 5, src: srtNightRear, alt: "Modern Muscle Interior" },
        { id: 6, src: srtNightRearBadge, alt: "Modern Muscle Wheel" },
        { id: 7, src: srtNightWheel, alt: "Modern Muscle Wheel" },
        { id: 8, src: srtRear, alt: "Modern Muscle Wheel" },
        { id: 9, src: srtRearBadge, alt: "Modern Muscle Wheel" },
        { id: 10, src: srtWheel, alt: "Modern Muscle" },
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
