import React from "react"
import { Routes, Route } from "react-router-dom"
import {Header, Home, CssTest, CssTestTwo} from './'
import '../style.scss'

const App = () =>{


    return (
        
        <>
        <Routes>
            <Route exact path="/" element={<Header/>} >
                <Route index element={<Home/>}/>

                <Route path="/bootstraptest" element={<CssTest/>}/>
                <Route path="/materialuitest" element={<CssTestTwo/>}/>








            </Route>



        </Routes>
        </>
    )
}






export default App