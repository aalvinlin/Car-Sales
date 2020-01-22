import React from 'react';
import { formatPrice } from "../utils/formatPrice";

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Base Price: {formatPrice(props.car.price)}</p>
    </>
  );
};

export default Header;
