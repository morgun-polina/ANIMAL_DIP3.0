import {animalsList} from './itemsAction'

const InitialState ={
    animals: []
}

export const animalsReducer = (state = InitialState, action) => { 
    
    switch (action.type){
        case 'FETCH_ANIMAL':
            return{
                ...state,
                animals: action.payload
            }
        default:
            return state
    }
}