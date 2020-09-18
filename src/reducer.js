export const initialState = {
    basket :[]
}

function reducer(state, action){
    switch(action.type){
        case 'Add_To_Basket':
            break
        case 'Remove_From_Basket':
            break
        default: 
            return state;
    }
}

export default reducer;