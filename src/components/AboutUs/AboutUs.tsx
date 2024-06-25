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
                Gwarantujemy zwrot 100% opłaty, 
                jeśli klient nie będzie zadowolony 
                z efektu prania!!!
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
                Podczas prania tapicerki meblowej, 
                wykładzin i materacy przestrzegamy 
                technologii i regulaminów. 
                Można nam zaufać!
            </p>
        </div>
    </div>
  )
}

export default AboutUs