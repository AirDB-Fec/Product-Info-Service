const app = require('express');
const crud = require('./../controllers');
const router = app.Router();

// REDIS CONNECTION /////////////////////////////////////////////////

const redis = require('redis');
const client = redis.createClient({ socket_keepalive: true });

client.on("error", function (err) {
    console.log("Error " + err);
});

// ROUTER GET ///////////////////////////////////////////////////////

router.get('/rooms/:id/productinfo', (req, res) => {
  let roomId = req.params.id;

  client.get(roomId, (err, reply) => {
    if (err) {
      res.send(err);
    } else if (reply !== null) {
      res.json(JSON.parse(reply));
    } else {
      crud.getRoom(roomId, (err, room) => {
        if (err) {
          res.send(err);
        } else {
          res.json(room);
          client.set(roomId, JSON.stringify(room), (err) => {
            if (err) { res.send(err); }
          });
        }
      });
    }
  });
});

module.exports = router;