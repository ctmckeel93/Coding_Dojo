import React, { Component } from 'react'

class MyComponent extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ () => {
                    this.props.age += 1
                }}>Birthday time!</button>
            </div>
        )
    }
}

export default MyComponent