import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
	return (
		<section>
			<div className='text-white text-center mb-12'>
				<p>get in touch</p>
				<p className='text-5xl font-bold text-purple-500'>CONTACT</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 text-white w-full md:w-1/2 mx-auto'>
				<div className=''>
					<div className='flex flex-col justify-between h-[400px] border-purple-500 border-r-2 p-8 md py-16'>
						<a
							href='tel:+8801580611958'
							className='flex justify-center md:justify-start   hover:border-2 hover:border-purple-500 p-2'
						>
							<span>
								<FaPhoneAlt className='h-6 w-6 text-white  mx-auto ' />
							</span>
							<span className='ml-4'>+8801580611958</span>
						</a>
						<a
							href='mailto:khanshorif331@gmail.com'
							className='flex justify-center md:justify-start hover:border-2 hover:border-purple-500 p-2'
						>
							<span>
								<FaEnvelope className='h-6 w-6 text-white  mx-auto' />
							</span>
							<span className='ml-4'>khanshorif331@gmail.com</span>
						</a>
						<div className='flex justify-center md:justify-start hover:border-2 hover:border-purple-500 p-2'>
							<span>
								<FaMapMarkerAlt className='h-6 w-6 text-white  mx-auto' />
							</span>
							<span className='ml-4'>Dhaka,Bangladesh</span>
						</div>
					</div>
				</div>
				<div className=''>
					{/* foorm start */}

					<div class='text-white w-full px-6'>
						{/* <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'> */}
						<div class='card-body'>
							<div class='form-control'>
								<label class='label '>
									<span class='label-text text-white'>Your Name</span>
								</label>
								<input
									type='text'
									placeholder='name'
									class='input input-bordered text-black w-fu'
								/>
							</div>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text text-white'>Email</span>
								</label>
								<input
									type='email'
									placeholder='Enter your email'
									class='input input-bordered text-black'
								/>
							</div>
							<div class='form-control'>
								<label class='label'>
									<span class='label-text text-white'>
										Your message
									</span>
								</label>
								<textarea
									type='text'
									placeholder='Your message'
									class='input input-bordered text-black'
								/>
							</div>
							<div class='form-control mt-6'>
								<button class='btn btn-primary'>Send</button>
							</div>
						</div>
						{/* </div> */}
						{/* </div> */}
					</div>

					{/* form end */}
				</div>
			</div>
		</section>
	)
}

export default Contact
