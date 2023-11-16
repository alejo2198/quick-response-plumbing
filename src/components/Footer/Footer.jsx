import classes from './Footer.module.scss'
import companyGraphic from '../../assets/images/plumbingGraphic.jpg'

const Footer = () => {
    return (
        <footer className={classes['footer']}>
            <div className={classes['desktop-layout']}>
                <div className={classes['footer__container']}>
                    <img  className={classes['footer__image']} src={companyGraphic} alt="company graphic" />
                    <p className={classes['footer__text']}>We service Toronto and the surrounding area. Call now for all your plumbing needs.</p>
                </div>
                <div className={classes['footer__container-group']}>
                    <div className={classes['footer__container-sections']}>
                        <a className={classes['footer__heading']} href="tel:+4169992999">Contact Us</a>
                        <p className={classes['footer__number']}>416-999-2999</p>
                    </div>
                    <div className={classes['footer__container-sections']}>
                        <a className={classes['footer__heading']} href="#services">Services</a>
                        <ul className={classes['footer__service-list']}>
                            <li className={classes['footer__service']}>24 Hour Emergency Plumping</li>
                            <li className={classes['footer__service']}>Fixture Repair and Installation</li>
                            <li className={classes['footer__service']}>Drain Cleaning and Unclogging</li>
                        </ul>
                    </div>
                    <div className={classes['footer__container-sections']}>
                        <a  className={classes['footer__heading']} href="#why-us">Why Choose Us?</a>
                    </div>
                </div> 
            </div>
            <p className={classes['footer__copyright']}>Copyright © 2023 Quick Response Plumbing. All rights reserved.</p>
            
        </footer>
    );
};

export default Footer;