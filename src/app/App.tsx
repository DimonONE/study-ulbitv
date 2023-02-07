import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", { selected: true }, [theme])}>
      <ThemeSwitcher />
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
