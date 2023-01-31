import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import "./index.scss";
import { Suspense } from "react";
import { MainPgeAsync } from "./pages/MainPage/MainPage.async";

const App = () => {
  return (
    <div className="app">
      <Link to="/" className="nav">
        MainPge
      </Link>
      <Link to="/about" className="nav">
        AboutPage
      </Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<MainPgeAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};

export default App;
