import { GET_DADOS } from "./actionTypes";
import { getDadosThunk } from "../thunks";

/* export const getDados = () => ({
  type: GET_DADOS,
}); */

export const getDados = () => (dispatch) => {
  dispatch({
    type: GET_DADOS,
  });
  dispatch(getDadosThunk());
};
