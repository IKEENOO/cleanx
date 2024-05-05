import React from 'react';
import Image from "next/image";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="menu">

                <div className="upper__menu">

                    <Image
                        src="/assets/white_logo.png"
                        alt="cleanx-logo"
                        width={64}
                        height={64}
                        priority
                    />

                    <div className="social__link">

                        <Image
                            src="/assets/instagram.png"
                            alt="instagram"
                            width={24}
                            height={24}
                            priority
                        />
                        
                        <Image
                            src="/assets/facebook.png"
                            alt="facebook"
                            width={24}
                            height={24}
                            priority
                        />

                        <Image
                            src="/assets/tik-tok.png"
                            alt="tik-tok"
                            width={24}
                            height={24}
                            priority
                        />

                        <Image
                            src="/assets/youtube.png"
                            alt="youtube"
                            width={24}
                            height={24}
                            priority
                        />

                    </div>
                    
                    <Image
                        src="/assets/phone-call.png"
                        alt="phone-call"
                        width={24}
                        height={24}
                        priority
                    />

                </div>

            </div>
            <nav>

            <input id="nav-toggle" type="checkbox" />
            
            <ul className="links">
                <li><a href="#">Strona Główna</a></li>
                <li><a href="#">O nas</a></li>
                <li><a href="#">Cennik</a></li>
                <li><a href="#">Realizacje</a></li>
                <li><a href="#">Pytanie klientów</a></li>
                <li><a href="#">Gdzie działamy</a></li>
                <li><a href="#">Kontakt</a></li>
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