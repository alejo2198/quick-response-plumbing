import classes from './Testimonials.module.scss'
import starIcon from '../../assets/icons/star-blue.svg'
import Swiper from '../Swiper/Swiper';
import TestimonialSlide from '../TestimonialSlide/TestimonialSlide';

const Testimonials = () => {
const STAR_ARRAY = [starIcon,starIcon,starIcon,starIcon,starIcon];
const TESTIMONIALS = [
    {
        text:`This company/Bob is an amazing guy. I had issues with my pipelines and toilet tank and he had this fixed really fast. I live downtown in Toronto and all the plumbers from Mississauga, Scarborough, Brampton wanted to charge more for the travel but Bob did not. His prices are very reasonable and he's honest. He's become my forever go-to person for plumbing help. I found him randomly here on YELP and I can attest he deserves 5 stars.`,
        author:'Simon L.'
    },
    {
        text:`Amazing! I called this morning regarding hooking up the water to a new refrigerator in my office. A gentleman (did not catch his name) came almost immediately and hooked it up very quickly. He was courteous and professional and I will definitely be using this company for all my future plumbing needs. They are the best! If I could give more than 5 stars, I would.`,
        author:'Angelina C.'
    },
    {
        text:`We had a leaking faucet in our kitchen and I called this guy after trying a few others on Yelp.He was able to come after 6pm the same day, which was perfect as we didn't need to take time out of work.I can't find fault in the job he did from start to finish: charged a fair price, gave us options for an affordable replacement and the full details of the manufacturers warranty.`,
        author:'Dan C.'
    }
]

const handleClick = (event)=> {
    event.preventDefault();
    window.open('https://www.yelp.ca/biz/quick-response-plumbing-and-drain-toronto','_blank')
}

    return (
        <section id='testimonials' className={classes['testimonials__section']}>
            <h2 className={classes['testimonials__heading']}>Customer Testimonials</h2>
            <div className={classes['testimonials__stars']}>
                {STAR_ARRAY.map((star,index) => <img key={index} src={star} className={classes['testimonials__star']} alt='star'/>)}
            </div>
            <p className={classes['testimonials__text']}>See why our services are rated 5 stars</p>
            <Swiper testimonials={TESTIMONIALS}/>
            <ul className={classes['testimonials__container']}>
                {TESTIMONIALS.map((testimonial,index) => {
                return <li key={index}><TestimonialSlide testimonial={testimonial}/></li>
                })}
            </ul>
            <button onClick={handleClick} className={classes['testimonials__button']}>See More Reviews</button>
        </section>
    );
};

export default Testimonials;