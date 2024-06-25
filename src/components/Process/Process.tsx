import React from 'react';
import Image from "next/image";
import "./style.css";

const Process = () => {
  return (
    <div className="process">
        <div className="process__step">
            <h3 className="py-2 font-bold">
                1. Proces prania
            </h3>
            <p>
                Przed rozpoczęciem prania nasz specjalista ocenia stan tkanin i informuje 
                klienta o możliwym rezultacie. Dzięki naszemu doświadczeniu w 98% przypadków 
                skutecznie usuwamy wszystkie plamy i zapachy. 
            </p>
        </div>
        <div className="process__step">
            <h3 className="py-2 font-bold">
                2. Zabezpieczenie
            </h3>
            <p>
                Podczas pracy chronimy podłogę ręcznikami lub folią. Każdy z naszych pracowników, 
                wchodząc do domu klienta, zakłada czyste obuwie. Staramy się nie zachlapać ścian 
                i zostawiamy po sobie czystą podłogę oraz kanapę.
            </p>
        </div>
        <div className="process__step">
            <Image
                className="py-2"
                src="/assets/process.jpg"
                alt="guarantee-of-quality"
                width={300}
                height={300}
                priority
            />
        </div>
    </div>
  )
}

export default Process;