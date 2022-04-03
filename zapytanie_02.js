db = db.getSiblingDB('nbd');

printjson(db.people.findOne({ "sex": "Female", "nationality": "China" }));
