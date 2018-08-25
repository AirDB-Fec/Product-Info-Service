// DB CONNECTION ////////////////////////////////////////////////////

const { pool } = require("../models");

// GET METHOD WITH REDIS IMPLEMENTATION /////////////////////////////

const getRoom = (roomId, callback) => {
  const query = {
    name: 'fetch-room',
    text: `SELECT page_info.*, ARRAY_TO_STRING((SELECT ARRAY_AGG('{\"amenityType\":\"' || amenity_type ||'\",\"name\":\"'|| name ||'\",\"icon\":\"'|| COALESCE(icon, '0')  ||'\",\"explanation\":\"'|| COALESCE(explanation, '0') || '\"}') FROM amenities WHERE page_info.room_id = amenities.room_id), ',') AS amenities FROM page_info WHERE page_info.room_id = $1;`,
    values: [roomId],
  }

  pool.query(query, (err, room) => {
    if (err) {
      callback(err);
    } else {
      callback(null, room);
    }
  });
};

module.exports = { getRoom };
