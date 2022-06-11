import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import dreamImg1 from '../../assets/images/final/ass-10/10.1.png'
import dreamImg2 from '../../assets/images/final/ass-10/10.2.png'
import dreamImg3 from '../../assets/images/final/ass-10/10.3.png'
import dreamImg4 from '../../assets/images/final/ass-10/10.4.png'
// import warImg5 from '../../assets/images/final/ass-11/11.5.png'
// import warImg6 from '../../assets/images/final/ass-11/11.6.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import './styles.css'
import './styles.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'

const DreamDetail = () => {
	return (
		<div className='text-white'>
			<h1>Hello dreamer</h1>
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
						<img src={dreamImg1} alt='imagetel' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={dreamImg2} alt='imagenoo' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={dreamImg3} alt='imagesl' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={dreamImg4} alt='imagev' />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default DreamDetail
