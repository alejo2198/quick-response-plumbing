import MobileNavigation from '../Navigation/MobileNavigation/MobileNavigation';
import companyGraphic from '../../assets/images/plumbingGraphic.jpg'
import anytimeIcon from '../../assets/icons/anytime.png'
import classes from './Header.module.scss'
import TabletNavigation from '../Navigation/TabletNavigation/TabletNavigation';

const Header = () => {
    return (
        <header id='header' className={classes['header']}>
            <div className={classes["header__nav-container"]}>
                <h3 className={classes['header__logo']}>Quick Response Plumbing</h3>
                <MobileNavigation/>
                <TabletNavigation/>
            </div>
            <div className={classes['header__main-container']}>
                <div className={classes['header__image-container']}>
                    <img src={companyGraphic} alt="company graphic" className={classes['header__image']} />
                </div>
                <div className={classes['header__text-container']}>
                    <h1 className={classes['header__heading']}>Flush Your Worries Away</h1>
                    <p className={classes['header__text']}>We service Toronto and the surrounding area. Great service and superior value is just a call away!</p>
                    <div className={classes['header__call-container']}>
                        <a className={classes['header__phone-number']}href="tel:4169992999">416-999-2999</a>
                        <img className={classes['header__icon']} src={anytimeIcon} alt="a 24/7 display" />
                    </div>
                    
                </div>
            </div>
            
        </header>
    );
};

export default Header;