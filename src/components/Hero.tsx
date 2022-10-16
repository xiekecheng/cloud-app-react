import React from 'react'
import cyberBg from '../assets/cyber-bg.png'
const Hero = () => {
	return (
		<div className='w-full h-screen flex justify-center items-center flex-col  px-4 py-20  bg-gray-200'>
			<div className='grid md:grid-cols-2 md:px-8 max-w-7xl grow pt-20'>
				<div className='flex flex-col justify-center'>
					<p className='text-xl py-4'>Unique Sequencing & Production</p>
					<h1 className='text-5xl'>Cloud Management</h1>
					<p className='text-2xl py-4'>This is our Tech brand.</p>
					<button className='w-full md:max-w-[60%] py-3'>Get Started</button>
				</div>
				<div className='flex items-center'>
					<img src={cyberBg} alt="" />
				</div>
			</div>
			<div className='p-4 bg-gray-200 shadow-xl shadow-gray-300 rounded-xl'>
				<h1 className='text-center text-2xl'>Data Service</h1>
				<ul className='grid grid-cols-2 md:grid-cols-4 text-sm md:text-xl'>
					<li>App Security</li>
					<li>DashBoard Design</li>
					<li>Cloud Data</li>
					<li>API</li>
				</ul>
			</div>
		</div>
	)
}

export default Hero