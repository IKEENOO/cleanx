import React from 'react';
import "./style.css";

const Form = () => {
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // Собираем данные из формы
        const name = event.target.elements.name.value;
        const phone = event.target.elements.phone.value;
        const date = event.target.elements.date.value;
        const message = event.target.elements.message.value;

        // Отправляем данные на сервер
        try {
            const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phone, date, message, recipient: 'keenoo256@gmail.com' }),
            });

            if (response.ok) {
                alert('Данные успешно отправлены!');
            } else {
                alert('Произошла ошибка. Попробуйте еще раз.');
            }
        } catch (error) {
            console.error('Произошла ошибка:', error);
            alert('Произошла ошибка. Попробуйте еще раз.');
        }
        };
    return (
        <div className="form">
            <p>
                Doradzimy Państwu we wszystkich sprawach związanych z praniem tapicerki meblowej, materacy i wykładzin biurowych.
            </p>
            <p>
                Codziennie od 8:00 do 22:00.
            </p>
            <form action="process_form.php" method="POST">
                <input type="text" name="name" className="search__input" placeholder="Imię" required />
                <input type="text" name="phone" className="search__input" placeholder="Telefon" required />
                <input type="text" name="date" className="search__input" placeholder="Termin" required />
                <input type="text" name="message" className="search__input" placeholder="Lista mebli / powierzchnia wykładziny / pytanie" required />
                <button className='button'>
                    Zamówienie
                </button>
            </form>
        </div>
    )
}

export default Form;