import React from 'react';
import './App.css';
import Counter from './Counter';
import DiffCounter from './DiffCounter';
import TwoButton from './TwoButton';

// class App extends Component{

//     state = {
//       count: 0,
//     }

//     handleIncrement = () =>{
//       this.setState(
//         {count: this.state.count+1})
//     }

//     handleDecrement = () =>{
//       this.setState(
//         {count: this.state.count-1})
//     }

//   render(){
//     return(
//     <>
//       <Counter count={this.state.count} />
//       <TwoButton onIncrement = {this.handleIncrement} onDecrement = {this.handleDecrement} />
//     </>
//     )
//   }
// }

const App = () => {
  return ( 
    <div>
        <DiffCounter />
        <Counter />
        <TwoButton />
    </div>
  );
}
 
export default App;