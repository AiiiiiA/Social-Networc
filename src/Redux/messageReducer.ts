import { InferActionsType } from "./reduxStore"

let inicialState = {

    dialogsData: [
        { id: 1, name: 'Dymich' },
        { id: 2, name: 'Dymich' },
        { id: 3, name: 'Dymich' },
        { id: 4, name: 'Dymich' }
    ] as Array<DialogsType>,

    messagesData: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как ты?' },
        { id: 3, message: 'Как дела?' },
        { id: 4, message: 'Что делаешь?' }
    ] as Array<MessageType>
}

const messageReducer = (state = inicialState, action: ActionsType): InitialStateType => {

    switch (action.type) {

        case 'my-app/message/SEND-MESSAGE':

            return {
                ...state,
                messagesData: [...state.messagesData, { id: state.messagesData.length + 1, message: action.message }]
            }

        default:
            return state
    }
}

export const actions = {
    sendMessage: (message: string) => ({ type: 'my-app/message/SEND-MESSAGE', message } as const)
}

export default messageReducer

export type InitialStateType = typeof inicialState
type DialogsType = { id: number, name: string }
type MessageType = { id: number, message: string }
type ActionsType = InferActionsType<typeof actions>