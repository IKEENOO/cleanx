import React from 'react';
import Image from "next/image";
import "./style.css";



const Tabs = () => {
  return (
    <div className="about__us">
        <div className="block">

            <div className="block__header">
            
                <p className="block__title">
                  Pranie chemiczne materaca 
                </p>

            </div>
                
            <p className="block__desc">
              Pranie chemiczne materaca to skuteczna metoda usuwania plam, kurzu i roztoczy. 
              Dzięki specjalistycznym środkom czyszczącym i zaawansowanym technologiom, 
              pranie chemiczne zapewnia głębokie oczyszczenie, pozostawiając materac świeży i wolny od alergenów.
            </p>

        </div>
        <div className="block">

            <div className="block__header">
            
                <p className="block__title">
                  Pranie wykładzin biurowych
                </p>

            </div>
                
            <p className="block__desc">
              Pranie wykładzin biurowych to kluczowy element utrzymania czystości i higieny w miejscu pracy. 
              Profesjonalne pranie usuwa kurz, plamy i alergeny, co poprawia jakość powietrza i komfort pracowników. 
              Czyste wykładziny biurowe tworzą również pozytywny wizerunek firmy i przyczyniają się do przyjemniejszego środowiska pracy.
            </p>

        </div>
        <div className="block">

            <div className="block__header">
            
                <p className="block__title">
                  Pranie chemiczne dywanu 
                </p>

            </div>
                
            <p className="block__desc">
              Pranie chemiczne dywanu pozwala na głębokie oczyszczenie włókien, eliminację trudnych plam oraz nieprzyjemnych zapachów. 
              Profesjonalne pranie chemiczne zapewnia, że dywan będzie wyglądał jak nowy, przy jednoczesnym zachowaniu jego struktury i kolorów.
            </p>

        </div>
    </div>
  )
}

export default Tabs;