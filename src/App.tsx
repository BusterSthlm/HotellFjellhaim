import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import Activities from "./pages/Activites";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import Experience from "./pages/Experience";
import Resturant from "./pages/Resturant";



function App() {
  return (
    <Router>
      <Nav />
      <main className="min-h-screen pt-16">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Resturant" element={<Resturant />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
