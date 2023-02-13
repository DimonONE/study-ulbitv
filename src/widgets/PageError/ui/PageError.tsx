import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({className}) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls['page-error'], {}, [className])}>
            <p>{t('PageError')}</p>
            <Button onClick={reloadPage} className={classNames(cls['reload'])}>{t('Reload')}</Button>
        </div>
    );
};
