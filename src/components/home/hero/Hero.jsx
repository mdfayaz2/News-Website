import React, { useState } from "react";
import { hero } from "../../../dummyData";
import "./hero.css";
import CardCarousel from "./Card"; // Adjust import if necessary

const Hero = () => {
  const [items, setItems] = useState(hero);

  return (
    <>
      <marquee className="scroll">
        కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే! కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే! కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే!
      </marquee>
      <section className='hero'>
        <div className='container'>
          <CardCarousel items={items} /> 
        </div>
      </section>
      <marquee className="scroll">
        కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే! కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే! కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే!
      </marquee>
    </>
  );
};

export default Hero;