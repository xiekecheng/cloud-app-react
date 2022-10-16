import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { priceProps } from '../utils/type'
const Pricing = () => {
	const pricies: priceProps[] = [
		{
			id: 1,
			type: 'Standard',
			price: 49
		},
		{
			id: 2,
			type: 'Enterprise',
			price: 89
		},
	]
	return (
		<div className='w-full py-20'>
			<div className=' h-[700px] w-full absolute bg-[#101629] mix-blend-overlay'>
			</div>
			<div className='max-w-7xl min-h-[700px] mx-auto px-4'>
				{/* description */}
				<div className='text-center text-gray-300 my-10'>
					<h1 className='text-3xl'>Pricing</h1>
					<h2 className=' text-white text-4xl font-bold'>The right place for your research</h2>
					<p className=' text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis eius laboriosam adipisci nulla dolorum atque porro eos amet excepturi ipsum. Suscipit alias ab beatae nobis provident qui illum hic doloribus!</p>
				</div>
				<div className='grid md:grid-cols-2 relative gap-8'>
					{
						pricies.map(item => (
							<div key={item.id} className='bg-white rounded-xl p-8 shadow-2xl'>
								<label className=' bg-[#9CADF7] text-[#0D237B] px-2 py-1 rounded-xl'>{item.type}</label>
								<h2 className='my-4'><span className='text-5xl font-bold'>${item.price}</span>/mo</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								<div>
									<p className='flex items-center gap-2 py-4'><BsCheckLg color='green' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
									<p className='flex items-center gap-2 py-4'><BsCheckLg color='green' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
									<p className='flex items-center gap-2 py-4'><BsCheckLg color='green' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
									<p className='flex items-center gap-2 py-4'><BsCheckLg color='green' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
									<p className='flex items-center gap-2 py-4'><BsCheckLg color='green' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
									<p className='flex items-center gap-2 py-4'><BsCheckLg color='green' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
									<p className='flex items-center gap-2 py-4'><BsCheckLg color='green' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
									<p className='flex items-center gap-2 py-4'><BsCheckLg color='green' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
									<p className='flex items-center gap-2 py-4'><BsCheckLg color='green' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
									<button className='text-white w-full text-center py-2 text-2xl bg-[#101629]'>Get Started</button>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Pricing