import store from "../store";
import types from "../types";

const { dispatch } = store

export function increment(data) {
    dispatch({
        type: types.INCREMENT,
        payload: data
    })
}