import Navbar from "@/components/Navbar/Navbar";
import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>

            <div className="container flex flex-col gap-5">

                <h2 className="py-4 text-3xl font-bold text-center">
                    Kilka słów o nas 
                </h2>
                <AboutUs></AboutUs>

            </div>

            <Footer></Footer>
        </>
    )
}