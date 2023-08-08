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

