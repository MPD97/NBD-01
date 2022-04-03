db = db.getSiblingDB('nbd');

printjson(db.people.find({ "sex": "Male", "nationality": "Germany" }).toArray());
