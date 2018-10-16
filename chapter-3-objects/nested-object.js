var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
  }
};

// Retrieval 

flight.departure.IATA // "SYD"


// retrieving from undefined will throw TypeError exception
// guard with the && operator
flight.equipment
flight.equipment.model  // throw "TypeError"
flight.equipment && flight.equipment.model // undefined
