import React from 'react'

//Css
import './content.css'


function Content(props){
    return(
       <div className='content'>
             <h3>My Travel Journal</h3>
             <h2>{`The title is ${props.item.title}`}</h2>


            <hr />
       </div>
        
    )
}

export{
    Content
}