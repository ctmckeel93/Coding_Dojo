    import React, { useState, useEffect } from "react";

    const TBColor = (props) => {
    const inputStyle = {
    color: props.tcolor,
    backgroundColor: props.bcolor,
    };

    return (
        <div className="styled-word" style={inputStyle}>{isNaN(props.id) ? (<p>The word is: {props.id}</p>) : (<p>The number is: {props.id}</p>)}</div>
    );
    };

    export default TBColor;
