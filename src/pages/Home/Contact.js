import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
	return (
		<section>
			<div className='text-white text-center mb-12'>
				<p>get in touch</p>
				<p className='text-5xl font-bold text-purple-500'>CONTACT</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 text-white w-1/2 mx-auto'>
				<div className='border-red-500 border-r-2'>
					<div>
						<p>
							<span>
								<FaPhoneAlt className='h-6 w-6 text-white  mx-auto' />
							</span>
							<span className='ml-4'>+8801580611958</span>
						</p>
					</div>
				</div>
				<div>
					<p>nunner</p>
				</div>
			</div>
		</section>
	)
}

export default Contact
