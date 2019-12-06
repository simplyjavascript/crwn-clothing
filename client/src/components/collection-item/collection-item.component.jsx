import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "./../custom-button/custom-button.component";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${item.imageUrl})`
      }}
    ></div>
    <CustomButton onClick={() => addItem(item)} inverted>
      Add to cart
    </CustomButton>

    <div className="collection-footer">
      <span className="name"> {item.name}</span>
      <span className="price"> {item.price}</span>
    </div>
  </div>
);
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
