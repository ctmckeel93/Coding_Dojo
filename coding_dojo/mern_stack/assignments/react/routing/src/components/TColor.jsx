    import React from "react";

    const TColor = (props) => {
    const inputStyle = {
    color: props.tcolor,
    };

    return (
        <div className="styled-word" style={inputStyle}>{isNaN(props.id) ? (<p>The word is: {props.id}</p>) : (<p>The number is: {props.id}</p>)}</div>
    );
    };

    export default TColor;
