import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import Activities from "./pages/Activites";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Company from "./pages/Company";
import Experience from "./pages/Experience";
import Resturant from "./pages/Resturant";



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Activities />} />
        <Route path="/" element={<Booking />} />
        <Route path="/" element={<Company />} />
        <Route path="/" element={<Experience />} />
        <Route path="/" element={<Resturant />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
