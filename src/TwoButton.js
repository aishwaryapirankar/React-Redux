import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrementAction, incrementAction } from './store/count';

const TwoButton = (props) =>{
    const {decrement, increment,diff} = props;

    const handleIncrement = () => {
        increment(diff);
    }

    const handleDecrement = () => {
        decrement(diff);
    }
    
    return(
        <div>
            <button onClick ={handleDecrement}>-{diff}</button>
            <button onClick ={handleIncrement}>+{diff}</button>
        </div>
    )
}



const mapDispatchtoProps = (dispatch) =>{
    return bindActionCreators({
        increment: incrementAction,
        decrement: decrementAction
    }, dispatch);
}

const mapStateToProps = (state) => {
    return {
      diff: state.diffReducer.diff
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(TwoButton);