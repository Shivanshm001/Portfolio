import { ACTIONS } from "./ACTIONS";

export const setActiveTab = (tab) => {
    return {
        type: ACTIONS.SET_ACTIVE_TAB,
        payload: {
            tab
        }
    }
};

export const removeTab = (tab) => {
    console.log(tab);
    return {
        type: ACTIONS.REMOVE_TAB_FROM_BAR,
        payload: {
            tab
        }
    }
};

export const addTab = (tab) => {
    return {
        type: ACTIONS.ADD_TAB_TO_BAR,
        payload:{
            tab
        }
    }
}

export const setStateToInitial = () => {
    return {
        type: ACTIONS.SET_STATE_TO_INITIAL
    }
}