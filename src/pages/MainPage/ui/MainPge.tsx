import {useTranslation} from 'react-i18next';

const MainPge = () => {
    const {t} = useTranslation(['about']);

    return (
        <div>
            {t('Navbar.Home')}
            <div>content text: {t('AboutText')}</div>
        </div>
    );
};

export default MainPge;
