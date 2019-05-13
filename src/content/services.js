/* eslint-disable max-len */

const farmService = {
  key: "farm-service",
  image: {
    source: "images/services/services1.jpg",
    altText: "Farm service"
  },
  linkPath: "farm",
  title: "Farm to Table",
  text:
    "Our chickens and pigs are pasture-raised, which means they are allowed to roam the fields, eating the insects and plants they would naturally eat. Happy animals means meat and eggs with higher Omega-3s and Vitamins A, B<sub>6</sub>, B<sub>12</sub>, D, and E."
};

const lawnService = {
  key: "lawn-service",
  image: {
    source: "images/services/services2.jpg",
    altText: "Lawn service"
  },
  linkPath: "lawn",
  title: "Lawn Services",
  text:
    "We see lawn care as weekly maintenance, not as a bi-weekly chore. Our weekly schedule will keep your yard in tip top shape, and you will be getting the most &quot;Bang for your buck&quot; compared to other competitors."
};

const services = [farmService, lawnService];

export default services;
