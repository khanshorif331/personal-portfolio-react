import React from 'react'
import ReactTyped from 'react-typed'
import bannerImg from '../../assets/images/banner.png'

const Banner = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 mx-16 min-h-screen place-items-center'>
			<div>
				<h1 className='text-white'>
					<span className='text-purple-500'>Hello</span>, I'M,
				</h1>
				<h1 className='text-7xl font-bold text-white'>
					SHORIFUL <span className='text-purple-500'>ISLAM</span>
				</h1>
				<ReactTyped
					className='text-purple-500 font-bold text text-3xl'
					strings={[
						'A Mern Stack DEVELOPER',
						'Passionate PROGRAMMER',
						'Quick LEARNER',
					]}
					typeSpeed={40}
					backSpeed={50}
					loop
				/>
			</div>
			<div>
				<div className='text-white w-full'>
					<img src={bannerImg} alt='' />
				</div>
			</div>
		</div>
	)
}

export default Banner
