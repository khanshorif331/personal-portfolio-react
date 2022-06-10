import React from 'react'

const Button = ({ children }) => {
	return (
		<button className='bg-purple-600 px-10 py-3 rounded-3xl hover:border-2 border-purple-600 hover:bg-black hover:text-purple-500 text-white'>
			{children}
		</button>
	)
}

export default Button
