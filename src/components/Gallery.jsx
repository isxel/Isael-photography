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

const photos = [
  { id: 1, src: cotaCivic, alt: "Eg Honda Civic" },
  { id: 2, src: cotaGT3RS, alt: "Porsche GT3RS" },
  { id: 3, src: cotaM3, alt: "BMW M3" },
  { id: 4, src: cotaNSX, alt: "Acura NSX" },
  { id: 5, src: cotaS2k, alt: "Honda S2000" },
  { id: 6, src: cotaChallenger, alt: "Dodge Challenger" },
  { id: 7, src: carreraTopAngle, alt: "Porsche Carrera" },
  { id: 8, src: carreraSFront, alt: "Porsche Carrera S" },
  { id: 9, src: carreraMidRear, alt: "Porsche Carrera" },
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
