import { useMemo, useState, ReactNode } from 'react';
import {LOCAL_STORAGE_THEME, Theme, ThemeContext} from '../lib/ThemeContext';

const defaultTheme
  = (localStorage.getItem(LOCAL_STORAGE_THEME) as Theme) || Theme.LIGHT;

const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
