import classes from './ServiceItem.module.scss'

import service24Icon from '../../assets/icons/service-24.svg'
import showerIcon from '../../assets/icons/service-shower.svg'
import drainIcon from '../../assets/icons/service-drain.svg'


const ServiceItem = ({text,index}) => {
    let icon = null;
    switch (index){
        case 0:
            icon = service24Icon;
            break;
        case 1:
            icon = showerIcon;
            break;
        case 2:
            icon = drainIcon;
            break;
    }
    return (
        <li key={index} className={classes['service-item']}> 
            <img  className={classes['service-item__icon']} src={icon} alt="" />
            <p className={classes['service-item__text']}>{text}</p>
        </li>
    );
};

export default ServiceItem;