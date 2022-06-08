import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import logo from './logo.svg'
import './App.css'
import particlesOptions from './particles.json'
import Navbar from './components/Shared/Navbar'
import ReactTyped from 'react-typed'

function App() {
	const particlesInit = useCallback(main => {
		loadFull(main)
	}, [])

	return (
		<div className='App'>
			<Particles options={particlesOptions} init={particlesInit} />
			<Navbar></Navbar>
			<ReactTyped
				className='text-red-500'
				strings={['Here you can find anything']}
				typeSpeed={40}
			/>
			<br />

			{/* <div className='text-white bg-red-400'> */}
			<ReactTyped
				className='text-2xl text-red-500'
				strings={['I am Developer', 'I am Learner', 'I am Programmer']}
				typeSpeed={40}
				backSpeed={50}
				attr='placeholder'
				loop
			>
				{/* <p className='text-white'> hello</p> */}
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
				{/* <p className='text-white'> hello</p> */}
				<input type='text' className='text-red-500 bg-black text-center' />
			</ReactTyped>
			{/* </div> */}
		</div>
	)
}

export default App
