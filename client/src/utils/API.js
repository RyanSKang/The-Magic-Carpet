// route to retrieve logged in user's info
// export const createdUser = (userData) => {
//     return fetch('/api/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//     });
// };

// // save flight chosen for a logged in user
// export const saveFlight = (flightData, token) => {
//     return fetch('/api/users', {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'application/json',
//             authorization: '',
//         },
//         body: JSON.stringify(flightData),
//     });
// };

// make a search to amadeius flights api
// export const searchFlights = (query) => {
//     return fetch('test.api.amadeus.com/cCugx4gjvjABhqA6SOhdxyI0z1BoVZWV');
// };

function amadeiusFetch () {
fetch ("test.api.amadeus.com/v2/shopping/flight-offers", {

     headers:{ 
        "Authorization": "Bearer SIWGHvruAFR6YatnjpjyXRCiGQhn"
},
    method: "GET"
}).then((res) => {
    return res.json();
}).then((data) => {
    console.log (data);
})};

amadeiusFetch();