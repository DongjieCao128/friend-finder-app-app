var peopleData = require("../data/friends");
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(peopleData);
  });

  app.post("/api/friends", function(req, res) {

    for(var i=0; i<people[i].length; i++){

    for(var j=0; j< people[i].socres.length; j++){
    total += people.scores[i];
    
      }
    
  }  });

  app.post("/friends/clear", function(req, res) {
    peopleData.length = [];
    res.json({ ok: true });
  });
;