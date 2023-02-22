import { Counter } from 'entities/Counter';
import {useTranslation} from 'react-i18next';

const MainPge = () => {
    const {t} = useTranslation(['about']);

    return (
        <div>
            {t('Navbar.Home')}
            <div>{t('AboutText')}</div>

            <Counter />
        </div>
    );
};

export default MainPge;
