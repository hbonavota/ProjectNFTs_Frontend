import axios from "axios";

export default function addFavorite(payload) {
  return async function (dispatch) {
    try {
      let rta = await axios.post("/favorites", payload);
      console.log(rta, "ACAA");
      return dispatch({
        type: "ADD_FAVORITE",
        payload: rta.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
