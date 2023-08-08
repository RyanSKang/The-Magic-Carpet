export function amadeiusFetch(destinationLocation, originLocation, startDate, endDate, travelers){
    let travelersInput = travelers
    if (!travelers) {
        travelersInput = 1
    }
    let originInput = originLocation
    if (!originLocation) {
        originInput = 'SYD'
    }
    let startDateInput = startDate
    if (!startDate) {
        startDateInput = '2023-08-30'
    }
    let endDateInput = endDate
    if (!endDate) {
        endDateInput = '2024-01-01'
    }
    const token = "3fYXs8sahQ5KItEVezceocawIRn4"
    // let url = "test.api.amadeus.com/v2/shopping/flight-offers";
    return fetch
    (`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originInput}&destinationLocationCode=${destinationLocation}&departureDate=${startDateInput}&returnDate=${endDateInput}&adults=${travelersInput}&max=8`, {
        method:"GET",
        headers:{
            "Content-Type":"application/vnd.amadeus+json",
            "Authorization":`Bearer ${token}`
        },
        mode:"cors",
        catch:"default"
    })
    // .then(function(response){
    //     console.log(response);
    //     if(response.ok){
    //         return response.json();
    //     }
    //     // else{
    //     //     throw new Error(error);
    //     // }
    // }).then(function(data){
    //     console.log(data);
    //     //query data here
    // }).catch(function(error){
    //     console.log(error);
    // });
};

// amadeusFetch();