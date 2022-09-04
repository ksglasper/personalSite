import React from "react";



const Formtest = ()=>{



    return (
        <>
        <form onSubmit={()=>{console.log('hello')}}>
            <label htmlFor="username">Username</label>
            <input required placeholder="Username"></input>
            <button type="submit"> Submit</button>
        </form>
        </>
    )
}

export default Formtest