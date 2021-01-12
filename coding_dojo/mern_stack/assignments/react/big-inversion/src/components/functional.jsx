import React from 'react'

const Functional = props => {
    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
    
}

// class Birthday extends Component {
//     constructor(){
//         super()
//         this.state = {
//             age: 45 
//         }
//     }

//     update(){
//         this.setState({
//             age: this.state.age +=1
//         })
//     }
//     render() {
//         return(
//             <div>
//                 <h1>{this.props.lastName}, {this.props.firstName}</h1>
//                 <p>Age: {this.props.age}</p>
//                 <p>Hair Color: {this.props.hairColor}</p>
//             </div>
//         )
//     }
// }

export default Functional