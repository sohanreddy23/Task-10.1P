import React from 'react'

function Developer(props){
    return(
        <div>
            <img src={props.image} alt="Photo" style={{width:'200px',height:'200px'}} />
            <h2>{props.name}</h2>
            <p>{props.Description}</p>
        </div>

    )
}
export default Developer ;