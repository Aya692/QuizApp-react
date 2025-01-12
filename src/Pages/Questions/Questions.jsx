import { useState } from "react"
import ErrorMessage from "../../ErrorMessage/ErrorMessage"
import './Questions.css'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Questions({ currQues ,setCurrQues ,questions ,options ,correct ,setScore,score}) {

let navigate = useNavigate()
  const [selected , setSelcted] = useState();
  const [error , setError ] = useState(false);

  const handleSelect =(i) => {
    if(selected === i && selected === correct) {
        return "select";
    }
    else if(selected ===i && selected !== correct){
        return "wrong"
    }
    else if(i ===correct) {
        return "select"
    }
  } 

  const handleCheck = (i)=>    {
    setSelcted(i)
     if(i === correct) setScore(score+1)
        setError(false)
  }
  const handleNext =()=>{
    if(currQues > 8) {
        navigate("/result");
    }
    else if(selected) {
        setCurrQues(currQues+1)
        setSelcted()
    }
    else{
        setError("Please select an option first")
    }
  }

return <>
       <div className="question">
         <h1>Question {currQues + 1}</h1> 
         <div className="singleQuestion">
            <h2>{questions[currQues].question}</h2> 
            <div className="options">
                {error? <ErrorMessage>{error}</ErrorMessage> :''} 
                {options && options.map((i)=> <button  onClick={()=> handleCheck(i) }
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
                >{i}</button>)}
            </div>

            <div className="controls">
                <Button 
                 color="secondary"
                  href="/"
                  size="large" 
                  style={{width: 185}} 
                  variant="contained"
                //   onClick={handleQuite}
                  >Quit</Button>
                <Button 
                color="secondary"  
                variant="contained"
                size="large" 
                style={{width: 185}}  
                onClick={handleNext}
                >Next Question</Button>
            </div>
         </div>
       </div>
    </>
}