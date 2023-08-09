export const getSavedFlightsIds = () => {
    const savedFlightsIds = localStorage.getItem('saved_flights')
    ? JSON.parse(localStorage.getItem('saved_flights'))
    : [];
    return savedFlightsIds;
};

export const saveFlightsId = (flightsIdArr) => {
    if (flightsIdArr.length) {
        localStorage.setItem('saved_flights', JSON.stringify(flightsIdArr));
    } else {
        localStorage.removeItem('saved_flights');
    }
};

export const removeFlightId = (flightId) => {
    const savedFlightIds = localStorage.getItem('saved_flights')
      ? JSON.parse(localStorage.getItem('saved_flights'))
      : null;
  
    if (!savedFlightIds) {
      return false;
    }
  
    const updatedSavedFlightIds = savedFlightIds?.filter((savedFlightId) => savedFlightId !== flightId);
    localStorage.setItem('saved_flights', JSON.stringify(updatedSavedFlightIds));
  
    return true;
  };

