export function amadeiusFetch(searchInput){
    const token = "POWOQFehbAYXV77IMAlDbTczPSiD"
    // let url = "test.api.amadeus.com/v2/shopping/flight-offers";
    return fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=${searchInput}&departureDate=2023-11-01&adults=1&max=2`, {
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