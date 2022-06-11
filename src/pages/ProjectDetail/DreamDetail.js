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
			<h1 className='text-center text-2xl  md:text-5xl font-bold text-purple-500  mt-4'>
				Dream Event Photography
			</h1>
			<p className='text-center'>Frontend Project</p>
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
			<section className='text-white md:w-3/4 mx-auto my-4 '>
				<div className='w-full md:w-1/2 mx-auto flex justify-around flex-wrap'>
					<a
						className='border-purple-500 border-b-2 hover:text-purple-500 font-bold'
						href='https://dream-event-photography.web.app/'
						target='_blank'
					>
						Live Website
					</a>
					<a
						className='border-purple-500 border-b-2 hover:text-purple-500 font-bold'
						href='https://github.com/khanshorif331/dream-event-photography-client'
						target='_blank'
					>
						Client Side Code
					</a>
					{/* <a
						className='border-purple-500 border-b-2 hover:text-purple-500 font-bold'
						href='https://github.com/khanshorif331/manufacturer-website-server-public'
						target='_blank'
					>
						Server Side Code
					</a> */}
				</div>
				<div className='mt-6 p-6 w-full'>
					<span className='border-b-2 border-purple-500'>
						Technologies used in this project :
					</span>
					<p className='mt-4'>
						HTML,CSS,Javascript,React,Bootstrap,Firebase,React
						Router,React Toastify.
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
								Authentication system using firebase.User can login with
								google,github and create new account also.
							</p>
						</li>
						<li>
							<p className='my-2'>
								Created a routing system using react router.If the users
								want to buy a specific product,it will go to a new page
								with that product’s detailed info.
							</p>
						</li>
						<li>
							<p className='my-2'>
								Fully responsive website using bootstrap.
							</p>
						</li>
						<li>
							<p className='my-2'>
								Users can Sign in with github ,google and facebook in
								this website
							</p>
						</li>
						<li>
							<p className='my-2'>
								There is protected route also.If you want to go to that
								page you need to login or signup.
							</p>
						</li>
					</ul>
				</div>
			</section>
		</div>
	)
}

export default DreamDetail
