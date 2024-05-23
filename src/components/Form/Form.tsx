import React from 'react';
import "./style.css";

const Form = () => {
  return (
    <div className="form">
        <p>
            Doradzimy Państwu we wszystkich sprawach związanych z praniem tapicerki meblowej, materacy i wykładzin biurowych.
        </p>
        <p>
            Codziennie od 8:00 do 22:00.
        </p>
        <form action="">
            <input type="text" className="search__input" placeholder="Imię" required />
            <input type="text" className="search__input" placeholder="Telefon" required pattern="[0-9()#&+*-=.]+" />
            <input type="text" className="search__input" placeholder="Termin" required />
            <input type="text" className="search__input" placeholder="Lista mebli/ powierzchnia wykładziny / pytanie" required />
            <button className='button'>
                Zamówienie
            </button>
        </form>
    </div>
  )
}

export default Form;