import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    console.log("GGWP");
  switch (action.type) {
    case 'FETCH_WEATHER':
    console.log("inside reducer")
    console.log(action.payload);
      return [action.payload.data, ...state];
  }
  return state;
}