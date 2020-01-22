import React from 'react';
import { formatPrice } from "../utils/formatPrice";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{formatPrice(props.feature.price)})
    </li>
  );
};

export default AdditionalFeature;
