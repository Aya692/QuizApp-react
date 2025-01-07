import { HashRouter, Route, Routes}   from 'react-router-dom';

import './App.css';
import Home from './Pages/Home/Home.jsx';
import Result from './Pages/Result/Result.jsx'
import Quiz from './Pages/Quiz/Quiz.jsx'
import { useState } from 'react';
import axios from 'axios';

function App() {
  const[name , setName] = useState("");
  const[questions , setQuestions] = useState("");
  const [score , setScore] = useState(0);


  const fetchQuestions = async(category ="" , difficulty = "") => {
        const {data} = await axios.get(`
        https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple` );
        setQuestions(data.results);

  } 

  return <>
    
    <HashRouter>
    <div className="app  pt-4" >
      

       <Routes>
          <Route path='/' element={  <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}></Route>
          <Route path='/quiz' element={  <Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>}></Route>
          <Route path='/result' element={  <Result name={name} score={score} />}></Route>
       </Routes>
  
     
    </div>
    
    </HashRouter>
  
  
  </>
}

export default App;
