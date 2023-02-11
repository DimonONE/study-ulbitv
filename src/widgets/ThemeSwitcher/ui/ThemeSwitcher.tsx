import {Theme, useTheme} from 'app/providers/ThemeProvider';
import {type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import LightICON from 'shared/assets/icons/theme-light.svg';
import DarkICON from 'shared/assets/icons/theme-dark.svg';
import {Button} from 'shared/ui';

type ThemeSwitcherProps = {
	className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <DarkICON /> : <LightICON />}
        </Button>
    );
};
