import {type FC} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui';
import cls from './LangSwitcher.module.scss';

export enum ThemeLangSwitcher {
    DEFAULT = 'default',
    LIGHT = 'light',
    DARK = 'dark'
}

type LangSwitcherProps = {
	className?: string;
    theme?: ThemeLangSwitcher
};

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const {i18n} = useTranslation();

    const {theme = ThemeLangSwitcher.DEFAULT , className} = props;

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
    };

    return (
        <Button
            className={classNames(cls.langSwitcher, {}, [className, cls[theme]])}
            onClick={onToggle}
        >
            <div className={cls.circle}>
                <div className={cls.inner}>
                    {i18n.language}
                </div>
            </div>
        </Button>
    );
};
