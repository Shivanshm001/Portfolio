import React,{useEffect} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'


//Components
import Layout from './components/Layout/Layout'
import MainView from './components/MainView/MainView';


//--Pages
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
//End Components



export default function App() {
  const location = useLocation();
  const { pathname } = location;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainView />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
