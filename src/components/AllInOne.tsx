import React from 'react'
import { BsCheckLg } from 'react-icons/bs'

const AllInOne = () => {
	const arr = [
		1, 2, 3, 4, 5, 6, 7, 8
	]
	return (
		<div className='w-full py-40 px-4'>
			<div className='max-w-7xl mx-auto flex flex-col justify-center items-center'>
				<h1 className='text-2xl md:text-4xl font-bold'>All-In-One-Platform</h1>
				<p className='max-w-[80%] text-gray-400 my-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, soluta illo. Quis, assumenda exercitationematque.</p>
				<div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8'>
					{
						arr.map(item => (
							<div key={item}>
								<h1 className='flex items-center gap-4'><BsCheckLg color='green' />Notification</h1>
								<p className='pl-8 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem laboriosam quod facere eveniet sunt.</p>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default AllInOne