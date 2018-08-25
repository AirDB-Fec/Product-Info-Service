const faker = require('faker');

const AMENITY_DATA = [
  { amenityType: 'Basic', name: 'Air conditioning', icon: '', explanation: '' },
  {
    amenityType: 'Basic',
    name: 'Private entrance',
    icon: '',
    explanation: 'Separate street or building entrance'
  },

  {
    amenityType: 'Basic',
    name: 'Heating',
    icon: '',
    explanation: 'Central heating or a heater in the listing'
  },

  { amenityType: 'Dining', name: 'Breakfast', icon: '', explanation: '' },

  {
    amenityType: 'Bed and bath',
    name: 'Hair dryer',
    icon: '',
    explanation: ''
  },
  { amenityType: 'Bed and bath', name: 'Shampoo', icon: '', explanation: '' },
  { amenityType: 'Bed and bath', name: 'Hangers', icon: '', explanation: '' },
  {
    amenityType: 'Bed and bath',
    name: 'Bed linens',
    icon: '',
    explanation: ''
  },
  { amenityType: 'Bed and bath', name: 'Washer', icon: '', explanation: '' },
  {
    amenityType: 'Safety features',
    name: 'Smoke detector',
    icon: '',
    explanation: ''
  },
  {
    amenityType: 'Safety features',
    name: 'Carbon monoxide detector',
    icon: '',
    explanation: ''
  }
];

const defaultAmenities = [
  { amenityType: 'Basic', name: 'Wifi', icon: 'fa fa-wifi', explanation: '' },
  {
    amenityType: 'Basic',
    name: 'TV',
    icon: 'fa fa-television',
    explanation: ''
  },
  {
    amenityType: 'Basic',
    name: 'Hot water',
    icon: 'fa fa-shower',
    explanation: ''
  },
  {
    amenityType: 'Dining',
    name: 'Kitchen',
    icon: 'fa fa-cutlery',
    explanation: 'Space where guests can cook their own meals'
  },
  {
    amenityType: 'Facilities',
    name: 'Free parking on premises',
    icon: 'fa fa-car',
    explanation: ''
  },
  {
    amenityType: 'Basic',
    name: 'Laptop friendly workspace',
    icon: 'fa fa-laptop',
    explanation:
      'A table or desk with space for a laptop and a chair that’s comfortable to work in'
  }
];

const populateRandomAmenities = num => {
  let newAmenity = defaultAmenities.slice();
  let allAmenities = AMENITY_DATA.slice();
  for (let i = 0; i < num; i++) {
    let index = Math.floor(Math.random() * 6);
    newAmenity.push(allAmenities[index]);
    allAmenities.splice(index, 1);
  }
  return newAmenity;
};

// var num = 1 + (0 * 500000); //D
// var num = 1 + (1 * 500000); //D
// var num = 1 + (2 * 500000); //D
// var num = 1 + (3 * 500000); //D
// var num = 1 + (4 * 500000); //D
// var num = 1 + (5 * 500000); //D
// var num = 1 + (6 * 500000); //D
// var num = 1 + (7 * 500000); //D
// var num = 1 + (8 * 500000); //D
// var num = 1 + (9 * 500000); //D
// var num = 1 + (10 * 500000); //D
// var num = 1 + (11 * 500000); //D
// var num = 1 + (12 * 500000); //D
// var num = 1 + (13 * 500000); //D
// var num = 1 + (14 * 500000); //D
// var num = 1 + (15 * 500000); //D
// var num = 1 + (16 * 500000); //D
// var num = 1 + (17 * 500000); //D
// var num = 1 + (18 * 500000); //D
var num = 1 + (19 * 500000); //


const generateAmenityCSV = function() {
  for(var i = num; i < num + 50000; i++) {
    var amenityArray = populateRandomAmenities(faker.random.number({ min: 2, max: 6 }));
    amenityArray.forEach(amenity => {
      console.log(`${i},${amenity.amenityType},${amenity.name},${amenity.icon},${amenity.explanation}`);
    });
  }
  num = i;
};

for(var i = 0; i < 10; i++) {
  setTimeout(generateAmenityCSV, 0);
}


