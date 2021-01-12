import React, { useState} from 'react'



const Tabheader = (props) => {

    const selectHandler = (e) => {
        props.isClicked(props.tabItem.index)
        console.log(`You clicked on ${props.tabItem.title}`)
    }

    const selectedStyle = {
        backgroundColor: "aquamarine"
    }

    const notSelectedStyle = {
        backgroundColor: "lightgrey"
    }

    return <button onClick={ selectHandler} style= { props.tabItem.selected ? selectedStyle : notSelectedStyle }>{props.tabItem.title}</button>
        
    ;
}

export default Tabheader

