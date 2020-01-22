import React from 'react';
import AdditionalFeature from './AdditionalFeature';

// import { connect } from "react-redux";

const AdditionalFeatures = props => {

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;

// function mapStateToProps(state) {
//   return {
//       additionalPrice: state.additionalPrice,
//       car: state.car,
//       additionalFeatures: state.additionalFeatures
//   }
// }

// export default connect(mapStateToProps)(AdditionalFeatures);