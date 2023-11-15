import checkmarkIcon from '../../assets/icons/checkmark.svg'
import classes from './WhyUs.module.scss'
import plumbingGraphic from '../../assets/illustrations/plumbing.svg'
const WhyUs = () => {
    const REASONS_DATA = [
        'Licensed, insured & bounded',
        'Affordable prices and upfront flat rate',
        'No extra charges on weekends or holidays',
        'Will beat any written estimate',
        'We only use high quality parts'
     ]
    return (
        <section id='why-us' className={classes.reasons}>
            <h2 className={classes['reasons__header']} >Why Choose Us?</h2>
            <div className={classes['reasons__container']}>
                <img className={classes['reasons__illustration']} src={plumbingGraphic} alt="plumbing graphic of multiple men working on a faucet" />
                <ul className={classes['reasons__reason-list']}>
                    {REASONS_DATA.map((reason,index) => {
                        return(
                            <li key={index} className={classes['reasons__reason']}>
                                <img className={classes['reasons__icon']} src={checkmarkIcon} alt="checkmark" />
                                <p className={classes['reasons__text']}>{reason}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
            <div className={classes['cta']}>
                <a className={classes['cta__phone-number']}href="tel:+4169992999">416-999-2999</a>
                <p className={classes['cta__text']}>Call now for a job estimate!</p>
            </div>
        </section>
    );
};

export default WhyUs;