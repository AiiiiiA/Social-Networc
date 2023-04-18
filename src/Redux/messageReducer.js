const SEND_MESSAGE = 'my-app/message/SEND-MESSAGE';

let inicialState = {

    messagesData: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как ты?' },
        { id: 3, message: 'Как дела?' },
        { id: 4, message: 'Что делаешь?' }
    ]
}

const messageReducer = (state = inicialState, action) => {

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

export const sendMessage = (message) => ({ type: SEND_MESSAGE, message });

export default messageReducer;