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
			<h1 className='text-center text-2xl  md:text-5xl font-bold text-purple-500  mt-4'>
				Bike Warehouse
			</h1>
			<p className='text-center'>Full Stack Project</p>
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
			<section className='text-white md:w-3/4 mx-auto my-4 '>
				<div className='w-full md:w-1/2 mx-auto flex justify-around flex-wrap'>
					<a
						className='border-purple-500 border-b-2 hover:text-purple-500 font-bold'
						href='https://warehouse-management-3798b.web.app/'
						target='_blank'
					>
						Live Website
					</a>
					<a
						className='border-purple-500 border-b-2 hover:text-purple-500 font-bold'
						href='https://github.com/khanshorif331/warehouse-management-client-public'
						target='_blank'
					>
						Client Side Code
					</a>
					<a
						className='border-purple-500 border-b-2 hover:text-purple-500 font-bold'
						href='https://github.com/khanshorif331/warehouse-management-server-public'
						target='_blank'
					>
						Server Side Code
					</a>
				</div>
				<div className='mt-6 p-6 w-full'>
					<span className='border-b-2 border-purple-500'>
						Technologies used in this project :
					</span>
					<p className='mt-4'>
						HTML,CSS,Javascript,React,Tailwind,Firebase,React Query,React
						Hook Form,MongoDB,Express, DaisyUI
					</p>
				</div>
				<div className='mt-2 p-6 w-full text-white'>
					<span className='border-b-2 border-purple-500'>
						Key Features :
					</span>
					<ul>
						<li>
							<p className='my-2'>
								Created a secured authentication system.After logging in
								the user can have some extra routes to see
							</p>
						</li>
						<li>
							<p className='my-2'>
								Users can place orders and in manage inventories
								route,users can manage all their orders and delete
								orders from there.
							</p>
						</li>
						<li>
							<p className='my-2'>
								Also users can add new products and also can see all his
								orders in my items page
							</p>
						</li>
						<li>
							<p className='my-2'>
								There is a inventory in which users can see their
								profile,orders and manage their orders.
							</p>
						</li>

						<li>
							<p className='my-2'>All the data used from mongodb.</p>
						</li>
					</ul>
				</div>
			</section>
		</div>
	)
}

export default ProjectDetail
