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
import siFront from "../assets/img/siFront.jpg";
import siInterior from "../assets/img/siInterior.jpg";
import siBadge from "../assets/img/siBadge.jpg";
import siRear from "../assets/img/siRear.jpg";

const Commissions = () => {
  const shoots = [
    {
      title: "Toyota MK5 Supra ",
      description:
        "In this dynamic photoshoot set within a parking garage, the modern and aggressive design of the MK5 Toyota Supra is showcased. The setting accentuates the car's sleek lines and athletic stance, while the lighting plays off its bold features. A standout element of this Supra is its carbon fiber spoiler, which adds both a touch of sportiness and a unique flair. The shoot captures the Supra's essence, blending power and style in every shot, making the car the undeniable focal point of this urban backdrop.",
      images: [
        { id: 1, src: supraGarageRear, alt: "Toyota Supra Rear" },
        { id: 2, src: supraGarageSide, alt: "Toyota Supra Side" },
        { id: 3, src: supraGarageRear2, alt: "Toyota Supra Rear" },
        { id: 4, src: supraGarageFront, alt: "Toyota Supra Front" },
      ],
    },
    {
      title: "Toyota JZX90 Mark II",
      description:
        "In this photoshoot, the JZX90 Mark 2 Toyota stands out with its unique right-hand drive configuration. Set in a parking lot, the shoot captures the car's sleek lines and bold presence, highlighting its distinctive design and performance. The exterior shots focus on the car's timeless appeal, showcasing its well-preserved condition and the details that make it a classic favorite among enthusiasts. ",
      images: [
        { id: 1, src: mk2Front, alt: "JZX Front" },
        { id: 2, src: mk2Interior, alt: "JZX Interior" },
        { id: 3, src: mk2Rear, alt: "JZX Rear" },
        { id: 4, src: mk2RearAngle, alt: "JZX Rear" },
      ],
    },
    {
      title: "Subaru WRX Duo",
      description:
        "This photo shoot features two Subaru WRXs set against the backdrop of a modern parking garage. The clean lines of the garage provide a subtle contrast to the vehicles, allowing their design and details to stand out. Each image captures the essence of these performance cars in a straightforward and engaging way.",
      images: [
        { id: 1, src: subie1FrontWheel, alt: "Subaru WRX Front" },
        { id: 2, src: subie1Front, alt: "Subaru WRX Front Wheel" },
        { id: 3, src: subie1RearWheel, alt: "Subaru WRX Rear Wheel" },
        { id: 4, src: subie2Front, alt: "Subaru WRX Front" },
        { id: 5, src: subieDuo, alt: "Subaru WRX Front" },
        { id: 6, src: subieDuoSide, alt: "Subaru WRX Side" },
      ],
    },
    {
      title: "Ford Focus RS",
      description:
        "In this shoot, I focused on a striking blue Ford Focus RS, capturing its vibrant color and sporty details. Set against a clean, strong background, the photos highlight the car’s design and performance features. The rich blue hue stands out, showcasing the Focus RS's distinctive look and dynamic presence in a simple yet effective manner.",
      images: [
        { id: 1, src: rsDriving, alt: "Focus Front" },
        { id: 2, src: rsFront, alt: "Focus Front" },
        { id: 3, src: rsFrontWheel, alt: "Focus Wheel" },
        { id: 4, src: rsRearWheel, alt: "Focus Rear Wheel" },
      ],
    },
    {
      title: "Tesla Model Y",
      description:
        "This photo shoot features the Tesla Model Y Performance, emphasizing its sleek, modern design. The images capture the vehicle’s elegant lines and high-tech features showcasing the Model Y’s sophisticated look and performance-oriented design in a straightforward and appealing way.",
      images: [
        { id: 1, src: teslaFront, alt: "Tesla Model Y Front" },
        { id: 2, src: teslaBrake, alt: "Tesla Model Y Wheel" },
        { id: 3, src: teslaEmblem, alt: "Tesla Model Y Emblem" },
        { id: 4, src: teslaInterior, alt: "Tesla Model Y Interior" },
        { id: 5, src: teslaSpoiler, alt: "Tesla Model Y Spoiler" },
        { id: 6, src: teslaWheel, alt: "Tesla Model Y Wheel" },
      ],
    },
    {
      title: "Subaru Impreza",
      description:
        "This shoot highlights a green Subaru Impreza with a lowered, stanced setup, captured in a parking garage setting. The photos emphasize the car’s unique stance and vibrant color, contrasting with the garage’s industrial surroundings. The images focus on the Impreza’s lowered profile and distinctive look, showcasing its custom stance.",
      images: [
        { id: 1, src: ajFront, alt: "Impreza Front" },
        { id: 2, src: ajRear, alt: "Impreza Rear" },
        { id: 3, src: ajSide, alt: "Impreza Side" },
        { id: 4, src: ajTopWheel, alt: "Impreza Detail" },
        { id: 5, src: ajWheel, alt: "Impreza Wheel" },
      ],
    },
    {
      title: "Dodge SRT Challenger",
      description:
        "This nighttime shoot features the black Dodge SRT Challenger, captured under the cover of darkness. The images highlight the car’s bold presence and sleek design, illuminated by subtle lighting that accentuates its powerful lines and striking details. The dark setting enhances the Challenger’s menacing look, showcasing its distinctive features in a dramatic and moody atmosphere.",
      images: [
        { id: 1, src: srtNightFront, alt: "SRT Front" },
        { id: 2, src: srtNightBadge, alt: "SRT Badge" },
        { id: 6, src: srtNightRearBadge, alt: "SRT Badge" },
        { id: 7, src: srtNightWheel, alt: "SRT Wheel" },
      ],
    },
    {
      title: "Honda Civic Si",
      description:
        "This shoot features a vibrant red 10th generation Honda Civic Si, capturing its sporty and energetic design. Each image showcases the Civic Si's distinctive features and performance-oriented design, emphasizing its appeal in a straightforward, engaging manner.",
      images: [
        { id: 1, src: siFront, alt: "Civic Front" },
        { id: 2, src: siRear, alt: "Civic Rear" },
        { id: 3, src: siInterior, alt: "Civic Interior" },
        { id: 4, src: siBadge, alt: "Civic Badge" },
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
