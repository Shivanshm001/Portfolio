import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

import { Outlet } from 'react-router-dom';
export default function Layout() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-4'>
            <div className='col-span-1 relative bg-pink-500'>
                <div className='absolute inset-0 top-0'>
                    <Sidebar />
                </div>
            </div>
            <div className='col-span-3'>
                <Outlet />
            </div>
        </div>
    )
}
