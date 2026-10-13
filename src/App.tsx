import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import HomePage from "./pages/HomePage";



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
