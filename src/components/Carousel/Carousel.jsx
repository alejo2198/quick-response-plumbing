import classes from './Carousel.module.scss'

import picture1 from '../../assets/images/bogdan1.png'
import picture2 from '../../assets/images/bogdan2.png'
import picture3 from '../../assets/images/bogdan3.png'
import picture4 from '../../assets/images/bogdan4.png'
import { useEffect } from 'react'

const Carousel = () => {

    //this useEffect is responsible for doubling the srollers
    // contents so it can perform the animation
    useEffect(()=>{
        const scroller = document.querySelectorAll(`.${classes['media-scroller']}`)[0]
        const scrollerContent = Array.from(scroller.children);
        if(scrollerContent.length < 5){
            scrollerContent.forEach(item =>{
                const duplicatedItem = item.cloneNode(true)
                duplicatedItem.classList.add(classes['media-scroller__image'])
                scroller.appendChild(duplicatedItem)
            })
        }
    },[])

    return (
        <div className={classes['media-scroller']}>
            <img className={classes['media-scroller__image']} src={picture1} alt="plumber at work" />
            <img className={classes['media-scroller__image']} src={picture2} alt="plumber fixing toilet" />
            <img className={classes['media-scroller__image']} src={picture3} alt="plumber unclogging toilet" />
            <img className={classes['media-scroller__image']} src={picture4} alt="plumer using equipment" />  
        </div>
    );
};

export default Carousel;