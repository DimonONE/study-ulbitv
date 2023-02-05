import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { AboutPage } from "pages/AboutPage/ui";
import { MainPge } from "pages/MainPage";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

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

      <AppRouter />
    </div>
  );
};

export default App;
