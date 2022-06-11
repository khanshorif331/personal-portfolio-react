// import React from 'react'
import React from 'react'
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
			<h1 className='text-center text-2xl  md:text-5xl font-bold text-purple-500  mt-4'>
				Manufacturer Website
			</h1>
			<p className='text-center'>Full Stack</p>
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
						<img src={manImg1} alt='imea1' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={manImg2} alt='imea2' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={manImg3} alt='imea3' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={manImg4} alt='imea4' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={manImg5} alt='img5' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={manImg6} alt='imea6' />
					</SwiperSlide>
				</Swiper>
			</div>
			<section className='text-white md:w-3/4 mx-auto my-4 '>
				<div className='w-full md:w-1/2 mx-auto flex justify-around flex-wrap'>
					<a
						className='border-purple-500 border-b-2 hover:text-purple-500 font-bold'
						href='https://manufacturer-website-6ea45.web.app/'
						target='_blank'
					>
						Live Website
					</a>
					<a
						className='border-purple-500 border-b-2 hover:text-purple-500 font-bold'
						href='https://github.com/khanshorif331/manufacturer-website-client-public'
						target='_blank'
					>
						Client Side Code
					</a>
					<a
						className='border-purple-500 border-b-2 hover:text-purple-500 font-bold'
						href='https://github.com/khanshorif331/manufacturer-website-server-public'
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
								Created a secured authentication system using
								firebase.So unknown user needs to login to buy any
								product.
							</p>
						</li>
						<li>
							<p className='my-2'>
								Also there is a different role based system.Normal users
								can manage their orders in the dashboard.Admin can
								manage all the users,make other users admin and can add
								new products.
							</p>
						</li>
						<li>
							<p className='my-2'>
								There is a payment system using stripe.After buying the
								product the user can pay.And after the payment admin can
								change the order status from pending to shipped.
							</p>
						</li>
						<li>
							<p className='my-2'>
								There is a dashboard in which users can see their
								profile,orders and pay their orders and delete etc.
							</p>
						</li>
						<li>
							<p className='my-2'>
								For Admin there some extraa features.Admin can control
								the system.
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

export default ManufactureDetail
