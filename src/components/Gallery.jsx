// src/components/Gallery.jsx
import React from "react";
import "../styles/Gallery.css";
import cotaCivic from "../assets/img/cotaCivic.jpg";
import cotaGT3RS from "../assets/img/cotaGT3RS.jpg";
import cotaM3 from "../assets/img/cotaM3.jpg";
import cotaNSX from "../assets/img/cotaNSX.jpg";
import cotaS2k from "../assets/img/cotaS2k.jpg";
import cotaChallenger from "../assets/img/cotaChallenger.jpg";
import carreraTopAngle from "../assets/img/carreraTopAngle.jpg";
import carreraSFront from "../assets/img/carreraSFront.jpg";
import carreraMidRear from "../assets/img/carreraMidRear.jpg";
import s14Front from "../assets/img/s14Front.jpg";
import s14Wheel from "../assets/img/s14Wheel.jpg";
import s14TopRear from "../assets/img/s14TopRear.jpg";
import nsxFront from "../assets/img/nsxFront.jpg";
import nsxTopFront from "../assets/img/nsxTopFront.jpg";
import nsxInterior from "../assets/img/nsxInterior.jpg";
import carreraInterior from "../assets/img/carreraInterior.jpg";
import carreraFront from "../assets/img/carreraFront.jpg";
import carreraBadge from "../assets/img/carreraBadge.jpg";
import flippedCarrera from "../assets/img/flippedCarrera.jpg";
import gt3rsInterior from "../assets/img/gt3rsInterior.jpg";
import gt3rsMotion from "../assets/img/gt3rsMotion.jpg";
import gt3rsSeat from "../assets/img/gt3rsSeat.jpg";
import r32Front from "../assets/img/r32Front.jpg";
import r32Rear from "../assets/img/r32Rear.jpg";
import r32RearLow from "../assets/img/r32RearLow.jpg";

const photos = [
  { id: 7, src: carreraTopAngle, alt: "Porsche Carrera", loading: "lazy" },
  { id: 8, src: flippedCarrera, alt: "Porsche Carrera S", loading: "lazy" },
  { id: 9, src: carreraMidRear, alt: "Porsche Carrera", loading: "lazy" },
  { id: 10, src: s14Wheel, alt: "Nissan 240sx", loading: "lazy" },
  { id: 11, src: s14Front, alt: "Nissan 240sx", loading: "lazy" },
  { id: 12, src: s14TopRear, alt: "Nissan 240sx", loading: "lazy" },
  { id: 22, src: r32Front, alt: "Nissan R32", loading: "lazy" },
  { id: 23, src: r32RearLow, alt: "Nissan R32", loading: "lazy" },
  { id: 24, src: r32Rear, alt: "Nissan R32", loading: "lazy" },
  { id: 13, src: nsxTopFront, alt: "Acura NSX", loading: "lazy" },
  { id: 14, src: nsxFront, alt: "Acura NSX", loading: "lazy" },
  { id: 15, src: nsxInterior, alt: "Acura NSX", loading: "lazy" },
  { id: 16, src: carreraInterior, alt: "Porsche Carrera", loading: "lazy" },
  { id: 17, src: carreraFront, alt: "Porsche Carrera", loading: "lazy" },
  { id: 18, src: carreraBadge, alt: "Porsche Carrera", loading: "lazy" },
  { id: 19, src: gt3rsInterior, alt: "Porsche GT3RS", loading: "lazy" },
  { id: 20, src: gt3rsMotion, alt: "Porsche GT3RS", loading: "lazy" },
  { id: 21, src: gt3rsSeat, alt: "Porsche GT3RS", loading: "lazy" },
  { id: 1, src: cotaCivic, alt: "Eg Honda Civic", loading: "lazy" },
  { id: 2, src: cotaGT3RS, alt: "Porsche GT3RS", loading: "lazy" },
  { id: 3, src: cotaM3, alt: "BMW M3", loading: "lazy" },
  { id: 4, src: cotaNSX, alt: "Acura NSX", loading: "lazy" },
  { id: 5, src: cotaS2k, alt: "Honda S2000", loading: "lazy" },
  { id: 6, src: cotaChallenger, alt: "Dodge Challenger", loading: "lazy" },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="gallery-item">
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
