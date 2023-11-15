import hamburger from '../../../assets/icons/hamburger-icon.svg'
import closeMenu from '../../../assets/icons/close-menu.svg'
import { useState } from 'react';
import classes from './MobileNavigation.module.scss'
import Modal from '../../Modal/Modal';

const MobileNavigation = () => {
    const [NavIsOpen,setNavIsOpen] = useState(false);
    const [NavIsClicked,setNavIsClicked] = useState(false);

    const handleOpenNav = (event) => {   
        setNavIsOpen(true)
    }
    const handleCloseNav = (event) => {
        setNavIsClicked(true)
        setTimeout(()=>{
            setNavIsOpen(false)
            setNavIsClicked(false)
        },500)
        
    }

    let content = <img src={hamburger} className={classes.hamburger}alt="hamburger menu" onClick={handleOpenNav}/>
    let NavClasses = `${classes.nav} ${classes['slide-in']}`
    if(NavIsClicked){
        NavClasses = `${classes.nav} ${classes['slide-out']}`
    }
    if(NavIsOpen){
        content = (
            <Modal closeModal={handleCloseNav}>
                <nav className={NavClasses}>
                    <img src={closeMenu} className={classes['nav__close-icon']} alt="close menu button" onClick={handleCloseNav}/>
                    <ul className={classes['nav__links']}>
                        <li><a className={classes['nav__link']} href="#services">Services</a></li>
                        <li> <a className={classes['nav__link']} href="#why-us">Why Us?</a></li>
                        <li><a className={classes['nav__link']} href="#testimonials">Testimonials</a></li>
                    </ul>
                </nav>
            </Modal>
        )
    }

    return (
        <>
            {content}   
        </>
    );
};

export default MobileNavigation;