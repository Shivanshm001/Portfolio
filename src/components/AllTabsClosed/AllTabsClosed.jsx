import React from 'react'
import DarkButton from '../DarkButton/DarkButton';

import { useDispatch, useSelector } from 'react-redux';
import { setStateToInitial } from '../../redux/topbar/topbarActions';

export default function AllTabsClosed() {
    const dispatch = useDispatch();


    return (
        <section className='text-neutral-100 min-h-screen  w-full grid place-items-center'>
            <div className='font-roboto  max-w-[80%]'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl'>Closed all the tabs?</h1>
                    <DarkButton title={"Reopen"} handleClick={() => dispatch(setStateToInitial())} disabled={false} />
                </div>
            </div>
        </section>
    )
}
