db = db.getSiblingDB('nbd');

printjson(db.people.insert({
		"sex" : "Male",
			"first_name" : "Mateusz",
			"last_name" : "A.",
			"job" : "Developer",
			"email" : "s16852@pjwstk.edu.pl",
			"location" : {
				"city" : "Warsaw",
				"address" : {
					"streetname" : "XYZ",
					"streetnumber" : "123"
				}
			},
			"description" : "lectus suspendisse potenti in eleifend quam a odio in hac",
			"height" : "178",
			"weight" : "68.38",
			"birth_date" : "1998-12-07T00:47:12Z",
			"nationality" : "Poland",
			"credit" : [
				{
					"type" : "jcb",
					"number" : "3538118560561693",
					"currency" : "ARS",
					"balance" : "5080.43"
				}
			]
	})
);
