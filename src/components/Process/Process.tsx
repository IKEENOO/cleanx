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
                Przed rozpoczęciem prania nasz pracownik ocenia i informuje klienta 
                jaki będzie rezultat końcowy. Dzięki naszemu doświadczeniu w 98% 
                przypadkach pozbywamy się wszyskich plam i zapachów
            </p>
            <h3 className="py-2 font-bold">
                2. Zabezpieczenie
            </h3>
            <p>
                Podczas pracy zabezpieczamy podłogę ręcznikami lub folią. Każdy z 
                naszych pracowników po wejściu do klienta zakłada czyste buty. 
                Nie chlapiemy na ściany, po sobie zostawiamy czystą podłogę i kanapę
            </p>
        </div>
        <div className="process__step">
            <Image
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