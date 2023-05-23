import { ACTIONS } from "./ACTIONS";

const initialState = {
    name: "",
    email: "",
    message: "",
};


export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_NAME:
            return {
                ...state,
                name: action.payload.name
            }

        case ACTIONS.UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }

        case ACTIONS.UPDATE_MESSAGE:
            return {
                ...state,
                message: action.payload.message
            }
        default: return state;
    }
}