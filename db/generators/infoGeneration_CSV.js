const faker = require('faker');
const roomName = require('./JSONfiles/roomsNames_10M.json');

const BED_TYPE = ['single', 'queen', 'double', 'king'];
const PROPERTY_TYPE = [
  'Apartment',
  'Castle',
  'Cabin',
  'Apartment',
  'Entire Home',
  'Private Room',
  'Shared Space',
  'Mill',
  'Dome House'
];

const random_2to4 = () => {return faker.random.number({ min: 2, max: 4 });}
const random_2to8 = () => {return faker.random.number({ min: 2, max: 8 });}
const random_4to8 = () => {return faker.random.number({ min: 4, max: 8 });}

const createRoom = () => {
  const dataItem = {};
  dataItem.city = faker.address.city();
  dataItem.type = PROPERTY_TYPE[Math.floor(Math.random() * 9)];
  dataItem.title = faker.lorem.words(random_4to8());
  dataItem.max_guest = random_2to8();
  dataItem.subtype = random_2to8();
  dataItem.beds = random_2to8();
  dataItem.baths = faker.random.number({ min: 1, max: 4 });
  dataItem.host_username = faker.name.findName();
  dataItem.avatar = `https://s3.amazonaws.com/docfaces96x96/img/${faker.random.number({ min: 1, max: 31 })}.jpg`;
  dataItem.short_description = faker.lorem.sentences(random_2to4());
  dataItem.main_description = faker.lorem.sentences(faker.random.number({ min: 4, max: 10 }));
  dataItem.house_rules_description = faker.lorem.sentences(random_4to8());
  dataItem.sleeping_arrangements = [];

  dataItem.highlights = [
    faker.lorem.words(random_2to4()),
    faker.lorem.sentences(random_4to8())
  ];

  dataItem.house_rules = [];
  for (let j = 0; j < random_2to8(); j++) {
    dataItem.house_rules.push(faker.lorem.words(random_2to4()));
  }

  dataItem.cancellations = [];
  for (let j = 0; j < random_4to8(); j++) {
    dataItem.cancellations.push(
      faker.lorem.words(faker.random.number({ min: 6, max: 10 }))
    );
  }

  for (let x = 0; x < dataItem.beds; x++) {
    let bedDetails = '';
    const noOfBed = faker.random.number({ min: 1, max: 2 });
    const typeOfBEd = BED_TYPE[Math.floor(Math.random() * 4)];
    if (noOfBed === 1) {
      bedDetails = `${noOfBed} ${typeOfBEd} ` + 'bed';
    } else {
      bedDetails = `${noOfBed} ${typeOfBEd} ` + 'beds';
    }
    dataItem.sleeping_arrangements.push(bedDetails);
  }

  return dataItem;
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
// var num = 1 + (19 * 500000); //

const generateInfoCSV = function() {
  for(var i = num; i < num + 50000; i++) {
    let room = createRoom();
    console.log(`${i},${roomName[i - 1]},${room.city},${room.type},${room.title},${room.max_guest},${room.subtype},${room.beds},${room.baths},${room.host_username},${room.avatar},${
      room.short_description},${room.main_description},${JSON.stringify(room.house_rules).replace(/,/g ,"*")},${room.house_rules_description},${JSON.stringify(roo
        m.cancellations).replace(/,/g ,"*")},${JSON.stringify(room.sleeping_arrangements).}`);
  }
  num = i;
};

for(var i = 0; i < 10; i++) {
  setTimeout(generateInfoCSV, 0);
}
