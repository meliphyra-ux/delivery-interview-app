const initialValue = false;

const modalSlice = (state = initialValue, action) => {
    if(action.type === 'TOGGLE_MODAL'){
        return !state
    }
    return state
}

export default modalSlice;