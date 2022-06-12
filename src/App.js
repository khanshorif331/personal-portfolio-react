import React, { useEffect, useCallback, useState } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import logo from './logo.svg'
import './App.css'
import particlesOptions from './particles.json'
import Navbar from './components/Shared/Navbar'
import WarehouseDetail from './pages/ProjectDetail/WarehouseDetail'
import ReactTyped from 'react-typed'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home/Home'
import { Routes, Route, useParams } from 'react-router-dom'
import About from './pages/About/About'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ManufactureDetail from './pages/ProjectDetail/ManufactureDetail'
import DreamDetail from './pages/ProjectDetail/DreamDetail'
import AboutSection from './pages/Home/AboutSection'
import Projects from './pages/Home/Projects/Projects'
import Blogs from './pages/Blogs/Blogs'
import Footer from './components/Shared/Footer'
import Loading from './components/Loading'

function App() {
	// const [loading, setLoading] = useState(false)
	// useEffect(() => {
	// 	setLoading(true)
	// 	setTimeout(() => {
	// 		setLoading(false)
	// 	}, 4000)
	// }, [])
	const particlesInit = useCallback(main => {
		loadFull(main)
	}, [])
	useEffect(() => {
		AOS.init({ duration: 2000 })
		AOS.refresh()
	}, [])

	return (
		<div>
			{/* {loading && <Loading></Loading>} */}
			<Particles options={particlesOptions} init={particlesInit} />
			<Navbar></Navbar>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/home' element={<Home></Home>}></Route>
				<Route path='/about' element={<About></About>}></Route>
				<Route path='/projects' element={<Projects></Projects>}></Route>
				<Route path='/blogs' element={<Blogs></Blogs>}></Route>
				<Route
					path='/manufactureDetail'
					element={<ManufactureDetail></ManufactureDetail>}
				></Route>
				<Route
					path='/warehouseDetail'
					element={<WarehouseDetail></WarehouseDetail>}
				></Route>
				<Route
					path='/dreamDetail'
					element={<DreamDetail></DreamDetail>}
				></Route>
			</Routes>
			<Footer></Footer>
			<ToastContainer></ToastContainer>
		</div>
	)
}

export default App
