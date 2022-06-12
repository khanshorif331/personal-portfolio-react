import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
	return (
		<section
			id='#about'
			className='grid grid-cols-1 md:grid-cols-2 place-items-center text-white'
		>
			<div className='p-8 md:p-16'>
				<p>Let me introduce myself</p>
				<span className='text-4xl font-bold border-b-2 pb-0'>
					ABOUT
					<span className='text-purple-500'>ME</span>
				</span>
				<p
					data-aos='fade-left'
					data-aos-anchor='#example-anchor'
					data-aos-offset='500'
					data-aos-duration='500'
					className='mt-4'
				>
					My name is Shoriful Islam.I am from Bangladesh.I am a web
					developer.I love to explore new things.I am passsionate about
					Programming.Currently improving my abilities as a Front-End and
					Back-End developer.
				</p>
				<p className='mt-4'>
					I develop websites and applications using HTML,CSS,Javascript.I
					am familiar with developing with provided layouts.I'm always
					improving myself with each project.
				</p>
				<p className='mt-4'>
					I want to be a very good mern stack developer.I would love to see
					myself in a big tech giant company.I hope I can achieve that goal
					soon.
				</p>
				<p className='my-4 font bold text-purple-400 text-2xl'>
					Here are my main skills:
				</p>
				<div className='flex flex-wrap w-full mx-auto justify-around'>
					<img
						className='text-white w-16 rounded-lg'
						src='https://icons-for-free.com/download-icon-html+html5+icon-1320185152054921895_256.png'
						alt=''
					/>
					<img
						className='text-white w-16 rounded-lg'
						src='https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png'
						alt=''
					/>
					<img
						className='text-white w-16 rounded-lg'
						src='https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/ea/55/15/ea55156d-3d20-82ec-cf8f-3011111fb455/source/256x256bb.jpg'
						alt=''
					/>
					<img
						className='text-white w-16 rounded-lg'
						src='https://miro.medium.com/max/256/1*S4f5jqZn2f4APVa6E-uEcw.png'
						alt=''
					/>
					<img
						className='text-white w-16 rounded-lg'
						src='https://developer.asustor.com/uploadIcons/0020_999_1596447532_Node.png'
						alt=''
					/>
					<img
						className='text-white w-16 rounded-lg'
						src='https://playbeech.com/assets/images/playbeech-mongodb.png'
						alt=''
					/>
				</div>
			</div>
			<motion.div
				whileHover={{ scale: 0.9 }}
				whileTap={{ scale: 0.9 }}
				data-aos='zoom-in'
				className='p-8 md:p-16 w-full h-full'
			>
				<img
					className='w-full h-full'
					src='https://flatlogic.github.io/light-blue-vue-admin/img/a5.84f014f0.jpg'
					alt=''
				/>
			</motion.div>
		</section>
	)
}

export default AboutSection
