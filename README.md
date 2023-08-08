# The-Magic-Carpet
This application utilizes React on the front end, along with MongoDB Database, and Node.js/Express.js server and API. We are using a GraphQL API built with Apollo server to retrieve our data. The main goal of this application is to provide data bookings for our Users, so that they can see the world in a new perspective as a fellow traveler. 

## User Story
```
AS A traveler
I WANT to search for flights, hotel packages, and tourist attractions
SO THAT I can plan my trip accordingly
```

## Table of Contents:
- [Overview](#Overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions) 
- [Usage Screenshots](#screenshots)
- [Credits](#credits)  

# Overview

## Acceptance Criteria
```md
GIVEN a flight booking platform that uses React for the front end, GraphQl with a Node.js and Express.js Server, and MongoDB and Mongoose ODM for the database
WHEN I enter the application via Heroku
THEN I am presented with a reactive home page displaying the navbar and a search engine
WHEN I click the Login/Sign up button
THEN I will be redirected to page to input my credentials to create an account
WHEN I am successfully logged in
THEN I am able to navigate through the website and use the search engine
WHEN I input data for flight bookings in the search engine
THEN the data will fetch the API and display results of various flight options on a different page
WHEN I choose a specific flight 
THEN I am presented with a payment confirmation
WHEN I confirm payment on the flight
THEN I am able to see My trips of confirmed flights when I click on "My Trips" in the Navbar
WHEN I log out of my account 
THEN I won't be able to see any confirmed trips unless I log back in
```

## Installation
Git clone Repository: [NoSQL-API](https://github.com/RyanSKang/NoSQL-API)  
Following Installation Needed:   
    -Express [v4.17.1](https://www.npmjs.com/package/express/v/4.17.1)  
    -Concurrently [v5.3.0](https://www.npmjs.com/package/concurrently/v/5.3.0)  
    -Bootstrap [v5.3.1](https://www.npmjs.com/package/bootstrap/v/5.3.1)   
    -React [v18.2.0](https://www.npmjs.com/package/react)    
    -React-Bootstrap [v2.8.0](https://www.npmjs.com/package/react-bootstrap)    
    -GraphQl [v16.3.0](https://www.npmjs.com/package/graphql/v/16.3.0)    
    -Mongoose [v6.1.8](https://www.npmjs.com/package/mongoose/v/6.1.8)     
    -Node [v20.5.0](https://www.npmjs.com/package/node)   
    -Dayjs [v1.11.9](https://www.npmjs.com/package/dayjs)    
    -JSON webtoken [v9.0.1](https://www.npmjs.com/package/jsonwebtoken)     
    -Apollo-server-expresss [v3.6.2](https://www.npmjs.com/package/apollo-server-express)  
    -RSUITE [v5.35.1](https://www.npmjs.com/package/rsuite/v/5.35.1)
   

## Usage Instructions
1. Open application via Heroku Link provided  
2. Login | Sign up to access account  
3. Navigate the platform by inputting data in search engine and confirming desired flights  
4. Check confirmed flights are being saved under 'My Trips' navlink  
5. Log out  
6. Double check that 'My Trips' can not be accessed without having an account  
7. You can access this project via Heroku:  
    -<a href='https://the-magic-carpet-037d75dd3e3d.herokuapp.com/'>Heroku Application</a>
  

## Screenshots

### Figure 1. Home Page


### Figure 2. Login | Sign Up


### Figure 3. Search Results


### Figure 4. Payment Confirmation


### Figure 5. My Trips


## Credits
-DU-Virt-FSF-PT-02-2023-U-LOLC | State 28-Stu_Mini-Project  
-DU-Virt-FSF-PT-02-2023-U-LOLC | React 28-Stu_Mini-Project  
-Ryan Kang  
-Jason Kodama  
-John Baldwin  
-Yaney Alvarado
