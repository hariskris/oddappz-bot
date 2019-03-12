const mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var debug = require('debug')('botkit:webserver');
var Botkit = require('botkit'),
mongoStorage = require("botkit-storage-mongo")({
    mongoUri: "mongodb://localhost:27017/kris",
    tables: ["bot"]
  });
  controller = Botkit.slackbot({
    storage: mongoStorage
  });
  


module.exports = function (controller) {


    var webserver = express();
    webserver.use(bodyParser.json());
    webserver.use(bodyParser.urlencoded({ extended: true }));

    webserver.use(express.static('public'));

    webserver.listen(process.env.PORT,process.env.hostname, () => {
        mongoose.connect(mongoStorage.mongoUri, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    });
    controller = Botkit.slackbot({
        storage: mongoStorage
      });



    // import all the pre-defined routes that are present in /components/routes
    var normalizedPath = require("path").join(__dirname, "routes");
    require("fs").readdirSync(normalizedPath).forEach(function (file) {
        require("./routes/" + file)(webserver, controller);
    });

    controller.webserver = webserver;

    return webserver;

}
