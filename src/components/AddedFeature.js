import React from 'react';

import { removeFeature } from "../reducers/statsReducer";
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.car.features.id)}>X</button>
      {props.feature.name}
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

const mapDispatchToProps = { removeFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
