import classes from './TabletNavigation.module.scss'

const TabletNavigation = () => {
    return (
        <nav className={classes['nav']}>
            <ul className={classes['nav__links']}>
                <li><a className={classes['nav__link']} href="#services">Services</a></li>
                <li> <a className={classes['nav__link']} href="#why-us">Why Us?</a></li>
                <li><a className={classes['nav__link']} href="#testimonials">Testimonials</a></li>
            </ul>
        </nav>
    );
};

export default TabletNavigation;