import React from 'react'
import blogImg from '../../assets/images/comingSoon.jpg'

const Blogs = () => {
	return (
		<div className='text-white'>
			<h1 className='text-center'>This is my blog page</h1>
			<div className='w-full min-h-[80vh] flex justify-center items-center'>
				<img src={blogImg} alt='' />
			</div>
		</div>
	)
}

export default Blogs
