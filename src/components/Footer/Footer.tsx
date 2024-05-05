import Image from "next/image";
import './style.css';

export default function Footer() {
    return (
        <>
            <footer className="footer mt-6">
                <div className="footer__top">
                    <div className="footer__container">
                        <div className="column__one">
                            <Image 
                                src="/assets/white_logo.png"
                                alt="cleanx-logo"
                                width={128}
                                height={128}
                                priority
                            />
                            <ul>
                                <li>
                                    <a href="#">
                                        <Image 
                                            src="/assets/facebook.png"
                                            alt="facebook"
                                            width={24}
                                            height={24}
                                            priority
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image 
                                            src="/assets/instagram.png"
                                            alt="instagram"
                                            width={24}
                                            height={24}
                                            priority
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image 
                                            src="/assets/tik-tok.png"
                                            alt="tik-tok"
                                            width={24}
                                            height={24}
                                            priority
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image 
                                            src="/assets/youtube.png"
                                            alt="youtube"
                                            width={24}
                                            height={24}
                                            priority
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="column_two">
                            <ul className="footer__menu">
                                <li>
                                    <h4>CleanX</h4>
                                </li>
                                <li>
                                    <a href="/">Strona Główna</a>
                                </li>
                                <li>
                                    <a href="/o-nas">O nas</a>
                                </li>
                                <li>
                                    <a href="/cennik">Cennik</a>
                                </li>
                                <li>
                                    <a href="/kontakt">Kontakt</a>
                                </li>
                            </ul>
                            <ul className="footer__menu">
                                <li>
                                    <h4>Uslugi</h4>
                                </li>
                                <li>
                                    <a href="#">Pranie tapicerki meblowej</a>
                                </li>
                                <li>
                                    <a href="#">Pranie wykładziny biurowej</a>
                                </li>
                                <li>
                                    <a href="#">Pranie materaca</a>
                                </li>
                            </ul>
                            <ul className="footer__menu">
                                <li>
                                    <h4>Szybkie linki</h4>
                                </li>
                                <li>
                                    <a href="/realizacje">Realizacje</a>
                                </li>
                                <li>
                                    <a href="/pytanie-klientow">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="column_three">
                            <h4>Ciekawy</h4>
                            <p>
                            CleanX zajmuje się profesjonalnym czyszczeniem mebli i dywanów od 2023 roku
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__container">
                        <p>
                            © All right reserved.
                        </p>
                        <Image 
                            src="/assets/payments.png"
                            alt="payments"
                            width={276}
                            height={36}
                            priority
                        />
                    </div>
                </div>
            </footer>
        </>
    )
}