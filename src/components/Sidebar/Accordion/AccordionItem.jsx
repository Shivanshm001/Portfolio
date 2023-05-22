import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addTab, setActiveTab } from '../../../redux/topbar/topbarActions';

const Item = ({ text, icon }) => {
    return (
        <p className='flex justify-start items-center gap-1 px-2 py-1 border border-stone-700 hover:bg-stone-700 bg-stone-800 my-1 w-full'>
            <span>
                {icon}
            </span>
            <span className='text-neutral-300 text-sm'>
                {text}
            </span>
        </p>
    )
};


export default function AccordionItem({ destination, text, icon, distType }) {
    const topbar = useSelector(state => state.topbar);
    const dispatch = useDispatch();
    const navigate = useNavigate();




    function handleClick(e, dist) {
        e.preventDefault()
        dispatch(setActiveTab(dist));
        if (!topbar.openedTabs.includes(dist)) {
            dispatch(addTab(dist));
        }
        navigate(dist)
    };



    return (
        distType === "internal"
        ? <Link to={destination} onClick={(e) => handleClick(e, destination)}>
            <Item text={text} icon={icon}/>
        </Link>
        : <a href={destination} target='_blank' referrerPolicy='no-referrer' >
            <Item text={text} icon={icon} />
        </a>
    )
}
