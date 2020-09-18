export const initialState = {
    basket :[]
}

const reducer = (state, action) => {

    switch(action.type){
        case 'Add_To_Basket':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'Remove_From_Basket':
            return state;
            break
        default: 
            return state;
    }
}

export default reducer;