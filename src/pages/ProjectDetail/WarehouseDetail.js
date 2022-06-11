// import React from 'react'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import warImg1 from '../../assets/images/final/ass-11/11.1.png'
import warImg2 from '../../assets/images/final/ass-11/11.2.png'
import warImg3 from '../../assets/images/final/ass-11/11.3.png'
import warImg4 from '../../assets/images/final/ass-11/11.4.png'
import warImg5 from '../../assets/images/final/ass-11/11.5.png'
// import warImg6 from '../../assets/images/final/ass-11/11.6.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import './styles.css'
import './styles.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'

const ProjectDetail = () => {
	return (
		<div className='text-white'>
			<h1>Helloo warehouse</h1>
			<div>
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
						<img src={warImg1} alt='imagetel' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={warImg2} alt='imagenoo' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={warImg3} alt='imagesl' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={warImg4} alt='imagev' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={warImg5} alt='imagede' />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default ProjectDetail
