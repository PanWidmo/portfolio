import styles from '@/components/Slider/Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { DishesForm } from '@/components/Slides/DishesForm.jsx';
import { BlogAppRedux } from '@/components/Slides/BlogAppRedux.jsx';
import { GroceryList } from '@/components/Slides/GroceryList.jsx';
import { PizzaPage } from '@/components/Slides/PizzaPage.jsx';
import { InventoryOnline } from '@/components/Slides/InventoryOnline.jsx';
import { BlogApp } from '@/components/Slides/BlogApp.jsx';

export const Slider = () => {
    return (
        <div className={styles.slider}>
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={200}
                grabCursor={true}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                    clickable: true,
                }}
            >
                <SwiperSlide>
                    <InventoryOnline />
                </SwiperSlide>
                <SwiperSlide>
                    <DishesForm />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogAppRedux />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogApp />
                </SwiperSlide>
                <SwiperSlide>
                    <GroceryList />
                </SwiperSlide>
                <SwiperSlide>
                    <PizzaPage />
                </SwiperSlide>
            </Swiper>
            <div className={styles.slider__nav}>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    );
};
