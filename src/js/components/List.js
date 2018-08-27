import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "../store/index"
import { REMOVE_ARTICLE } from "../constants/action-types";

const mapStateToProps = state => {
  return { articles: state.articles };
};
  
const handleClick = (el) => {
  store.dispatch({type: REMOVE_ARTICLE, payload: el});
}
const ConnectedList = ({ articles }) => { 
  return(<ul className="list-group list-group-flush">
      {articles.map(el => (
        <li id={el.id} className="list-group-item" key={el.id}>
          {el.title}
          <button onClick={() => handleClick(el)}>X</button>
        </li>
      ))}
    </ul>);
};

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default List;
