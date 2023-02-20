import React from 'react'

//Css
import './content.css'


function Content(props){
    
    return(
        
       <div className='content'>



            <img src={props.item.imageUrl} alt="Image from data.jsx" />

            <div className="rightCard">
                <span className='spanCard'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg> 
                        <p>{props.item.location}</p>
                        <a href={props.item.googleMapsUrl}><p>View on Google Maps</p></a> 
                </span>          

                <h2>{props.item.title}</h2>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>

                <p>{props.item.description}</p>

            </div>


            <hr />
       </div>
        
    )
}

export{
    Content
}