import {
  GameController,
  bambooIcon,
  bardAboveIcon,
  basketBallIcon,
  bikeParkingIcon,
  carChangerIcon,
  ceilingIcon,
  dogCollarIcon,
  dumbbellIcon,
  elvatorIcon,
  fireplaeIcon,
  gargeIcon,
  gasStationIcon,
  indoorParkingIcon,
  kitchenIcon,
  livingRoomIcon,
  lockerIcon,
  meetingRoomIcon,
  newYorkIcon,
  noParkingIcon,
  pavillionIcon,
  petIcon,
  roofingIcon,
  rowOfSeatsIcon,
  sunloungerIcon,
  swimmingIcon, 
  tennisCourtIcon,
  tumbleDryerIcon,
  valetParkingIcon,
  weberIcon,
} from ".";

export const questionsForCommunity = [
  {
    text: " What are your outdoor Amenities?",
    questions: {
      text: ["Swimming Pool", "BBQ Grill", "Fireside Seating", "Community Garden"],

      icons: [swimmingIcon, weberIcon, rowOfSeatsIcon, bambooIcon],
    },
  },
  {
    text: "How do you stay healthy in your habitat!",
    questions: {
      text: ["Gym/Fitness Center", "Basketball Court", "Tennis Court"],

      icons: [dumbbellIcon,basketBallIcon,tennisCourtIcon]
    },
  },
  {
    text: "How would you like to click with your Community?",
    questions: {
      text: [
        "Rooftop Lounge",
        "Club house/Resident Lounge",
        "Business room/Conference room",
        "Game Room",
        "Coffee Bar",
      ],

      icons: [sunloungerIcon, livingRoomIcon, meetingRoomIcon, GameController, pavillionIcon],
    },
  },
  {
    text: "Expecting any building extras?",
    questions: {
      text: ["EV Charger", "Skyline Views", "Package Lockers", "Elevators"],

      icons: [carChangerIcon, newYorkIcon, lockerIcon, elvatorIcon],
    },
  },
];

export const questionsForPlace = [
  {
    text: " Pick your pet Preferences! ",
    questions: {
      text: ["Allows  Pets", "Dog Park", "Downwash Station"],

      icons: [bardAboveIcon, dogCollarIcon, gasStationIcon],
    },
  },
  {
    text: " Parking preferences? Select your Spots! ",
    questions: {
      text: ['Parking Avaliable','Covered Parking','Garage Parking','Bike Parking','Parking Not Important'],

      icons: [valetParkingIcon, indoorParkingIcon, gargeIcon, bikeParkingIcon, noParkingIcon],
    },
  },
  {
    text: " What do you like in your living space ",
    questions: {
      text: ["Fire Place", "High Celings", "Ceiling Fans"],

      icons: [fireplaeIcon, roofingIcon, ceilingIcon],
    },
  },
  {
    text: " Dream Kitchen?",
    questions: {
      text: ["Granite Counter Tops", "Island Kitchen", "Stainless steel Appliences",'Washer Dryer'],

      icons: [bardAboveIcon, petIcon, kitchenIcon, tumbleDryerIcon],
    },
  },
];
