import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFound.module.scss';

interface NotFoundProps {
className?: string
  
}
const NotFound: FC<NotFoundProps> = ({className}) => {
    const {t} = useTranslation('notFound');
    return (
        <div className={classNames(cls['not-found'], {}, [className])}>
            {t('Not found')}
        </div>
    );
};

export default NotFound;