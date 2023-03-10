import React from 'react'
import css from './Testimonial.module.css';
import Hero from '../../assets/testimonialHero.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import { TestimonialsData }  from '../../data/testimonials'

const Testimonial = () => {
  return (
    <div className={css.testimonial}>
      <div className={css.wrapper}>
        <div className={css.container}>
        <span> Top Ranked </span>
        <span>
          A variety of our products have outstanding performance among them a
          but a few.
        </span>
        </div>

        <img src={Hero} alt="" />

        <div className={css.container}>
        <span>100k</span>
        <span>Happy Customers</span>
        </div>
      </div>
      
      <div className={css.reviews}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tcarousel}
          >
            {
              TestimonialsData.map((testimonial, i)=>(
                <SwiperSlide>
                    <div className={css.testimonials}>
                      <img src={testimonial.image} alt="" />
                      <span>{testimonial.comment}</span>
                      <hr />
                      <span>{testimonial.name}</span>
                    </div>
                </SwiperSlide>
              ))
            }
        </Swiper>

      </div>
    </div>
  );
}

export default Testimonial