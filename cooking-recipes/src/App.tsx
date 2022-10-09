import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import DeatailPage from "./pages/DeatailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DeatailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
