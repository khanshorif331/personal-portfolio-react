import React from 'react'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import { HiDesktopComputer } from '@heroicons/react/solid'
import {
	FaCode,
	FaDesktop,
	FaMobileAlt,
	FaCamera,
	FaFile,
} from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import './styles.css
import './styles.css'

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper'

const Services = () => {
	return (
		<section className='mt-10'>
			<div className='text-white text-center'>
				<p>What I will do for you</p>
				<p className='text-5xl font-bold text-purple-500'>SERVICES</p>
			</div>

			<div className='h-[400px] p-6 md:px-16'>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					freeMode={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
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
					modules={[Autoplay, FreeMode, Pagination]}
					className='mySwiper'
				>
					<SwiperSlide>
						<div className='p-6 text-white border-2 border-purple-500 '>
							<FaCode className='h-10 w-10 text-purple-500 mx-auto' />
							<p class='text-center font-bold text-2xl'>web dev</p>
							<p className='mt-2'>
								I develop website.I create high performance website with
								blazing fast speed.
							</p>
						</div>
					</SwiperSlide>
					{/* slider-2 */}
					<SwiperSlide>
						<div className='p-6 text-white border-2 border-purple-500 '>
							<FaDesktop className='h-10 w-10 text-purple-500  mx-auto' />
							<p class='text-center font-bold text-2xl'>web design</p>
							<p className='mt-2'>
								I develop website.I create high performance website with
								blazing fast speed.
							</p>
						</div>
					</SwiperSlide>
					{/* slider-3 */}
					<SwiperSlide>
						<div className='p-6 text-white border-2 border-purple-500 '>
							<FaMobileAlt className='h-10 w-10 text-purple-500  mx-auto' />
							<p class='text-center font-bold text-2xl'>app dev</p>
							<p className='mt-2'>
								I develop website.I create high performance website with
								blazing fast speed.
							</p>
						</div>
					</SwiperSlide>
					{/* slide-4 */}
					<SwiperSlide>
						<div className='p-6 text-white border-2 border-purple-500 '>
							<FaCamera className='h-10 w-10 text-purple-500  mx-auto' />
							<p class='text-center font-bold text-2xl'>photography</p>
							<p className='mt-2'>
								I develop website.I create high performance website with
								blazing fast speed.
							</p>
						</div>
					</SwiperSlide>
					{/* slide-5 */}
					<SwiperSlide>
						<div className='p-6 text-white border-2 border-purple-500 '>
							<FaFile className='h-10 w-10 text-purple-500  mx-auto' />
							<p class='text-center font-bold text-2xl'>
								brand identity
							</p>
							<p className='mt-2'>
								I develop website.I create high performance website with
								blazing fast speed.
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default Services
