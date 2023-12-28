'use client'

import { useState, useEffect } from 'react'
import * as Icon from 'react-feather'


export default function AccordionChild({
	children,
	title,
	id,
	active = false
}) {

	const [accordionOpen, setAccordionOpen] = useState(false)

	useEffect(() => {
		setAccordionOpen(active)
	}, [])

	return (
		<div className="py-2">
		<h2>
			<button
			className="flex items-center justify-between w-full text-left font-semibold py-2"
			onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
			aria-expanded={accordionOpen}
			aria-controls={`accordion-text-${id}`}
			>
				<div className='flex items-center pl-10'>
                    <div className="grow-0 pr-4">
                        <Icon.Circle />
                    </div>
                    <span>{title}</span>
                </div>
			</button>
		</h2>
		<div
			id={`accordion-text-${id}`}
			role="region"
			aria-labelledby={`accordion-title-${id}`}
			className={`grid text-sm text-white overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
		>
			<div className="overflow-hidden">
			<p className="pb-3">
				{children}
			</p>
			</div>
		</div>
		</div>
	)
}