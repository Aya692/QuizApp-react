import { Button } from "@mui/material";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Result.css"


export default function Result({name , score}) {  
  const navigate = useNavigate();
  useEffect(()=> {
    if(!name) {
      navigate("/")
    }
  } ,[name ,navigate])
    return <>
       

       <div className="result">
         <h1>Thank you {name} </h1> 
         <h1 className="title">Final Score : {score}</h1> 
         <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{alignSelf: "center" , marginTop:20}}
          href="/"
         >
          Try Again
         </Button>
       </div>
    </>
}