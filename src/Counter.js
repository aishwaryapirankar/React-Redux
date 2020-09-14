import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) =>{
    let {count} = props;

    return(
        <h1>{count}</h1>
    )
}

const mapStatetoProps = (state) =>{
    return{
        count: state.CountReducer.count
    }
}

export default connect(mapStatetoProps, null)(Counter);