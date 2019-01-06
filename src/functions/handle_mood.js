const dbUrl = process.env.DB_URL;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

function validateValue(moodValue) {
	let acceptableMoodValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
	return moodValue in acceptableMoodValues;
}

function checkInLocalList(userId) {
	let list = []; // load this from localDb
	return userId in list;
}

function saveMoodToDb(moodValue) {
	// Do DB stuff
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