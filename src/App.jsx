import React from 'react'
import { Route, Routes } from 'react-router-dom'


//Components
import Layout from './components/Layout/Layout'
import MainView from './components/MainView/MainView';


//--Pages
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
//End Components


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainView />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
