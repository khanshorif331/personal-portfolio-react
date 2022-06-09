import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
	const navigation = (
		<>
			<li>
				{/* <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }} /> */}
				<motion.a
					whileHover={{ scale: 1.3 }}
					whileTap={{ scale: 1 }}
					transition={{ duration: 0.1 }}
					className='hover:text-purple-400'
				>
					HOME
				</motion.a>
			</li>
			<li>
				<motion.a
					whileHover={{ scale: 1.3 }}
					whileTap={{ scale: 1 }}
					transition={{ duration: 0.1 }}
					className='hover:text-purple-400'
				>
					ABOUT ME
				</motion.a>
			</li>
			<li>
				<motion.a
					whileHover={{ scale: 1.3 }}
					whileTap={{ scale: 1 }}
					transition={{ duration: 0.1 }}
					className='hover:text-purple-400'
				>
					PORTFOLIO
				</motion.a>
			</li>
			<li>
				<motion.a
					whileHover={{ scale: 1.3 }}
					whileTap={{ scale: 1 }}
					transition={{ duration: 0.1 }}
					className='hover:text-purple-400'
				>
					CONTACT
				</motion.a>
			</li>
			<li className='bg-purple-600 px-8 py-0 rounded-3xl hover:border-2 border-purple-600 hover:bg-black hover:text-purple-500'>
				<button>RESUME</button>
			</li>
		</>
	)
	return (
		<div className='w-full'>
			<div class='navbar bg-black flex justify-between md:px-14 md:py-6'>
				<div class='navbar-start'>
					<div class='dropdown'>
						<label tabindex='0' class='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='h-5 w-5 text-white'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabindex='0'
							class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							{navigation}
						</ul>
					</div>
					<motion.a
						animate={{
							scale: [1, 2, 2, 1, 1],
							rotate: [0, 0, 270, 270, 0],
							borderRadius: ['20%', '20%', '50%', '50%', '20%'],
						}}
						// animate={{ scale: 1.2 }}
						// transition={{ duration: 1.5 }}
						class='btn btn-ghost uppercase text-3xl text-white overflow-hidden'
					>
						<span className='text-purple-500'>SHORIF </span>{' '}
						<span className='hidden md:block'>Islam</span>
					</motion.a>
				</div>
				<div class='navbar-center hidden lg:flex'>
					<ul class='menu menu-horizontal p-0 text-white'>{navigation}</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
