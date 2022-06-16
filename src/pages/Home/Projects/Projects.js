import React from 'react'
// import img from '../../../assets/images/1 (1).png'
import Button from '../../../components/Button'
import { Link } from 'react-router-dom'
import manufactureImg from '../../../assets/images/final/ass-12/12.1.png'
import bikeImg from '../../../assets/images/final/ass-11/11.1.png'
import dreamImg from '../../../assets/images/final/ass-10/10.1.png'
import { motion } from 'framer-motion'

const Projects = () => {
	return (
		<section className='mt-8'>
			<div className='text-white'>
				<p className='text-center'>some of my recent works</p>
				<p className='text-purple-500 text-5xl text-center font-bold'>
					PROJECTS
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
				{/* 1st card */}
				<div
					data-aos='flip-left'
					className='bg-white card md:w-4/5 mx-6 md:mx-16 text-white shadow-xl rounded-md p-1 hover:bg-purple-500 border-purple-500'
				>
					<figure>
						<img src={manufactureImg} alt='manufacture web' />
					</figure>
					<div className=' bg-black card-body p-2'>
						<div className='flex justify-between'>
							<a
								href='https://manufacturer-website-6ea45.web.app/'
								target='_blank'
								className='border-b-2 border-purple-500 hover:text-purple-500'
							>
								Live Site
							</a>
							<a
								href='https://github.com/khanshorif331/manufacturer-website-client-public'
								target='_blank'
								className='border-b-2 border-purple-500 hover:text-purple-500'
							>
								Github
							</a>
						</div>
						<h2 className='card-title'>
							<span className='text-purple-500'>
								Manufacturer Website
							</span>{' '}
							{/* (Full stack){' '} */}
						</h2>
						<p>Technology: HTML,CSS,Javascript,React,Node,Mongodb.</p>
						<p>
							It's a full stack project.Totally secured and it has role
							based user and admin system.
						</p>

						<Link to='/manufactureDetail'>
							<button className='w-full mx-auto block bg-purple-500 text-white  hover:bg-black hover:text-white hover:border-2 border-purple-500 rounded-md py-2'>
								See Details
							</button>
						</Link>
					</div>
				</div>
				{/* 2nd card */}
				<div
					data-aos='flip-left'
					className='bg-white card md:w-4/5 mx-6 md:mx-16 text-white shadow-xl rounded-md p-1 hover:bg-purple-500 border-purple-500'
				>
					<figure>
						<img src={bikeImg} alt='manufacture web' />
					</figure>
					<div className=' bg-black card-body p-2'>
						<div className='flex justify-between'>
							<a
								href='https://warehouse-management-3798b.web.app/'
								target='_blank'
								className='border-b-2 border-purple-500 hover:text-purple-500'
							>
								Live Site
							</a>
							<a
								href='https://github.com/khanshorif331/warehouse-management-client-public'
								target='_blank'
								className='border-b-2 border-purple-500 hover:text-purple-500'
							>
								Github
							</a>
						</div>
						<h2 className='card-title'>
							<span className='text-purple-500'>
								Bike Warehouse Management
							</span>{' '}
							{/* (Full stack){' '} */}
						</h2>
						<p>Technology: HTML,CSS,Javascript,React,Node,Mongodb.</p>
						<p>
							It's a full stack project.Totally secured and it has role
							based user and admin system.
						</p>

						<Link to='/warehouseDetail'>
							<button className='w-full mx-auto block bg-purple-500 text-white  hover:bg-black hover:text-white hover:border-2 border-purple-500 rounded-md  py-2'>
								See Details
							</button>
						</Link>
					</div>
				</div>
				{/* 3rd card */}
				<div
					data-aos='flip-right'
					className='bg-white card md:w-4/5 p-1 mx-6 md:mx-16 text-white shadow-xl rounded-md  hover:bg-purple-500 border-purple-500'
				>
					<figure>
						<img src={dreamImg} alt='manufacture web' />
					</figure>
					<div className=' bg-black card-body p-2'>
						<div className='flex justify-between'>
							<a
								href='https://dream-event-photography.web.app/'
								target='_blank'
								className='border-b-2 border-purple-500 hover:text-purple-500'
							>
								Live Site
							</a>
							<a
								href='https://github.com/khanshorif331/dream-event-photography-client'
								target='_blank'
								className='border-b-2 border-purple-500 hover:text-purple-500'
							>
								Github
							</a>
						</div>
						<h2 className='card-title'>
							<span className='text-purple-500'>
								Dream Event Photography
							</span>{' '}
						</h2>
						<p>Technology: HTML,CSS,Javascript,React,Node,Mongodb.</p>
						<p>
							It's only frontend project.Totally secured and it has role
							based user and admin system.
						</p>
						<Link to='/dreamDetail'>
							<button className='w-full mx-auto block bg-purple-500 text-white  hover:bg-black hover:text-white hover:border-2 border-purple-500 rounded-md py-2'>
								See Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
