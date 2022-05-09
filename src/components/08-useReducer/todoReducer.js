export const todoReducer =(state=[], action) =>{
    switch (action.type) {
        case 'add':
        //break;
        return [...state,action.payload]
        default:
        return state;
    }
    

}