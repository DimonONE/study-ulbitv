import {type FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {LangSwitcher} from 'widgets/LangSwitcher/LangSwitcher';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

type SidebarProps = {
	className?: string;
};

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [
                className,
            ])}
        >
            <button onClick={onToggle}>toggle</button>

            <div className={cls.swithers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
