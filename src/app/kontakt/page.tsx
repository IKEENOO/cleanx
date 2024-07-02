import Navbar from "@/components/Navbar/Navbar";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import "./style.css";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>

            <div className="container flex flex-col gap-5 kontakt">

                <h2 className="py-4 text-3xl font-bold text-center">
                    Kontakt 
                </h2>
                
                <div className="telephone">
                    <p>
                        Numer telefonu:
                    </p>

                    <a href="tel:+48791478086">
                        +48791478086
                    </a>
                </div>

                <div className="telephone">
                    <p>
                        Whatsapp:
                    </p>

                    <a href="https://wa.me/+48791478086">
                        <Image
                            src={"/assets/whatsapp.png"}
                            alt="Whatsapp"
                            width={32}
                            height={32}
                            priority
                        />
                    </a>
                </div>

                <p>
                    Jesteśmy w sieciach społecznościowych:
                </p>

                <div className="social__link">
                    <a href="https://www.instagram.com/cleanx.pl/?igsh=MXZpZWZreXU4emhvZA%3D%3D&utm_source=qr" target="_blank">
                        <Image
                            src="/assets/instagram.png"
                            alt="instagram"
                            width={24}
                            height={24}
                            priority
                        />
                    </a>
                    
                    <a href="https://www.tiktok.com/@cleanx.pl?_t=8mB0sBFqu3M&_r=1" target="_blank">
                        <Image
                            src="/assets/tik-tok.png"
                            alt="tik-tok"
                            width={24}
                            height={24}
                            priority
                        />
                    </a>
                </div>

                <Image
                    src="/assets/karher.jpg"
                    alt="1"
                    width={300}
                    height={300}
                    priority
                />

                <p>
                    Pracujemy 7 dni w tygodniu, w godzinach 8:00-22:00, 
                    a jeżeli wymaga tego sytuacja również w nocy. 
                </p>

                <p>
                    Pracujemy na terenie całej Polski.
                </p>

                <Form></Form>

            </div>

            <Footer></Footer>
        </>
    )
}