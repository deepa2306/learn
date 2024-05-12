import React from 'react';
const Welcome=(props)=>{
    console.log(props)

    return (
    <div>
        <h1> Hello I am {props.name}, I am playing {props.sportsName}, I Am from {props.city} and I am {props.Gender}</h1>
        {props.children}
        </div>
    )
}
export default Welcome;