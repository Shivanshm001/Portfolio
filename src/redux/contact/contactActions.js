import { ACTIONS } from "./ACTIONS"


export const updateName = (name) => {
    return {
        type: ACTIONS.UPDATE_NAME,
        payload: {
            name
        }
    }
};


export const updateEmail = (email) => {
    return {
        type: ACTIONS.UPDATE_EMAIL,
        payload: {
            email
        }
    }
};

export const updateMessage = (message) => {
    return {
        type: ACTIONS.UPDATE_MESSAGE,
        payload: {
            message
        }
    }
};