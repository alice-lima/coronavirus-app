import Axios from "../config/axios";
import { SUCCESSFUL_GET_DADOS, ERROR_GET_DADOS } from "../actions/actionTypes";

export function getDadosThunk() {
  return (dispatch) => {
    Axios.get("/countries")
      .then((response) =>
        dispatch({
          type: SUCCESSFUL_GET_DADOS,
          payload: response.data,
        })
      )
      .catch((error) => dispatch({ type: ERROR_GET_DADOS, payload: error }));
  };
}
