import * as Icon from 'react-feather';
import { useState } from 'react';
import AccordionChild from './AccordionChild';

export default function Accordion(props) { 
    const [risets, setRisets] = useState([
        {
            key: 1,
            title: 'Daftar',
            isOpen: false
        },
        {
            key: 2,
            title: 'Progres',
            isOpen: false
        }
    ]);

    const toggleAccordion = (accordionkey) => { 
        const updatedAccordions = risets.map((accord) => { 
            if (accord.key === accordionkey) { 
                return { ...accord, isOpen: !accord.isOpen }; 
            } else { 
                return { ...accord, isOpen: false }; 
            } 
        }); 
        setRisets(updatedAccordions); 
    };
	return ( 
		<div className="flex flex-col items-center py-4 pl-6 nav-item"> 
			<button 
				className="w-full text-left bg-[#951A2E] transition duration-300 flex"
				onClick={props.toggleAccordion} 
			>
                <div className="grow-0 pr-4">
                    <Icon.FileText />
                </div>
				{props.title} 
				{/* <span className={`float-right transform ${props.isOpen ? 
								'rotate-180' : 'rotate-0'} 
								transition-transform duration-300`}> 
					&#9660; 
				</span>  */}
			</button> 
			{props.isOpen && ( 
				<div className="bg-[#951A2E]"> 
					{risets.map((riset) => (
                            <AccordionChild
                                key={riset.key}
                                title={riset.title}
                                isOpen={riset.isOpen}
                                toggleAccordion={()=>toggleAccordion(riset.key)}
                            />
                        ))}
				</div> 
			)} 
		</div> 
	); 
}; 
