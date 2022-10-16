import React from 'react'

const Footer = () => {
	return (
		<div className='w-full px-4 py-20 bg-[#101629] text-gray-300'>
			<div className='max-w-7xl mx-auto'>
				{/* top */}
				<div>
					<div className='grid md:grid-cols-3 gap-8'>
						<div className='md:col-span-2 grid grid-cols-4'>
							<div>
								<h1>Solution</h1>
								<ul>
									<li>Marketing</li>
									<li>Marketing</li>
									<li>Marketing</li>
									<li>Marketing</li>
								</ul>
							</div>
							<div>
								<h1>Solution</h1>
								<ul>
									<li>Marketing</li>
									<li>Marketing</li>
									<li>Marketing</li>
									<li>Marketing</li>
								</ul>
							</div>
							<div>
								<h1>Solution</h1>
								<ul>
									<li>Marketing</li>
									<li>Marketing</li>
									<li>Marketing</li>
									<li>Marketing</li>
								</ul>
							</div>
							<div>
								<h1>Solution</h1>
								<ul>
									<li>Marketing</li>
									<li>Marketing</li>
									<li>Marketing</li>
									<li>Marketing</li>
								</ul>
							</div>
						</div>

						{/* subcribe */}
						<div>
							<h1>Subscribe to our newsletter</h1>
							<p className='my-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
							<div className='flex gap-4'>
								<input className='p-2 rounded-xl grow focus:outline-none text-gray-600' type="email" placeholder='Plese Enter Your Email' />
								<button className='p-2'>Subscribe</button>
							</div>

						</div>

					</div>

				</div>
				{/* copyright */}
				<div>

				</div>

			</div>
		</div>
	)
}

export default Footer