import React from 'react'
import { BsArrowRightShort, BsFillTelephoneFill } from 'react-icons/bs'
import supportIcon from '../assets/support.jpg'
const Support = () => {
	const cards = [
		{
			id: 1,
			title: 'Sales'
		},
		{
			id: 2,
			title: 'Technical Support'
		},
		{
			id: 3,
			title: 'Media Inquiries'
		},
	]
	return (
		<div className='w-full  bg-[#313B51]/70 px-4'>
			<div className='absolute bg-[#313B51]/70 mix-blend-overlay w-full h-[700px]'>
				<img className='mix-blend-overlay object-cover w-full h-full' src={supportIcon} alt="" />
			</div>
			{/* description */}
			<div className='max-w-7xl mx-auto  px-4 relative min-h-[700px]'>
				<div className='w-full h-full flex flex-col justify-center gap-6 items-center py-20'>
					<h1 className='uppercase text-center text-2xl text-white'>Support</h1>
					<p className='text-center text-3xl text-white font-bold'>Finding The Right Team</p>
					<p className='text-2xl text-white md:max-w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae corporis nobis ducimus cupiditate explicabo libero similique, iusto minima, ipsa sequi dolore beatae nihil quisquam. Suscipit esse consequatur enim explicabo magni!</p>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					{
						cards.map(item => (
							<div key={item.id} className=' bg-white rounded-xl shadow'>
								<div className='px-8 py-10'>
									<BsFillTelephoneFill size={25} className='mt-[-4rem] text-indigo-600 bg-white rounded-xl ' />
									<h1 className='my-8 font-bold text-xl'>{item.title}</h1>
									<p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ut tempora deleniti? Nemo quaerat et eaque. Explicabo tempora laborum molestias at? Autem totam omnis perferendis ipsum, perspiciatis deleniti inventore quia!</p>
								</div>
								<h2 className='text-indigo-600 bg-gray-200 px-8 py-4 cursor-pointer flex items-center'>Contact Us <BsArrowRightShort size={25} /></h2>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Support