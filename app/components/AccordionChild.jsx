import * as Icon from 'react-feather';
export default function AccordionChild(props) { 
	return ( 
		<div className="rounded-md"> 
			<button 
				className="w-full text-left bg-[#951A2E] transition duration-300 flex"
				onClick={props.toggleAccordion} 
			> 
                <Icon.FileText />
				{props.title} 
			</button> 
			{props.isOpen && ( 
				<div className="bg-[#951A2E]"> 
				</div> 
			)} 
		</div> 
	); 
}; 
