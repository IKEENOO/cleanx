import React from 'react';
import Image from "next/image";
import "./style.css";

const Services = () => {
  return (
    <div className="services">
        <div className="service">
            <h3 className="service__title">
                Pranie tapicerki meblowej
            </h3>
            <p className="service__desc">
                Pranie tapicerki kanap, krzeseł, foteli, 
                narożników i wieliu innych mebli
            </p>
            <Image
                className="image"
                src="/assets/123.jpg"
                alt="furniture-upholstery"
                width={250}
                height={250}
                priority
            />            
        </div>
        <div className="service">
            <h3 className="service__title">
                Pranie wykładzin biurowych
            </h3>
            <p className="service__desc">
                Pranie divanov i wykladzin w mieszkaniach
            </p>
            <Image
                className="image"
                src="/assets/124.jpg"
                alt="office-carpets"
                width={250}
                height={250}
                priority
            />
        </div>
        <div className="service">
            <h3 className="service__title">
                Pranie materaca 
            </h3>
            <p className="service__desc">
                Pranie materaca, wezgłowia, pranie łóżek, pranie wózków dziecięcych
            </p>
            <Image
                className="image"
                src="/assets/125.jpg"
                alt="mattress"
                width={250}
                height={250}
                priority
            />
        </div>
    </div>
  )
}

export default Services;
