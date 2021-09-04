
export const initialState = {
    basket :[],
    user: null
}

const reducer = (state, action) => {

    switch(action.type){
        case 'Add_To_Basket':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'Remove_From_Basket':
            let remArray = state.basket.filter(({id})=> id !== action.item.id)
            
            return {
                ...state,
                basket: remArray
            };
            
        case "Set_User":
            return{
                ...state,
                user: action.user
            }
            
        default: 
            return state;
    }
}

export default reducer;
