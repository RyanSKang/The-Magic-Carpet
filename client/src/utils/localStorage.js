export const getSavedFlights = () => {
    const savedFlightsIds = localStorage.getItem('results')
    ? JSON.parse(localStorage.getItem('results'))
    : [];
    return savedFlightsIds;
};

export const saveFlightsId = (flightsIdArr) => {
    if (flightsIdArr.length) {
        localStorage.setItem('results', JSON.stringify(flightsIdArr));
    } else {
        localStorage.removeItem('results');
    }
};

