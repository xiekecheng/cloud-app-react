import React from 'react'
import cyberBg from '../assets/cyber-bg.png'
const Hero = () => {
	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<div className='grid md:grid-cols-2 px-4 md:px-8 max-w-7xl'>
				<div className='flex flex-col justify-center'>
					<p className='text-xl py-4'>Unique Sequencing & Production</p>
					<h1 className='text-5xl'>Cloud Management</h1>
					<p className='text-2xl py-4'>This is our Tech brand.</p>
					<button className='max-w-[60%] py-3'>Get Started</button>
				</div>
				<div>
					<img src={cyberBg} alt="" />
				</div>
			</div>
		</div>
	)
}

export default Hero