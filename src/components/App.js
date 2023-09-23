import React from "react"
import { Routes, Route } from "react-router-dom"
import {Header, Home, CssTest, CssTestTwo, WrongPage, Resume, ResumeHeader} from './'
import '../style.scss'

const App = () =>{


    return (
        
        <>
        <Routes>
            <Route exact path="/" element={<Header/>} >
                <Route index element={<Home/>}/>
                {/* <Route path="/bootstraptest" element={<CssTest/>}/>
                <Route path="/materialuitest" element={<CssTestTwo/>}/> */}
            </Route>
            {/* <Route exact path="/resume" element={<ResumeHeader/>} >
                <Route index element={<Resume/>}/>
                <Route path="/bootstraptest" element={<CssTest/>}/>
                <Route path="/materialuitest" element={<CssTestTwo/>}/>
            </Route> */}

        <Route path="*" element={<WrongPage />} />


        </Routes>
        </>
    )
}






export default App