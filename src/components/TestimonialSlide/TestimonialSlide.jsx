import classes from './TestimonialSlide.module.scss'
import starIcon from '../../assets/icons/star-yellow.svg'

const TestimonialSlide = ({testimonial}) => {
    const STAR_ARRAY = [starIcon,starIcon,starIcon,starIcon,starIcon]

    return (
        <div className={classes['testimonial']}>
            <div className={classes['testimonial__stars']}>
                {STAR_ARRAY.map((star,index) => <img key={index} src={star} className={classes['testimonial__star']} alt='star'/>)}
            </div>
            <p className={classes['testimonial__text']}>{testimonial.text}</p>
            <p className={classes['testimonial__text']}>{testimonial.author}</p>
        </div>
    );
};

export default TestimonialSlide;