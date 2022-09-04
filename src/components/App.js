import React from "react"
import { Routes, Route } from "react-router-dom"
import {Header, Home, CssTest} from './'

const App = () =>{


    return (
        
        <>
        <Routes>
            <Route exact path="/" element={<Header/>} >
                <Route index element={<Home/>}/>

                <Route path="/test" element={<CssTest/>}/>







            </Route>



        </Routes>
        </>
    )
}






export default App