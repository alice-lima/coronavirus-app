import {GET_DADOS, SUCCESSFUL_GET_DADOS, ERROR_GET_DADOS} from '../actions/actionTypes';

const INITIAL_STATE = {
    paises: [],
    requestStatus: {
        loading: false,
        loaded: false,
        error: false,
        errorDescription: ''
    },
}

export const paisesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_DADOS:
            return {
                ...state,
                requestStatus: {
                    loading: true,
                    loaded: false,
                    error: false,
                    errorDescription: '',
                }
            }
        case SUCCESSFUL_GET_DADOS:
            return {
                ...state,
                paises: action.payload,
                requestStatus: {
                    loading: false,
                    loaded: true,
                    error: false,
                    errorDescription: '',
                }
            }
        case ERROR_GET_DADOS:
            return {
                ...state,
                loading: false,
                    loaded: false,
                    error: true,
                    errorDescription: action.payload,
            }
        default:
            return state
    }
}

export default paisesReducer;