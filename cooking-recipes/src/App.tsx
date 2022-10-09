import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import DeatailPage from "./pages/DeatailPage";
import HomePage from "./pages/HomePage";
import { incrementByAmount } from "./redux/counter";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const data = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => dispatch(incrementByAmount(data)));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/detail" element={<DeatailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
