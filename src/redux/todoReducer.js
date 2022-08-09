import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./actions";

const initialState = []

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: 
            return [...state, action.payload]
        case REMOVE_TODO:
            return state.filter(i => i.id !== action.payload)
        case EDIT_TODO: 
            return state.map(i => {
                if(i.id === action.payload.id) {
                    i.text = action.payload.text
                }
                return i;
            })
        default: 
            return state
    }
}