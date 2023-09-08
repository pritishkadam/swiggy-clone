const locationConfig = () => {
  return [
    {
      id: 1,
      name: 'mumbai',
      value: 'Mumbai',
      latitude: 19.07609,
      longitude: 72.877426,
    },
    {
      id: 2,
      name: 'pune',
      value: 'Pune',
      latitude: 18.516726,
      longitude: 73.856255,
    },
    {
      id: 3,
      name: 'bangalore',
      value: 'Bangalore',
      latitude: 12.971599,
      longitude: 77.594566,
    },

    {
      id: 4,
      name: 'hyderabad',
      value: 'Hyderabad',
      latitude: 17.38714,
      longitude: 78.491684,
    },
  ];
};

const getLocationDetails = (locationID) => {
  const locations = locationConfig();
  const resultantData = locations.filter((location) => {
    if (locationID === location.value) {
      return location;
    }
  });
  return resultantData[0];
};

export { locationConfig, getLocationDetails };
