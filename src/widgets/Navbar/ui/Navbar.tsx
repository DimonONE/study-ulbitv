import {useState, type FC} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme, Button, Modal} from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Contacts } from 'shared/ui/Contacts/Contacts';
import cls from './Navbar.module.scss';

type NavbarProps = {
	className?: string;
};

export const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink to='/' theme={AppLinkTheme.PRIMARY} className={cls.navbarItem}>
                    {t('Navbar.Home')}
                </AppLink>
                <AppLink
                    to='/about'
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.navbarItem}
                >
                    {t('Navbar.AboutUs')}
                  
                </AppLink>
            </div>
            <Button theme={ButtonTheme.BACKGROUND} onClick={() => setOpen(true)}>
                {t('Communication')}
            </Button>
            <Modal isOpen={open} onClosed={() => setOpen(false)}> 
                <Contacts />
            </Modal>
        </div>
    );
};
