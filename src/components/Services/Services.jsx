import classes from './Services.module.scss'
import ServiceItem from '../ServiceItem/ServiceItem';
const SERVICE_DATA = [
   '24/7 Emergency Service',
   'Fixture Repair and Installation',
   'Drain Cleaning and Unclogging'
]

const Services = () => {
    return (
        <section id='services' className={classes.services}>
            <h2 >Our Services</h2>
            <p  className={classes['services__text']}>No job is too big or too small. We give you the best advice for your plumbing needs and we ensure the job is done right the first time.</p>
            <ul className={classes['services__list']}>
                {SERVICE_DATA.map((service,index) => <ServiceItem key={index} text={service} index={index}/>)}
            </ul>
            <div className={classes['mission-statement__container']}>
                <p className={classes['mission-statement']}>Our team of experienced and licensed plumbers is dedicated to solving all your plumbing needs, whether it's a pesky leak, a clogged drain, or a full-scale plumbing emergency. We take pride in our quick response times, transparent pricing, and unmatched expertise in the Toronto area. </p>
            </div>
        </section>
    );
};

export default Services;