import React from 'react'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import CustomLink from '../CustomLink'

const Navbar = () => {
	const navigation = (
		<>
			<li>
				{/* <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }} /> */}
				<CustomLink to='/home'>
					<motion.div
						whileHover={{ scale: 1.3 }}
						whileTap={{ scale: 1 }}
						transition={{ duration: 0.1 }}
						className='hover:text-purple-400'
						to='/home'
					>
						HOME
					</motion.div>
				</CustomLink>
			</li>
			<li>
				<CustomLink to='/about'>
					<motion.div
						whileHover={{ scale: 1.3 }}
						whileTap={{ scale: 1 }}
						transition={{ duration: 0.1 }}
						className='hover:text-purple-400'
					>
						ABOUT ME
					</motion.div>
				</CustomLink>
			</li>
			<li>
				<CustomLink to='/projects'>
					<motion.div
						whileHover={{ scale: 1.3 }}
						whileTap={{ scale: 1 }}
						transition={{ duration: 0.1 }}
						className='hover:text-purple-400'
					>
						PROJECTS
					</motion.div>
				</CustomLink>
			</li>
			<li>
				<CustomLink to='/blogs'>
					<motion.div
						whileHover={{ scale: 1.3 }}
						whileTap={{ scale: 1 }}
						transition={{ duration: 0.1 }}
						className='hover:text-purple-400'
					>
						BLOGS
					</motion.div>
				</CustomLink>
			</li>
			<li className='bg-purple-600 px-8 py-0 rounded-3xl hover:border-2 border-purple-600 hover:bg-black hover:text-purple-500'>
				<a
					href='https://drive.google.com/uc?export=download&id=14WmYp-zdwhhB_Uv9W7i6M6V2V46GVXpO
'
				>
					<button>RESUME</button>
				</a>
			</li>
		</>
	)
	return (
		<div className='w-full'>
			<div className='navbar bg-black flex justify-between md:px-14 md:py-6 fixed z-20'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex='0' className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5 text-white'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						{/* for mobile */}
						<ul
							tabIndex='0'
							className='navbar-end menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							{navigation}
						</ul>
					</div>
					<motion.a
						whileHover={{ scale: 1.3 }}
						whileTap={{ scale: 1 }}
						transition={{ duration: 0.1 }}
						className='btn btn-ghost uppercase text-3xl text-white overflow-hidden'
					>
						<span className='text-purple-500'>SHORIF </span>{' '}
						<span className=''>Islam</span>
					</motion.a>
				</div>
				<div className='navbar-center hidden lg:flex'>
					{/* for largee device */}
					<ul className='menu menu-horizontal p-0 text-white'>
						{navigation}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
