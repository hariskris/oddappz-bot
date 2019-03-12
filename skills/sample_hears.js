module.exports = function (controller) {

    // controller.on(['welcome'], 'direct_message,direct_mention', function(bot, message) {

    //     bot.reply(message,'Welcome to the channel!');
      
    //   });

    // controller.hears(['^hi$'], 'direct_message,direct_mention', function (bot, message) {
    //     bot.reply(message, "Hi there, you're on workspace: ")
    // });

    // controller.hears(['hi'], ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    //     bot.reply(message, "Hello! Welcome to oddappz search for restaurants,order and eat great food");
    //     bot.reply(message, "which city you are from?");
    // });

    controller.hears(['hi', 'hello'], ['ambient', 'direct_message'], function (bot, message) {
        bot.startConversation(message, greeting);
    });
    greeting = function (response, convo) {
        convo.say("Hello!");
            convo.say("Welcome to Oddappz search for restaurants,order and eat Great food.");
            convo.ask("Which city you are from?", function (response, convo) {
                convo.say("awesome");
            askcity(response, convo);
            convo.next();
        });
    }
    askcity = function (response, convo) {
        convo.ask("Which part of the city?", function (response, convo) {
            convo.say("Awesome.");
            askmenus(response, convo);
            convo.next();
        });
    }
    askmenus = function (response, convo) {
        convo.ask("What type of restaurants you are looking for?", function (response, convo) {
            convo.say("Ok.")
            askWhereDeliver(response, convo);
            convo.next();
        });
    }
    askWhereDeliver = function (response, convo) {
        convo.ask("Please tell me your address?", function (response, convo) {
            convo.say("ok thank you your order will deliver soon.")
            convo.next();
        });
    }
};