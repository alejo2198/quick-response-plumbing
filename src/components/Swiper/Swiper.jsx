import TestimonialSlide from "../TestimonialSlide/TestimonialSlide";
import classes from './Swiper.module.scss'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();



const Swiper = ({testimonials}) => {
    const swiperElRef = useRef(null);
    useEffect(() => {
      const swiperContainer = swiperElRef.current;
      const params = {
          pagination: true,
          loop:true,
          injectStyles: [
              `
              .swiper-pagination-bullet-active{
                  width: 0.5625rem !important;
                  height: 0.5625rem !important; 
              }
              .swiper-pagination-bullet{
                width: 0.375rem;
                height: 0.375rem;
                background-color: #294458;
                margin:0 .125rem !important;
                opacity:1;
            }
          `,
          ]
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
  }, []);
  
    return (
      <swiper-container
        class={classes.swiper}
        ref={swiperElRef}
        slides-per-view="1"
        pagination="true"
        init='false'
      >
        {testimonials.map((testimonial,index) => {
            return <swiper-slide class={classes['swiper__slide']} key={index}> <TestimonialSlide testimonial={testimonial}/></swiper-slide>
        })}
      </swiper-container>
   
    );
  };

export default Swiper;

