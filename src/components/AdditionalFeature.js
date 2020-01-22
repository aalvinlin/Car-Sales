import React from 'react';
import { formatPrice } from "../utils/formatPrice";

import { addFeature } from "../reducers/statsReducer";
import { connect } from "react-redux";

const AdditionalFeature = props => {

  const addItem = (event, id) => {

      event.preventDefault();
      props.addFeature(id);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={(event) => addItem(event, props.feature.id)}>Add</button>
      {props.feature.name} (+{formatPrice(props.feature.price)})
    </li>
  );
};

function mapStateToProps(state) {
  return {
      additionalPrice: state.additionalPrice,
      car: state.car,
      additionalFeatures: state.additionalFeatures
  }
}

const mapDispatchToProps = { addFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
