import React from 'react'
import ReactTyped from 'react-typed'
import bannerImg from '../../assets/images/banner.png'
import Button from '../../components/Button'
// import Button from '../../components/Button'

const Banner = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 mx-16 max-h[400px] place-items-center gap-8'>
			<div>
				<h1 className='text-white'>
					Hello,<span className='text-purple-500'>I'M,</span>
				</h1>
				<h1 className='text-5xl md:text-7xl font-bold text-white'>
					SHORIFUL <span className='text-purple-500'>ISLAM</span>
				</h1>
				<ReactTyped
					className='text-purple-500 font-bold text text-3xl mt-2'
					strings={[
						'A Mern Stack DEVELOPER',
						'Passionate PROGRAMMER',
						'Curious To Technologies',
						'Quick LEARNER',
					]}
					typeSpeed={40}
					backSpeed={50}
					loop
				/>
				<p className='text-white mt-4'>
					I'm passionate web developer with a focus oon web development
					with Javascript.
				</p>
				<div className='mt-8'>
					<Button>CONTACT</Button>
					<span className='ml-2'>
						<Button>RESUME</Button>
					</span>
				</div>
			</div>
			<div>
				<div className='text-white w-full hidden md:block'>
					<img className='w-full' src={bannerImg} alt='Reading svg' />
				</div>
			</div>
		</div>
	)
}

export default Banner
