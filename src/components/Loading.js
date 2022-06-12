import React from 'react'
import loadingImg from '../assets/images/loading.gif'

const Loading = () => {
	return (
		<div className='flex w-full h-screen bg-black justify-center items-center'>
			<img src={loadingImg} alt='' />
		</div>
	)
}

export default Loading
