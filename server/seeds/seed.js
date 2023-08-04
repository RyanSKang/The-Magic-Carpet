const db = require('../config/connection');
const { User, Flights, Itinerary } = require('../models');

const userData = require('./userData.json');
const flightsData = require('./flightsData.json');
const itineraryData = require('./itineraryData.json');

db.once('open', async () => {
    await User.deleteMany({});

    const users = await User.insertMany(userData);

    console.log('Users seeded');
    process.exit(0);
});

db.once('open', async () => {
    await Flights.deleteMany({});

    const flights = await Flights.insertMany(flightsData);

    console.log('Flights seeded');
    process.exit(0);
});

db.once('open', async () => {
    await Itinerary.deleteMany({});

    const itinerary = Itinerary.insertMany(itineraryData);

    console.log('Itinerary seeded');
    process.exit(0);
})