import React from 'react'
import ReactTyped from 'react-typed'
import bannerImg from '../../assets/images/banner.png'
import Button from '../../components/Button'
import { motion } from 'framer-motion'

const Banner = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 mx-16 max-h[400px] place-items-center gap-8'>
			<div>
				<h1 className='text-white'>
					Hello <span className=''>I AM,</span>
				</h1>
				<h1 className='text-5xl md:text-7xl font-bold text-white'>
					SHORIFUL <span className='text-purple-500'>ISLAM</span>
				</h1>
				<ReactTyped
					className='text-purple-500 font-bold text text-3xl mt-2'
					strings={[
						'A Front End DEVELOPER',
						'Passionate PROGRAMMER',
						'Mern Stack Developer',
					]}
					typeSpeed={40}
					backSpeed={50}
					loop
				/>
				<p className='text-white mt-4'>
					I'm passionate web developer with a focus on web development with
					Javascript.
				</p>
				<div className='mt-8'>
					<Button>CONTACT</Button>
					<span className='ml-2'>
						<Button>
							<a href='https://drive.google.com/uc?export=download&id=14WmYp-zdwhhB_Uv9W7i6M6V2V46GVXpO'>
								Resume
							</a>
						</Button>
					</span>
				</div>
			</div>
			<div>
				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					data-aos='zoom-in'
					className='text-white w-full hidden md:block'
				>
					<img className='w-full' src={bannerImg} alt='Reading svg' />
				</motion.div>
			</div>
		</div>
	)
}

export default Banner
