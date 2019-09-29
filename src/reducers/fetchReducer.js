const initialState ={};

const fetchReducer = (state=initialState,action) => {
    switch(action.type){
        case 'STORE':
            console.log("here is the data");
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default fetchReducer;