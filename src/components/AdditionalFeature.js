import React from 'react';
import { formatPrice } from "../utils/formatPrice";

import { addFeature } from "../reducers/statsReducer";
import { connect } from "react-redux";

const AdditionalFeature = props => {

  console.log(props);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeature(props.feature.id)}>Add</button>
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
