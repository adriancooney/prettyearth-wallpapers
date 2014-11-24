var async = require("async"),
	request = require("request"),
	util = require("util"),
	path = require("path"),
	fs = require("fs"),
	ids = require("./data/imageIds.json").ids;

const OUTPUT_FOLDER = process.env.OUTPUT_FOLDER || "SET_ME";
const URL = "https://www.gstatic.com/prettyearth/%d.json";

// Make sure an output folder is set.
if(OUTPUT_FOLDER == "SET_ME") throw new Error("You numpty! You need to set OUTPUT_FOLDER in index.js.");

// Loop over each ID
async.each(ids, function(id, callback) {
	id = parseInt(id);

	request({
		url: util.format(URL, id),
		json: true,
	}, function(err, res, body) {
		if(err) callback(err);
		else {
			// Write the picture to a folder
			fs.writeFile(path.join(OUTPUT_FOLDER, id + ".jpg"), new Buffer(body.dataUri.substr(23), "base64"), function(err) {
				if(err) callback(err);
				else {
					console.log("%d successfully downloaded.", id);
					callback();
				}
			});
		}
	});
}, function(err) {
	if(err) console.log(err);
	else console.log("Congratulations, you own the earth. Download complete to %s.", OUTPUT_FOLDER);
});