import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

export enum ThemeLoader {
    LIGHT = 'light',
    DARK = 'dark'
}

interface LoaderProps {
    className?: string
    theme?: ThemeLoader
}

export const Loader: FC<LoaderProps> = (props) => {
    const {theme = ThemeLoader.LIGHT , className} = props;
    return (
        <span className={classNames(cls['loader'], {}, [className, cls[theme]])}></span>
    );
};
