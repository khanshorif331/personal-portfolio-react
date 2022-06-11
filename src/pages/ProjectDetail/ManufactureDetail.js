// import React from 'react'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import manImg1 from '../../assets/images/final/ass-12/12.1.png'
import manImg2 from '../../assets/images/final/ass-12/12.2.png'
import manImg3 from '../../assets/images/final/ass-12/12.3.png'
import manImg4 from '../../assets/images/final/ass-12/12.4.png'
import manImg5 from '../../assets/images/final/ass-12/12.5.png'
import manImg6 from '../../assets/images/final/ass-12/12.6.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import './styles.css'
import './styles.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'

const ManufactureDetail = () => {
	return (
		<div className='text-white'>
			<h1>Hello Manufacture Detail</h1>
			<div className='w-full'>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'1'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 50,
						},
					}}
					pagination={true}
					modules={[Autoplay, EffectCoverflow, Pagination]}
					className='mySwiper'
				>
					<SwiperSlide>
						<img src={manImg1} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={manImg2} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={manImg3} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={manImg4} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={manImg5} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={manImg6} />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default ManufactureDetail
