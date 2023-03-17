import { MODAL_ACTIONS } from "./modalActions";

const initialValue = {
    isOpen: false,
    text: ''
};

const modalSlice = (state = initialValue, action) => {
    if(action.type === MODAL_ACTIONS.TOGGLE_MODAL){
        return {isOpen: !state.isOpen, text: action.payload ?? ''}
    }
    return state
}

export default modalSlice;