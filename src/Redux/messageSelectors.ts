import { AppStateType } from '../types/types'

export const getMessageData = (state: AppStateType) => (state.message.messagesData);