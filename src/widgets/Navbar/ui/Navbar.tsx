import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to="/" theme={AppLinkTheme.PRIMARY} className={cls.navbarItem}>
          {t("Navbar.Home")}
        </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.SECONDARY}
          className={cls.navbarItem}
        >
          {t("Navbar.AboutUs")}
        </AppLink>
      </div>
    </div>
  );
};