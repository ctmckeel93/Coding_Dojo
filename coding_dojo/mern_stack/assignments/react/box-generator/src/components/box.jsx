import React, { useState } from 'react'
import New from './New'

const BoxForm = props => {
    const [color, setColor] = useState([])
    const [newColor, setNewColor] = useState('')
    const [newSize, setNewSize] = useState('')
    
    
    
    // const createBox = (e) => {
    //     e.preventDefault();
    //     boxes.push(newBox)
        
        
            
    //     }
    const customBox = () =>{

    }
    const handleBox = (e) => {
        e.preventDefault();
        setColor(color => [...color,{color: newColor, size: newSize}])
        // setSize(size => [...size, newSize] )
        setNewColor('')
        setNewSize('')
        
        
    }

    console.log("colors: " + color)
    console.log("sizes: " + newSize)

    
    
    return(
        <>
        <form onSubmit={ handleBox } >
            <div>
                <label htmlFor="color">Color</label>
                <input name="color" type="text" onChange={(e) => setNewColor(e.target.value)} value={newColor}  />
            </div>
            <div>
                <label htmlFor="size">Size</label>
                <input type="text" onChange={(e) => setNewSize(e.target.value)} value={newSize}/>
                <input type="submit" value="Add"></input>
            </div>
        </form>

        {newSize}
        {/* <ul>{
            boxes.map((item, i) => 
                <li key={i}>{ item }</li>)
        }</ul> */}
        <div className="box">
            {color.map((item) => 
        <New color={item.color} size={item.size} />
        )}
        </div>
        {/* {console.log("colors: " + color)}
        {console.log("sizes: " + size)}
         */}
        
        {/* {console.log(boxes)} */}
        
            
            
            
        
        </>
    )
}
export default BoxForm