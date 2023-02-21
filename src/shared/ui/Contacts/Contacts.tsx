import { FC } from 'react';
import {useTranslation} from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Contacts.module.scss';

interface ContactsProps {
  className?: string
}

const EMAIL = 'dimonmezey@gmail.com';
const TELEGRAM = 'https://t.me/@Michael_D_I';
const PHONE = '+380962863614';

export const Contacts: FC<ContactsProps> = ({className}) => {
    const {t}= useTranslation();
    return (
        <div className={classNames(cls.contacts, {}, [className])}>
            <a href={TELEGRAM} className={cls.link}>
                <span>{t('Telegram')}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className={cls.link}>
                <span>{EMAIL}</span>
            </a>
            <a href={`tel:${PHONE}`} className={cls.link}>
                <span>{t('Phone')}</span>
            </a>
        </div>
    );
};
