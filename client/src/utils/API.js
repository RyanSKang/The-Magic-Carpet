//import ProxyAgent from 'https-proxy-agent';
    import Stripe from 'stripe';

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
    const token = "dUwxQSyzhGt8pzDSUAYH7KhzMbBn"
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

export function makePayment(){
    console.log('sanity');

    const stripe = Stripe('sk_test_51NctyCFyWidVklAJsbKkyguBJRUcrXAMl48VmsuTplpPdXQOxr1bfczyiKczGwZVvOjDXmAG1IZrsR9MAASIzUdA004gpBaQCa', {
      //httpAgent: new ProxyAgent(process.env.http_proxy),
    });
    
    // Create a new customer and then create an invoice item then invoice it:
    return stripe.customers
      .create({
        email: 'drspinaltap@gmail.com',
      })
      .then((customer) => {
        // have access to the customer object
        return stripe.invoiceItems
          .create({
            customer: customer.id, // set the customer id
            amount: 2500, // 25
            currency: 'usd',
            description: 'One-time setup fee',
          })
          .then((invoiceItem) => {
            return stripe.invoices.create({
              //collection_method: 'send_invoice',
              due_date: (new Date().setDate(new Date().getDate() + 1).getTime())/1000,
              customer: invoiceItem.customer,
            });
          })
          .then((invoice) => {
            console.log(invoice);
          })
          .catch((err) => {
            // Deal with an error
          });
      });
};