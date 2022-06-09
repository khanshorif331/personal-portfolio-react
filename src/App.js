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

			{/* <ReactTyped
				className='text-red-500 text text-3xl'
				strings={['Here you can find anything', 'Helloo', 'Shorif']}
				typeSpeed={40}
				backSpeed={50}
				loop
			/> */}

			{/* <div data-aos='fade-up' data-aos-anchor-placement='center-center'>
				<h1 className='text-white'>Hello</h1>
			</div> */}
		</div>
	)
}

export default App
