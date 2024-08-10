import React from "react";
import ReactDom from "react-dom";
import { useState,setState } from "react";


function Runner(){
    const[addMe,setAddme]= useState(0)
    const[subMe,setSubme]=useState(0)

    const handleClick=()=>{
        setAddme(addMe+3)
    }
    const  subber=()=>{
        setSubme(subMe-7)
    }





    const shoot = () => {
        alert("Great Shot!");
      }
    

    const logMe=()=>{
    console.log("Capiyoo the genious");
        
    }



    return(
        <di>
                    <button  onClick={handleClick}>
            Click me
                        </button>
                        <p>{addMe}</p>


                        
                    <button  onClick={subber}>
            Click me
                        </button>
                        <p>{subMe}</p>
                        </di>
            
        
    )


}
export default Runner