import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { selected: true }, [theme])}>
      <button onClick={toggleTheme}>{theme}</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
