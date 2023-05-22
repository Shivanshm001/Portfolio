import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab, removeTab, addTab } from '../../../redux/topbar/topbarActions';
import { CloseIcon } from '../../ReactIcons/ReactIcons';

export default function TopBarTab({ desitination, title, icon }) {
    const topbar = useSelector(state => state.topbar);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClosing(e, tab) {
        e.preventDefault();
        e.stopPropagation();
        dispatch(removeTab(tab));
        
        const currentTabIndex = topbar.openedTabs.indexOf(tab);
        const nextTabIndex = currentTabIndex === topbar.openedTabs.length - 1 ? currentTabIndex - 1 : currentTabIndex + 1;
        const nextTab = topbar.openedTabs[nextTabIndex];
        
        dispatch(setActiveTab(nextTab));
        navigate(nextTab);
      }

    return (
        <Link to={desitination} onClick={() => dispatch(setActiveTab(desitination))} className={`border border-stone-700 flex justify-center items-center ${topbar.openedTabs.includes(desitination) ? "block" : "hidden"}`}>
            <div className={`flex justify-center items-center gap-2 px-4 py-2 hover:bg-stone-800 ${topbar.activeTab === desitination ? "bg-stone-700" : "bg-stone-900"}`}>
                <span>{icon}</span>
                <span className={`text-neutral-300 text-xs ${topbar.activeTab === desitination ? "font-semibold text-sm" : "font-base"}`}>{title}</span>
                <button className='p-1 hover:bg-stone-600 rounded-sm font-bold' onClick={(e) => handleClosing(e, desitination)}>{<CloseIcon />}</button>
            </div>
        </Link>
    )
}
