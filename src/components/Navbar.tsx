import React, { useState } from 'react'
import { BsList, BsXLg } from "react-icons/bs";
const Navbar = () => {
	const [nav, setNav] = useState(false)
	return (
		<div className='w-screen h-[80px] fixed bg-gray-200 shadow-xl shadow-gray-300'>
			<div className='flex justify-between items-center h-full mx-auto p-4'>
				<div className='flex items-center gap-4'>
					<h1 className='text-3xl sm:text-4xl font-bold'>Brand.</h1>
					<ul className='gap-4 text-xl hidden sm:flex'>
						<li className='border-b'>Home</li>
						<li className='border-b'>About</li>
						<li className='border-b'>Support</li>
						<li className='border-b'>Platform</li>
						<li className='border-b'>Pricing</li>
					</ul>
				</div>

				{/* 按钮组 */}
				<div className='hidden sm:flex gap-4'>
					<button className='px-4 py-2'>Sign In</button>
					<button className='px-4 py-2'>Sign Up</button>
				</div>
				<div className='block sm:hidden cursor-pointer' onClick={() => setNav(!nav)}>
					{
						nav
							? <BsXLg />
							: <BsList />
					}
				</div>
			</div>

			{nav && (
				<div className='bg-gray-200 p-4  shadow-xl shadow-gray-300'>
					<ul className='gap-4 text-xl flex flex-col'>
						<li className='border-b border-gray-500'>Home</li>
						<li className='border-b border-gray-500'>About</li>
						<li className='border-b border-gray-500'>Support</li>
						<li className='border-b border-gray-500'>Platform</li>
						<li className='border-b border-gray-500'>Pricing</li>
						<button className='bg-transparent'>Sign In</button>
						<button>Sign Up</button>
					</ul>
				</div>
			)}
		</div>
	)
}

export default Navbar

