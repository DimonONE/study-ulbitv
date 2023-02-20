import {type FC, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme, Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import {LangSwitcher, ThemeLangSwitcher} from 'widgets/LangSwitcher/ui/LangSwitcher';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';

type SidebarProps = {
	className?: string;
};

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(true);
    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [
                className,
            ])}
        >

            <div className={classNames(cls.links)}>
                <AppLink 
                    to='/' 
                    theme={AppLinkTheme.PRIMARY} 
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Navbar.Home')}</span>
                </AppLink>
                <AppLink
                    to='/about'
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>{t('Navbar.AboutUs')}</span>
                </AppLink>
            </div>

            <Button data-testid='sidebar-toggle'
                theme={ButtonTheme.BACKGROUND}
                className={classNames(cls.toggle)}
                square
                onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.swithers}>
                <ThemeSwitcher className={cls.switch} />
                <LangSwitcher 
                    className={cls.switch}
                    theme={ThemeLangSwitcher.DEFAULT} 
                />
            </div>
        </div>
    );
};
