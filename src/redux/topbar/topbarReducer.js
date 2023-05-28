import { ACTIONS } from "./ACTIONS";

const initialState = {
    activeTab: "/",
    openedTabs: ["/", "/about", "/resume", "/contact","/projects"]
}

export const topbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_STATE_TO_INITIAL: return {
            ...state,
            ...initialState
        };

        
        case ACTIONS.SET_ACTIVE_TAB: return {
            ...state,
            activeTab: action.payload.tab
        }

        case ACTIONS.REMOVE_TAB_FROM_BAR: return {
            ...state,
            openedTabs: state.openedTabs.filter(el => el !== action.payload.tab)
        }

        case ACTIONS.ADD_TAB_TO_BAR:
            if (state.openedTabs.includes(action.payload.tab)) {
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                    openedTabs: [...state.openedTabs, action.payload.tab]
                }
            }
        default: return state;
    }
}