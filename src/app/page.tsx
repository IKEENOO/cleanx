"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/components/Main/Main";
import Services from "@/components/Services/Services";
import Process from "@/components/Process/Process";
import Projects from "@/components/Projects/Projects";
import Prices from "@/components/Prices/Prices";
import AboutUs from "@/components/AboutUs/AboutUs";
import Tabs from "@/components/Tabs/Tabs";
import AccordionQuestions from "@/components/Accordion/AccordionQuestioans";
import Form from "@/components/Form/Form";
import UpholsteryCleaning from "@/components/UpholsteryCleaning/UpholsteryCleaning";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="container flex flex-col gap-5">

        <Main></Main>

        <h2 className="py-4 text-3xl font-bold text-center">
          Zakres usług 
        </h2>
        <Services></Services>

        <h2 className="py-4 text-3xl font-bold text-center">
          Jak wygląda proces prania tapicerki? 
        </h2>
        <Process></Process>

        <h2 className="py-4 text-3xl font-bold text-center">
          Realizacje 
        </h2>
        <Projects></Projects>

        <h2 className="py-4 text-3xl font-bold text-center">
          Cennik usług 
        </h2>
        <Prices></Prices>

        <h2 className="py-4 text-3xl font-bold text-center">
          Kilka słów o nas 
        </h2>
        <AboutUs></AboutUs>

        <h2 className="py-4 text-3xl font-bold text-center">
          Dlaczego warto zamówić pranie? 
        </h2>
        <Tabs></Tabs>

        <h2 className="py-4 text-3xl font-bold text-center">
          Najczęściej zadawane pytania
        </h2>
        <AccordionQuestions></AccordionQuestions>

        <h2 id="form" className="py-4 text-3xl font-bold text-center">
          Zamów pranie już teraz
        </h2>
        <Form></Form>

        <UpholsteryCleaning></UpholsteryCleaning>

      </div>

      <Footer></Footer>
    </>
  );
}
