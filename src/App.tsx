import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import "./styles/index.scss";
import { Suspense } from "react";
import { MainPgeAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { selected: true }, [theme])}>
      <button onClick={toggleTheme}>{theme}</button>

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
