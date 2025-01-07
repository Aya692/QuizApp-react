import './Home.css';
import img from '../../images/undraw_online-test_20lm.png';
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../../Data/Categories';
import { useState } from 'react';
import React from 'react';

import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
export default function Home({name , setName , fetchQuestions}) { 
     
      const [category , setCategory] = useState("");
      const [difficulty , setDifficulty] = useState("");
      const [error , setError] = useState(false) ;

      const navigate = useNavigate();
      const handleSubmit = ()=> {
         if(!category || !difficulty || !name) {
            setError(true)
            return
         }
         else {
            setError(false)
            fetchQuestions(category , difficulty);
            navigate('/quiz')
         }
      }
    return <>
       
       <div className="container" > 
        <h2>Start your Quiz Now... please </h2>
        
       <hr className=""/>  

       <div className='content'>
         <div className="settings">
            <span style={{fontSize:30}}>Quiz Settings</span> 

            <div className="setting-select"> 
             {error && <ErrorMessage>Please fill all the feilds</ErrorMessage>}
            <TextField label="Enter your Name"
             variant="outlined" 
             style={{marginBottom:25}}
             onChange={(e)=> setName(e.target.value)}
             />
           

           <TextField select 
           label="select category" 
           variant='outlined'  
           style={{marginBottom:25}} 
           onChange={(e)=> setCategory(e.target.value)}
           value={category}
           >
             
             {Categories.map((cat)=> (
                  <MenuItem key={cat.category} value={cat.value}>
                     {cat.category}
                  </MenuItem>
             ))
             }
           </TextField> 
           <TextField
             select
             label="select Difficulty"
             variant='outlined' style={{marginBottom:30}}
             onChange={(e)=> setDifficulty(e.target.value)}
             value={difficulty}
           >
            <MenuItem key="Easy" value="easy">Easy</MenuItem>
            <MenuItem key="Meduim" value="medium">Medium</MenuItem>
            <MenuItem key="Hard" value="hard">Hard</MenuItem>
           </TextField> 

           
           <Button color='secondary' variant="contained" onClick={handleSubmit}>Start Quiz</Button>
            </div>
         </div>



         <img src={img} alt="Quiz img"  className='banner'/>
       </div>

       </div>
    </>
}