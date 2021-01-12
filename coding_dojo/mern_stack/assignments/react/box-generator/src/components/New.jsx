import React, {useState} from 'react'


const New = (props) => {
    const boxStyle={
        backgroundColor: props.color,
        border: "1px solid black",
        marginBottom: "10px",
        height: props.size + "px",
        width: props.size + "px"
    }
    return(
        <>
        <div style={ boxStyle }></div>
            {console.log(props.size)}
            {console.log(props.color)}
        </>
    )


}



export default New