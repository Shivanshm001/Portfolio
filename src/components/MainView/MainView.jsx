import React from 'react'
import TopBar from '../TopBar/TopBar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AllTabsClosed from '../AllTabsClosed/AllTabsClosed';

export default function MainView() {
    const topbar = useSelector(state => state.topbar);

    return (
        <main className='min-h-screen bg-zinc-800'>
            <div className='sticky top-0 hidden sm:block'>
                <TopBar />
            </div>
            <div>
                {
                    topbar.openedTabs.length > 0 ?
                    <Outlet /> :
                    <AllTabsClosed />
                }
            </div>
        </main>
    )
}
