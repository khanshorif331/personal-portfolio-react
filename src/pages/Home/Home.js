import React from 'react'
import { motion } from 'framer-motion'
import Banner from './Banner'
import AboutSection from './AboutSection'
import Services from './Services/Services'
import Projects from './Projects/Projects'

const Home = () => {
	return (
		<div>
			{/* <motion.div
				animate={{
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 90, 270, 270, 0],
					borderRadius: ['20%', '20%', '50%', '50%', '20%'],
				}}
				className='w-[400px] h-[400px] bg-red-500 mx-auto'
			></motion.div> */}
			<Banner></Banner>
			<AboutSection></AboutSection>
			<Services></Services>
			<Projects></Projects>
		</div>
	)
}

export default Home
