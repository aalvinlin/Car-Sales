// export function addCarId(id) {
//     return {
//         type: "ADD_CAR_ID",
//         payload: id
//     }
// }

// export function addCarYear(year) {
//     return {
//         type: "ADD_CAR_YEAR",
//         payload: year
//     }
// }

// export function addCarMake(make) {
//     return {
//         type: "ADD_CAR_MAKE",
//         payload: make
//     }
// }

// export function addCarModel(model) {
//     return {
//         type: "ADD_CAR_MODEL",
//         payload: model
//     }
// }

// export function addPictureUrl(url) {
//     return {
//         type: "ADD_PICTURE_URL",
//         payload: url
//     }
// }

// export function addBasePrice(price) {
//     return {
//         type: "ADD_BASE_PRICE",
//         payload: price
//     }
// }

export function addFeature(featureId) {
    return {
        type: "ADD_FEATURE",
        payload: featureId
    }
}

export function removeFeature(featureId) {
    return {
        type: "REMOVE_FEATURE",
        payload: featureId
    }
}

const initialStats = {
    additionalPrice: 0,
    car: {
      price: 26000,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export default function statsReducer(stats = initialStats, action) {

    // Removes an object with a specified targetId from array1 and adds it to array2.
    function moveFromArray(targetId, array1, array2) {

        let object = array1.filter(item => item.id === targetId)[0];

        // if object not found, return both arrays as is
        if (!object)
            { return [array1, array2]}

        let array1WithItemRemoved = array1.filter(item => item.id !== targetId);
        let array2WithItemAdded = [...array2, object];

        return [array1WithItemRemoved, array2WithItemAdded];
    }

    switch (action.type)
    {
        case "ADD_FEATURE":
            {
                const [newFeaturesOnCar, newAvailableFeatures] = moveFromArray(action.payload, stats.car.features, stats.car.additionalFeatures);
                return { ...stats, car: {...stats.car, newFeaturesOnCar}, additionalFeatures: newAvailableFeatures}
            }
 
        case "REMOVE_FEATURE":
            {
                const [newFeaturesOnCar, newAvailableFeatures] = moveFromArray(action.payload, stats.car.additionalFeatures, stats.car.features);
                return { ...stats, car: {...stats.car, newFeaturesOnCar}, additionalFeatures: newAvailableFeatures}
            }

        default:
            return stats;
    }
}