import { ACTIONS } from "./ACTIONS";

const initialState = {
    isOpen: true,
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.CLOSE_HOME_TAB: return {
            ...state,
            isOpen: false,
        }
        default: return state;
    }
}