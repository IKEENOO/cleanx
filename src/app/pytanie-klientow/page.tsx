"use client"
import Navbar from "@/components/Navbar/Navbar";
import AccordionQuestions from "@/components/Accordion/AccordionQuestioans";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>

            <div className="container flex flex-col gap-5">

                <h2 className="py-4 text-3xl font-bold text-center">
                    Najczęściej zadawane pytania
                </h2>
                <AccordionQuestions></AccordionQuestions>

                <h2 className="py-4 text-3xl font-bold text-center">
                    Zamów pranie już teraz
                </h2>
                <Form></Form>

            </div>

            <Footer></Footer>
        </>
    )
}