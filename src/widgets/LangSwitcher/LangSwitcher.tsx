import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === "uk" ? "en" : "uk");
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={onToggle}
    >
      {t("Translate")}
    </Button>
  );
};