import React from "react";
import Accordion from "./Accordion";

const AccordionQuestions = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg w-full">
            <Accordion
                title="Ile czasu trwa pranie kanapy?"
                answer="Pranie tapicerki kanapy trwa od 1 do 2 godzin w zależności od wymiarów, 
                rodzaju materiału tapicerki oraz od stopnia zabrudzenia."
            />
            <Accordion
                title="Jak długo schnie kanapa?"
                answer="Szacowany czas schnięcia tapicerki kanapy od 3 do 8 godzin. 
                Czasami tapicerka może schnąć do 15 godzin to zależy od materiału, 
                stanu zabrudzenia i wilgotności w pomieszczeniu."
            />
            <Accordion
                title="Czy są jakieś ukryty koszty?"
                answer="Żadnych dodatkowych kosztów. Ceny zawsze są według cennika. 
                Jedynie za dojazd poza miastem może być naliczona opłata maksymalnie 20 zł."
            />
            <Accordion
                title="Czy usuwacie zapach moczu zwięrząt?"
                answer="Tak, usuwamy. Usunięcie zapachu moczu zwierząt domowych wchodzi w cenę usługi prania tpicerki. 
                Ale prosimy o tym informować przed składaniem zamówienia."
            />
            <Accordion
                title="Czy wszystkie plamy uda się usunąć?"
                answer="Niestety nie możemy gwarantować, że każdą plamę uda się usunąć. 
                Są plamy które wchodzą do struktury włókien i uszkadzają materiał, 
                również zmieniając kolor w miejscach uszkodzenia. 
                Ale w 98% przypadkach pozbywamy się każdej plamy."
            />
            <Accordion
                title="Czy bezpieczna jest chemia? Mamy małe dziecko i pieska w domu."
                answer="Pranie tapicerki meblowej jest całkowicie bezpieczne dla małych dzieci i zwierząt domowych! 
                        Używamy tylko i wyłącznie EKO certyfikowanych detergentów i odplamiaczy przeznaczonych do prania 
                        tapicerki w pomiszczeniu."
            />
            <Accordion
                title="Mam nietypowy mebel, którego nie widzę w cenniku. Jak dokonać wycenę?"
                answer="Prosimy o podesłanie zdjęcia  w dowolny dla Państwa sposób (mailowo lub sms-em)"
            />
            <Accordion
                title="Nie zeszła plama z kanapy na usunięciu której mi zależało."
                answer="Niestety nie ma gwarancji, że każda poszczególna plama zejdzie. 
                        Są plamy które niemożliwe do usunięcia, ponieważ wchodzą do struktury nitek i uszkadzają tapicerkę. 
                        W takiej sytuacji pranie poprawkowe nie ma sensu."
            />
            <Accordion
                title=" Czy wszystkie plamy zejdą z materaca?"
                answer="Nie ma jednoznacznej odpowiedzi na to pytanie, ponieważ skuteczność usuwania plam z materaca 
                        zależy od wielu czynników, takich jak rodzaj plamy, rodzaj materiału materaca, czas, 
                        który minął od powstania plamy, czy był materac już zapierany samodzielnie. 
                        Niektóre plamy mogą być trudniejsze do usunięcia niż inne, zwłaszcza jeśli są już wyschnięte. 
                        Usługa prania materaca nosi przede wszystkim wymiar higieniczny. Bardzo skutecznie usuwamy brud, 
                        kurz, roztocza i zarazki. Z góry, niestety, nie uda się powiedzieć, która plama zejdzie podczas prania, 
                        a która nie."
            />
        </div>
    );
};

export default AccordionQuestions;