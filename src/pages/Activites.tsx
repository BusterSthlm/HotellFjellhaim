import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default function Activities() {

    return (
        <main className="flex flex-col items-center justify-center w-full h-screen text-center">
            <Nav />
            <h1>Activities</h1>
            <p>Welcome to the activities page!</p>
            <Footer />
        </main>
    );
}