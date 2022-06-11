// import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

// https://drive.google.com/file/d/14WmYp-zdwhhB_Uv9W7i6M6V2V46GVXpO/view?usp=sharing

const Contact = () => {
	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_4ais7pb',
				'template_2xjotba',
				form.current,
				'SB9cdfbYJph-v6RQH'
			)
			.then(
				result => {
					if (result.text === 'OK') {
						toast(
							`Thank You ${e.target.user_name.value} ! Your message has been deliverd.`
						)
						e.target.reset()
					}
					// console.log(result.text)
				},
				error => {
					console.log(error.text)
				}
			)
	}
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

					<div className='text-white w-full px-6'>
						<form ref={form} onSubmit={sendEmail} className='card-body'>
							<div className='form-control'>
								<label className='label '>
									<span className='label-text text-white'>
										Your Name
									</span>
								</label>
								<input
									type='text'
									name='user_name'
									placeholder='name'
									className='input input-bordered text-black w-fu'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text text-white'>Email</span>
								</label>
								<input
									type='email'
									name='user_email'
									placeholder='Enter your email'
									className='input input-bordered text-black'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text text-white'>
										Your message
									</span>
								</label>
								<textarea
									type='text'
									name='message'
									placeholder='Your message'
									className='input input-bordered text-black'
									required
								/>
							</div>
							<div className='form-control mt-6'>
								<input
									type='submit'
									value='Send'
									className='btn bg-purple-500 hover:bg-black hover:text-purple-500 hover:border-purple-500 hover:border-2'
								></input>
							</div>
						</form>
					</div>
					{/* <ToastContainer></ToastContainer> */}

					{/* form end */}
				</div>
			</div>
		</section>
	)
}

export default Contact
