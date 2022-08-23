import { GET_CHARACTERS, ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

let initialState = {
    personajes: [],
    favoritos: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_CHARACTERS:
            return{
                ...state,
                personajes: action.payload
            }
        case ADD_FAVORITE:
            return{
                ...state,
                favoritos: [...state.favoritos, action.payload]
            }
        case REMOVE_FAVORITE:
            return{
                ...state,
                favoritos: state.favoritos.filter((e)=>{
                    return e.id !== action.payload
                })
            }

        default:
            return {...state}
    }
}