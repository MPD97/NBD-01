db = db.getSiblingDB('nbd');

 
printjson(db.people.updateMany
	(
		{
			"job" : "Editor"
		},
		{
			"$unset": 
			{
				"email" : 1
			}
		}
	)
);
