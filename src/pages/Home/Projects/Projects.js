import React from 'react'
// import img from '../../../assets/images/1 (1).png'
import Button from '../../../components/Button'
import { Link } from 'react-router-dom'
import manufactureImg from '../../../assets/images/final/ass-12/12.1.png'
import bikeImg from '../../../assets/images/final/ass-11/11.1.png'
import dreamImg from '../../../assets/images/final/ass-10/10.1.png'

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
				<div class='card mx-6 md:mx-16 text-white shadow-xl rounded-none'>
					<figure>
						<img src={manufactureImg} alt='manufacture web' />
					</figure>
					<div class=' bg-black card-body p-0'>
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
						<h2 class='card-title'>
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
						{/* <Link to='/about' className='mx-auto w-full'>
							<Button>See Details</Button>
						</Link> */}
						<Link to='/about'>
							<button className='w-full mx-auto block bg-white text-black py-2'>
								See Details
							</button>
						</Link>
					</div>
				</div>
				{/* 2nd card */}
				<div class='card mx-6 md:mx-16 text-white shadow-xl rounded-none'>
					<figure>
						<img src={bikeImg} alt='manufacture web' />
					</figure>
					<div class=' bg-black card-body p-0'>
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
						<h2 class='card-title'>
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
						{/* <Link to='/about' className='mx-auto w-full'>
							<Button>See Details</Button>
						</Link> */}
						<Link to='/about'>
							<button className='w-full mx-auto block bg-white text-black py-2'>
								See Details
							</button>
						</Link>
					</div>
				</div>
				{/* 3rd card */}
				<div class='card mx-6 md:mx-16 text-white shadow-xl rounded-none'>
					<figure>
						<img src={dreamImg} alt='manufacture web' />
					</figure>
					<div class=' bg-black card-body p-0'>
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
						<h2 class='card-title'>
							<span className='text-purple-500'>
								Dream Event Photography
							</span>{' '}
							{/* (Full stack){' '} */}
						</h2>
						<p>Technology: HTML,CSS,Javascript,React,Node,Mongodb.</p>
						<p>
							It's a full stack project.Totally secured and it has role
							based user and admin system.
						</p>
						{/* <Link to='/about' className='mx-auto w-full'>
							<Button>See Details</Button>
						</Link> */}
						<Link to='/about'>
							<button className='w-full mx-auto block bg-white text-black py-2'>
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