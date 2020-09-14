const initialState = {diff: 1};

const SET_DIFF = 'Set value of diff';

const diffReducer = (state = initialState, action) =>{
    const {type,payload} = action;

    if(type === SET_DIFF){
        return{diff: payload.value}
    }
      
    return state;
      
}
      
export default diffReducer;
      
      
export const setDiffAction = (value) => {
    return {
      type: SET_DIFF,
      payload: {value}
    }
}

