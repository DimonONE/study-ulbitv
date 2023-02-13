import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import {useTranslation} from 'react-i18next';
import classes from './aboutPage.module.scss';

const AboutPage = () => {
    const {t} = useTranslation();

    return (
        <div className={classes.about}>
            {t('Navbar.AboutUs')}
            <BugButton/>
        </div>
    );
};

export default AboutPage;
