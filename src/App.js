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
import Home from './pages/Home/Home'
import { Routes, Route, useParams } from 'react-router-dom'
import About from './pages/About/About'

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
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/home' element={<Home></Home>}></Route>
				<Route path='/about' element={<About></About>}></Route>
			</Routes>
		</div>
	)
}

export default App
