db = db.getSiblingDB('nbd');

printjson(db.people.find({ "weight": {"$gt": "68.0", "$lt": "71.5"} }).toArray());
