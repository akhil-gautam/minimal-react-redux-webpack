import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";
import uuidv1 from "uuid";

const initVal = [{title: "first article", id: uuidv1()}];

const articleReducer = (state = [...initVal], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    case REMOVE_ARTICLE:
      return state.filter(article => article.id !== action.payload.id);
    default:
      return state;
  }
};

export default articleReducer;
