import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to="/" theme={AppLinkTheme.PRIMARY} className={cls.navbarItem}>
          MainPge
        </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.SECONDARY}
          className={cls.navbarItem}
        >
          AboutPage
        </AppLink>
      </div>
    </div>
  );
};
