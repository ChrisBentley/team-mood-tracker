const dbUrl = process.env.DB_URL;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const moment = require('moment');
var MongoClient = require('mongodb').MongoClient;

function validateValue(moodValue) {
	let acceptableMoodValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
	return acceptableMoodValues.indexOf(moodValue) > -1;
}

function checkInLocalList(userId) {
	let list = []; // load this from localDb
	return list.indexOf(userId) > -1;
}

// function createCollection() {
// 	MongoClient.connect(dbUrl, function(err, db) {
// 		if (err) throw err;
// 		var dbo = db.db("moodsdb");

// 		if (!dbo.collection.getCollection('moods').exists()) {
// 			db.collection.createCollection("moods", function(err, res) {
// 				if (err) {
// 					throw err
// 				} else {
// 					console.log("'moods' collection created");
// 				}
// 				db.close();
// 			});
// 		}
// 	});
// }

function saveMoodToDb(moodValue) {
	let today = moment().format('DD/MM/YYYY');
	let key = {'day':today};
	let data = {$inc: {[moodValue]:1}};

	MongoClient.connect(dbUrl, function(err, db) {
		if (err) throw err;
		var dbo = db.db('moodsdb');

	 	dbo.collection('moods').updateOne(
			key,
			data,
			{upsert: true, safe: false},
			function(err,data) {
				if (err) {
					console.log(err);
				} else {
					console.log("Db update succeded");
				}
			}
		);

		db.close();
	});
}

function saveUserIdToLocalList(userId) {
	// Do list of stuff locally
}

async function main(moodValue, userId) {
	if (!validateValue(moodValue)) {
		return 'Sorry that mood value isn\'t valid, please return a value between 1 and 10';
	}

	if (checkInLocalList(userId)) {
		return 'You\'ve already submitted your mood for the day, try again tomorrow!';
	}

	saveMoodToDb(moodValue);
	saveUserIdToLocalList(userId);

	return 'Your mood has been successfully recorded, thank you!';
}

module.exports = main;