const SEND_MESSAGE = 'my-app/message/SEND-MESSAGE';

export type InitialStateType = typeof inicialState;

type DialogsType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

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

const messageReducer = (state = inicialState, action: any) => {

    switch (action.type) {

        case SEND_MESSAGE:

            return {
                ...state,
                messagesData: [...state.messagesData, { id: state.messagesData.length + 1, message: action.message }]
            };

        default:
            return state;
    }
};

type SendMessageActionType = {
    type: typeof SEND_MESSAGE,
    message: string
}

export const sendMessage = (message: string): SendMessageActionType => ({ type: SEND_MESSAGE, message });

export default messageReducer;