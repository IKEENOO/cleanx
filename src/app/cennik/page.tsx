import Navbar from "@/components/Navbar/Navbar";
import Prices from "@/components/Prices/Prices";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>

            <div className="container flex flex-col gap-5">

                <h2 className="py-4 text-3xl font-bold text-center">
                    Cennik usług
                </h2>
                <Prices></Prices>

                <h2 className="py-4 text-3xl font-bold text-center">
                    Zamów pranie już teraz
                </h2>
                <Form></Form>

            </div>

            <Footer></Footer>
        </>
    )
}