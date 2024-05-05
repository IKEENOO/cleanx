import React from 'react';
import Image from "next/image";
import "./style.css";

const Main = () => {
  return (
    <div className="main">
        <div className="main__block">
            <h1 className="py-4 text-4xl font-bold">
                Profesjonalne pranie tapicerki i wykładzin Warszawa
            </h1>
            <p>
                CleanX to profesjonalna firma zajmująca się praniem tapicerki, 
                materaców, wykładzin i innych powierzchni tapicerowanych
            </p>
            <a href="#">
                <div className="form__link">
                    <p>Zamówienie</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Main