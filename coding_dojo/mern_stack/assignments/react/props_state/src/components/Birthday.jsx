import React, { Component } from 'react'

class Birthday extends Component {
    constructor(){
        super()
        this.state = {
            age: 45 
        }
    }

    update(){
        this.setState({
            age: this.state.age +=1
        })
    }
    render() {
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={() => this.update()}>Birthday time!</button>
            </div>
        )
    }
}

export default Birthday