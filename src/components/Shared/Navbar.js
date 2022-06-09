import React from 'react'

const Navbar = () => {
	const navigation = (
		<>
			<li>
				<a className='hover:text-purple-400'>HOME</a>
			</li>
			<li>
				<a className='hover:text-purple-400'>ABOUT ME</a>
			</li>
			<li>
				<a className='hover:text-purple-400'>PORTFOLIO</a>
			</li>
			<li>
				<a className='hover:text-purple-400'>ABOUT</a>
			</li>
			<li className='bg-purple-600 px-8 py-0 rounded-3xl'>
				<button>RESUME</button>
			</li>
		</>
	)
	return (
		<div>
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
					<a class='btn btn-ghost uppercase text-3xl text-white'>
						<span className='text-purple-500'>SHORIF </span> Islam
					</a>
				</div>
				<div class='navbar-center hidden lg:flex'>
					<ul class='menu menu-horizontal p-0 text-white'>{navigation}</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
