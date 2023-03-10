//React Library
import React from 'react'

//Data & Components
import data from './data'
import { NavBar } from './components/NavBar'
import { Content } from "./components/Content";

//Css
import './App.css'

function App() {

  const cards = data.map(item =>{
    return(
        <div>
            <Content
                  item = {item}  /* Could use spread operator [...items] */
            />
        </div>

        
    )
  })


  return(
          <div className='App'>
            
               <NavBar/>
               <section className='card-list'>
                    {cards}  
               </section>
          </div>
        
      )
}

export default App
