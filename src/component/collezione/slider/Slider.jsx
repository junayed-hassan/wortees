
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductImage from "../../../assets/images/Rectangle29.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='flex gap-3 rounded-xl text-start p-2.5'>
                <img src={ProductImage} alt="" />
                <div>
                    <h2 className='mb-2 text-xl font-bold'>Quaintrelle</h2>
                    <p>A stylish woman who lives in the name of passion and pursues life’s pleasures.</p>
                    <p className='mt-2 font-semibold text-red-600'>60,00 €</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 rounded-xl text-start p-2.5'>
                <img src={ProductImage} alt="" />
                <div>
                    <h2 className='mb-2 text-xl font-bold'>Quaintrelle</h2>
                    <p>A stylish woman who lives in the name of passion and pursues life’s pleasures.</p>
                    <p className='mt-2 font-semibold text-red-600'>60,00 €</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 rounded-xl text-start p-2.5'>
                <img src={ProductImage} alt="" />
                <div>
                    <h2 className='mb-2 text-xl font-bold'>Quaintrelle</h2>
                    <p>A stylish woman who lives in the name of passion and pursues life’s pleasures.</p>
                    <p className='mt-2 font-semibold text-red-600'>60,00 €</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 rounded-xl text-start p-2.5'>
                <img src={ProductImage} alt="" />
                <div>
                    <h2 className='mb-2 text-xl font-bold'>Quaintrelle</h2>
                    <p>A stylish woman who lives in the name of passion and pursues life’s pleasures.</p>
                    <p className='mt-2 font-semibold text-red-600'>60,00 €</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 rounded-xl text-start p-2.5'>
                <img src={ProductImage} alt="" />
                <div>
                    <h2 className='mb-2 text-xl font-bold'>Quaintrelle</h2>
                    <p>A stylish woman who lives in the name of passion and pursues life’s pleasures.</p>
                    <p className='mt-2 font-semibold text-red-600'>60,00 €</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 rounded-xl text-start p-2.5'>
                <img src={ProductImage} alt="" />
                <div>
                    <h2 className='mb-2 text-xl font-bold'>Quaintrelle</h2>
                    <p>A stylish woman who lives in the name of passion and pursues life’s pleasures.</p>
                    <p className='mt-2 font-semibold text-red-600'>60,00 €</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 rounded-xl text-start p-2.5'>
                <img src={ProductImage} alt="" />
                <div>
                    <h2 className='mb-2 text-xl font-bold'>Quaintrelle</h2>
                    <p>A stylish woman who lives in the name of passion and pursues life’s pleasures.</p>
                    <p className='mt-2 font-semibold text-red-600'>60,00 €</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 rounded-xl text-start p-2.5'>
                <img src={ProductImage} alt="" />
                <div>
                    <h2 className='mb-2 text-xl font-bold'>Quaintrelle</h2>
                    <p>A stylish woman who lives in the name of passion and pursues life’s pleasures.</p>
                    <p className='mt-2 font-semibold text-red-600'>60,00 €</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 rounded-xl text-start p-2.5'>
                <img src={ProductImage} alt="" />
                <div>
                    <h2 className='mb-2 text-xl font-bold'>Quaintrelle</h2>
                    <p>A stylish woman who lives in the name of passion and pursues life’s pleasures.</p>
                    <p className='mt-2 font-semibold text-red-600'>60,00 €</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
