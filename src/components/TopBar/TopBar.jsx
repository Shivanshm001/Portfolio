import React from 'react'
import TopBarTab from './TopBarTab/TopBarTab';
import { JSIcon } from '../ReactIcons/ReactIcons';
import { useSelector } from 'react-redux';

export default function TopBar() {

  return (
    <div className=' bg-stone-900 flex gap-1 min-h-[30px] font-poppins p-1'>
      <TopBarTab desitination={"/"} title={"Home"} icon={<JSIcon />} />
      <TopBarTab desitination={"/about"} title={"About"} icon={<JSIcon />} />
      <TopBarTab desitination={"/resume"} title={"Resume"} icon={<JSIcon />} />
      <TopBarTab desitination={"/contact"} title={"Contact"} icon={<JSIcon />} />
      <TopBarTab desitination={"."} title={"Placeholder"}/>
    </div>
  )
}
