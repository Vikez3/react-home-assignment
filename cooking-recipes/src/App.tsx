import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AddRecipe from "./pages/AddRecipe";
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

  return (
    <div className="App">
      <NavBar />
      {data.length > 0 ? (
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/detail/:id" element={<DeatailPage data={data} />} />
          <Route path="/addrecipe" element={<AddRecipe data={data}/>} />
        </Routes>
      ) : (
        <div className="container">
          <h1>Loading...</h1>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
