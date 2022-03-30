import React from 'react'
import Home from './home'
import Cusine from './Cusine'
import Searched from './Searched'
import { Route,Routes,BrowserRouter} from 'react-router-dom'
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion'

function Pages() {
  
  return (
    <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/cusine/:type" element={<Cusine />}/> 
        <Route path="/Searched/:search" element={<Searched />}/>
        <Route path="/Recipe/:name" element={<Recipe />}/>
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default Pages