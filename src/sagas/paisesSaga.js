import { put, call, takeLatest, all } from 'redux-saga/effects';
import {SUCCESSFUL_GET_DADOS, ERROR_GET_DADOS, GET_DADOS }  from '../actions/actionTypes';

const axios = require('axios');

export function* getDadosApi(action) {
    try {
        const response = yield call(axios.get, 'http://coronavirus-19-api.herokuapp.com/countries')

        console.log('data')
        console.log(response)

        yield put ({
            type: SUCCESSFUL_GET_DADOS,
            payload: response.data,
        })
    }
    catch(error) {
        yield put ({
            type: ERROR_GET_DADOS,
            payload: error,
        })
    }
}

export default all([takeLatest(GET_DADOS, getDadosApi)]);