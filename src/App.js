import logo from './logo.svg';
import './App.css';
import Greeter from './gretter';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
/* 
import CarHooks from './component/hooksComponent';
import classComponentex8 from  './component/classComponentex8';
import Exercice5 from './component/Exercice5';
import exercice2 from './component/funnouv';





import Hamza1 from './component/Hamza1';
import Hamza2 from './component/Hamza2';
import Hamza3 from './component/Hamza3';
import CarHooks from './component/hooksComponent';
import ExpenseForm from './component/NewExpense/ExpenseForm'; 




*/

import CompA from './component/CompA';
import CompC from './component/CompC';
import CompD from './component/CompD';
import NewExpense from './component/NewExpense/NewExpense';
import Toggle from  './component/Toggle';











function App(props) {
  const tab = [

    
                {titre:"22/02/2021",contenu:"sssssss"}

        ]
  return (
    <div className='alert:alert-primary'>
      
{/*       <ExpenceItem date="12/02/2021" titre="this is title" amount="32.5" />
 */}    {/*  

      
      <CarHooks></CarHooks>
      <ExpenceItem titre={tab[0].titre}/>
      <ExpenceItem amount={tab[0].amount}/>
      <classComponentex8></classComponentex8>
      


  <Hamza1 nom="manai" prenom="hamza" age="28"></Hamza1>
      <Hamza2></Hamza2>
      <Hamza3></Hamza3>
      <CarHooks></CarHooks>
      <Toggle></Toggle>
      <ExpenseForm></ExpenseForm> 
      <NewExpense></NewExpense>
            <Hamza5></Hamza5>


        
        */}
      
      <CompA></CompA>
      <CompC></CompC>
      <CompD titre="titre" contenu="contenu"/>


     

<BrowserRouter>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        
        <Link to="/toggle">link to toggle component</Link>
        <Link to="/">         home</Link>
      </nav>
        <Routes>
        <Route path="newexpense" element={<NewExpense />} />
        <Route path="toggle" element={<Toggle />} />
        <Route path="/" />
        </Routes>
      </BrowserRouter>






    </div>
  );
}


export default App;
