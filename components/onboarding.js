var debug = require('debug')('botkit:onboarding');

module.exports = function (controller) {

    controller.on('onboard', function (bot) {

        debug('Starting an onboarding experience!');

        bot.startPublicConversation({user: bot.config.createdBy}, function (err, convo) {
            if (err) {
                console.log(err);
            } else {
                convo.say('hi welcome to  bot!');
            }
        });
    });

}


