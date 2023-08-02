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



function amadeiusFetch(){
    const token = "hblCUGeTjn0KQQL8VygxEo1UvDZP"
    // let url = "test.api.amadeus.com/v2/shopping/flight-offers";
    fetch("https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2023-11-01&adults=1&max=2", {
        method:"GET",
        headers:{
            "Content-Type":"application/vnd.amadeus+json",
            "Authorization":`Bearer ${token}`
        },
        mode:"cors",
        catch:"default"
    }).then(function(response){
        console.log(response);
        if(response.ok){
            return response.json();
        }
        // else{
        //     throw new Error(error);
        // }
    }).then(function(data){
        console.log(data);
        //query data here
    }).catch(function(error){
        console.log(error);
    });
}

amadeiusFetch();