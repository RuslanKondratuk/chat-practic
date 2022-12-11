export const reducer = (state, action) => {
    switch (action.type) {
        case 'DATA_LOAD_SUCCESS': {
            const {data: {comments}} = action;
            return {
                ...state,
                message: comments
            }
        }
        case 'DATA_LOAD_ERROR': {
            const {error} = action
            return {
                ...state,
                error
            }
        }
        case 'SEND_NEW_MESSAGE': {
            const {newMessageFromMe} = action
            const newArreyMessage = [...state.message, newMessageFromMe]
            return {
                ...state,
                message: newArreyMessage
            }
        }

        default: {
            return state
        }
    }

}