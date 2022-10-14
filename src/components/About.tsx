import React from 'react'

const About = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center p-4'>
			<div className='max-w-7xl'>
				<h1 className='text-3xl md:text-5xl font-bold text-center'>Trusted by developers across the world</h1>
				<p className='text-center text-2xl text-gray-500 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laboriosam beatae repellat deleniti, delectus cupiditate repudiandae hic praesentium natus sapiente nesciunt molestiae repellendus, assumenda quibusdam iure. Expedita magnam eos ab.</p>
				<div className='grid md:grid-cols-3 w-full gap-8'>
					<div className='p-4 text-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
						<h1 className='text-5xl font-bold text-indigo-600'>100%</h1>
						<p className='text-gray-500'>24/7</p>
					</div>
					<div className='p-4 text-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
						<h1 className='text-5xl font-bold text-indigo-600'>24/7</h1>
						<p className='text-gray-500'>Delivery</p>
					</div>
					<div className='p-4 text-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
						<h1 className='text-5xl font-bold text-indigo-600'>100K</h1>
						<p className='text-gray-500'>Transaction</p>
					</div>

				</div>
			</div>
		</div>
	)
}

export default About