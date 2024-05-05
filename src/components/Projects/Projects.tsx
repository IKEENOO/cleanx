import React from 'react';
import Image from "next/image";
import "./styles.css";

const Projects = () => {
  return (
    <div className="projects">
        <p>
        Usuwamy do 100% różnych plam i nieprzyjemnych zapachów.
        Nasi fachowcy czarodzieje w swoim fachu, poradzą sobie
        nawet z najtrwalszymi zabrudzeniami! 
        </p>
        <div className="projects__item">
            <div className="p__item">
                <Image 
                    className='p__img'
                    src="/assets/before-after/1.jpg"
                    alt="1"
                    width={200}
                    height={200}
                    priority
                />
            </div>
            <div className="p__item">
                <Image 
                    className='p__img'
                    src="/assets/before-after/2.jpg"
                    alt="2"
                    width={200}
                    height={200}
                    priority
                />
            </div>
            <div className="p__item">
                <Image 
                    className='p__img'
                    src="/assets/before-after/4.jpg"
                    alt="4"
                    width={200}
                    height={200}
                    priority
                />
            </div>
            <div className="p__item">
                <Image 
                    className='p__img'
                    src="/assets/before-after/5.jpg"
                    alt="5"
                    width={200}
                    height={200}
                    priority
                />
            </div>
            <div className="p__item">
                <Image 
                    className='p__img'
                    src="/assets/before-after/6.jpg"
                    alt="6"
                    width={200}
                    height={200}
                    priority
                />
            </div>
            <div className="p__item">
                <Image 
                    className='p__img'
                    src="/assets/before-after/7.jpg"
                    alt="7"
                    width={200}
                    height={200}
                    priority
                />
            </div>
        </div>
    </div>
  )
}

export default Projects;