const express = require("express");
const router = express.Router();
const unirest = require("unirest");
const test = require("../../");
const mockData = require("../../");
import ProxyAgent from 'https-proxy-agent';
    import Stripe from 'stripe';

router.get("/payment", (req, res, next) => {
	
console.log('sanity');

	const errors = {};

    const stripe = Stripe('sk_test_51NctyCFyWidVklAJsbKkyguBJRUcrXAMl48VmsuTplpPdXQOxr1bfczyiKczGwZVvOjDXmAG1IZrsR9MAASIzUdA004gpBaQCa', {
      httpAgent: new ProxyAgent(process.env.http_proxy),
    });
    
    // Create a new customer and then create an invoice item then invoice it:
    stripe.customers
      .create({
        email: 'customer@example.com',
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
              collection_method: 'send_invoice',
              customer: invoiceItem.customer,
            });
          })
          .then((invoice) => {
            // New invoice created on a new customer
          })
          .catch((err) => {
            // Deal with an error
          });
      });
	

	if (!Object.keys(errors).length) {
		res.status(200).json(mockData(info));
	} else {
		res.send(errors);
	}
});

module.exports = router;
