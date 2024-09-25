import React, { useState } from "react"
import { hero } from "../../../dummyData"
import "./hero.css"
import Card from "./Card"

const Hero = () => {
  const [items, setIems] = useState(hero)

  return (
    <>
    <marquee className="scroll">కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే! కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే! కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే!</marquee>
      <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
      <marquee className="scroll">కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే! కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే! కోచింగ్ సెంటర్లపై ఫిర్యాదు చేయాలంటే.. డయల్ చేయాల్సిన నంబర్ ఇదే!</marquee>

    </>
  )
}

export default Hero
