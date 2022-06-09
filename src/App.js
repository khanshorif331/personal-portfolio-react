import React, { useEffect, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import logo from './logo.svg'
import './App.css'
import particlesOptions from './particles.json'
import Navbar from './components/Shared/Navbar'
import ReactTyped from 'react-typed'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './components/Home/Home'

function App() {
	const particlesInit = useCallback(main => {
		loadFull(main)
	}, [])
	useEffect(() => {
		AOS.init({ duration: 2000 })
		AOS.refresh()
	}, [])

	return (
		<div>
			<Particles options={particlesOptions} init={particlesInit} />
			<Navbar></Navbar>
			<Home></Home>
			{/* <span
				// style={{ color: '#7026b9' }}
				className='text-purple-500 text-3xl font-bold mx-auto block text-center uppercase'
			>
				Shoriful Islam
			</span>{' '} */}
			{/* <ReactTyped
				className='text-red-500 text text-3xl'
				strings={['Here you can find anything', 'Helloo', 'Shorif']}
				typeSpeed={40}
				backSpeed={50}
				loop
			/>
			<br />
			<ReactTyped
				className='text-2xl text-red-500'
				strings={['I am Developer', 'I am Learner', 'I am Programmer']}
				typeSpeed={40}
				backSpeed={50}
				attr='placeholder'
				loop
			>
				<input type='text' className='text-red-500 bg-black text-center' />
			</ReactTyped>
			<br />
			<ReactTyped
				className='text-2xl text-red-500'
				strings={['I am Developer', 'I am Learner', 'I am Programmer']}
				typeSpeed={40}
				backSpeed={50}
				attr='placeholder'
				loop
			>
				<input type='text' className='text-red-500 bg-black text-center' />
			</ReactTyped> */}
			<div data-aos='fade-up' data-aos-anchor-placement='center-center'>
				<h1 className='text-white'>Hello</h1>
			</div>
		</div>
	)
}

export default App
