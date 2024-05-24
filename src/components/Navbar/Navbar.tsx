import React from 'react';
import Image from "next/image";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="menu">

                <div className="upper__menu">

                    <Image
                        src="/assets/cleanx-logo.png"
                        alt="cleanx-logo"
                        width={64}
                        height={64}
                        priority
                    />

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

                    <a href="tel:+48791478086">
                        <Image
                            src="/assets/phone-call.png"
                            alt="phone-call"
                            width={24}
                            height={24}
                            priority
                        />
                    </a>

                </div>

            </div>
            <nav>

            <input id="nav-toggle" type="checkbox" />
            
            <ul className="links">
                <li><a href="/">Strona Główna</a></li>
                <li><a href="/o-nas">O nas</a></li>
                <li><a href="/cennik">Cennik</a></li>
                <li><a href="/realizacje">Realizacje</a></li>
                <li><a href="/pytanie-klientow">Pytanie klientów</a></li>
                {/*<li><a href="/kontakt">Kontakt</a></li>*/}
            </ul>

            <label htmlFor="nav-toggle" className="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>

        </nav>
    </nav>
    )
}

export default Navbar;