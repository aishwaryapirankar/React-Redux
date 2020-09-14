const initialState = {count: 0}

const INCREMENT = 'Increment count'
const DECREMENT = 'Decrement count'

const CountReducer = (state = initialState, action) => {
    const {type,payload} = action

    if(type === INCREMENT){
        return {count: state.count + payload.value}
    }

    if(type === DECREMENT){
        return {count: state.count - payload.value}
    }

    return state;
}

export default CountReducer;

export const incrementAction = (value) =>{
    return{
        type: INCREMENT,
        payload: {value}
    }
}

export const decrementAction = (value) =>{
    return{
        type: DECREMENT,
        payload: {value}
    }
}