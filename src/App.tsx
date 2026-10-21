import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import Activities from "./pages/Activites";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Company from "./pages/Company";
import Experience from "./pages/Experience";
import Resturant from "./pages/Resturant";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/company" element={<Company />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/restaurant" element={<Resturant />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
