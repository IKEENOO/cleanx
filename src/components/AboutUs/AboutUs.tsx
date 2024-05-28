import React from 'react';
import Image from "next/image";
import "./style.css";

const AboutUs = () => {
  return (
    <div className="about__us">
        <div className="block">

            <div className="block__header">

                <Image
                    src="/assets/guarantee_of_quality.png"
                    alt="guarantee-of-quality"
                    width={48}
                    height={48}
                    priority
                />
            
                <p className="block__title">
                    Gwarancja jakości
                </p>

            </div>
                
            <p className="block__desc">
                Nadamy rabat lub zwrócimy do 100% pieniędzy, 
                jeśli usługa nie spełniło oczekiwania klienta i rezultat 
                prania był inny, niż zapowiedziany.
            </p>

        </div>
        <div className="block">
            <div className="block__header">
                <Image
                src="/assets/professional_equipment.png"
                alt="professional-equipment"
                width={48}
                height={48}
                priority
            />
            <p className="block__title">
                Profesjonalny sprzęt
            </p>
            </div>
            <p className="block__desc">
                Nie używamy żadnego sprzętu typu Karcher i innych 
                mas-marketowych odkurzaczy. 
                Tylko i wyłącznie profesjonalny sprzęt!
            </p>
        </div>
        <div className="block">
            <div className="block__header">
                <Image
                src="/assets/secure_payment.png"
                alt="secure-payment"
                width={48}
                height={48}
                priority
            />
            <p className="block__title">
                Bezpieczna płatność
            </p>
            </div>
            <p className="block__desc">
                U nas zawsze zapłacisz kartą / gotówką i dostaniesz 
                fakturę na swoją firmę.
            </p>
        </div>
        <div className="block">
            <div className="block__header">
                <Image
                src="/assets/punctuality.png"
                alt="punctuality"
                width={48}
                height={48}
                priority
            />
            <p className="block__title">
                Punktualność
            </p>
            </div>
            <p className="block__desc">
                W razie spóźnienia, (co się zdarza bardzo rzadko) więcej 
                niż o 30 minut nadamy rabat na pranie tapicerki meblowej.
            </p>
        </div>
        <div className="block">
            <div className="block__header">
                <Image
                src="/assets/reliability.png"
                alt="reliability"
                width={48}
                height={48}
                priority
            />
            <p className="block__title">
                Rzetelność
            </p>
            </div>
            <p className="block__desc">
                Dotrzymujemy się technologii i regulaminu podczas prania 
                tapicerki meblowej, wykładzin i materacy. Nam można ufać!
            </p>
        </div>
        <div className="block">
            <div className="block__header">
                <Image
                src="/assets/eco_measures.png"
                alt=""
                width={48}
                height={48}
                priority
            />
            <p className="block__title">
                Bezpieczne EKO środki
            </p>
            </div>
            <p className="block__desc">
                Wykorzystamy tylko i wyłącznie hipoalergiczne EKO środki, które są absolutnie bezpieczne dla dzieci i zwierząt domowych.
            </p>
        </div>
    </div>
  )
}

export default AboutUs