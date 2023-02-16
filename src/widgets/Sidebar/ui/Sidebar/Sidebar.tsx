import {type FC, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import {LangSwitcher, ThemeLangSwitcher} from 'widgets/LangSwitcher/ui/LangSwitcher';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

type SidebarProps = {
	className?: string;
};

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);
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
            <Button data-testid='sidebar-toggle' onClick={onToggle}>{t('Toggle')}</Button>

            <div className={cls.swithers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} theme={ThemeLangSwitcher.DEFAULT} />
            </div>
        </div>
    );
};
