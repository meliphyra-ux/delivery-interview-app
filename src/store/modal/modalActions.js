import { createAction } from "../actionCreator"

export const MODAL_ACTIONS = {
    TOGGLE_MODAL: 'modal/TOGGLE_MODAL'
}

export const toggleModal = (text = undefined) => createAction(MODAL_ACTIONS.TOGGLE_MODAL, text)