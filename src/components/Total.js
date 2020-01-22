import React from 'react';
import { formatPrice } from "../utils/formatPrice";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: {formatPrice(props.car.price + props.additionalPrice)}</h4>
    </div>
  );
};

export default Total;
