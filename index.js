'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.46c5fbe3-25b1-48fc-af47-e5dfad2a91bf"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Bad Dad Jokes';

/**
 * Array containing dad jokes.
 */
var FACTS = [
    "What time did the man go to the dentist? Tooth hurt-y.",
    "My dad literally told me this one last week: Did you hear about the guy who invented Lifesavers? They say he made a mint.",
    "A ham sandwich walks into a bar and orders a beer. Bartender says, Sorry we dont serve food here.",
    "Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies, No, just leave it in the carton!",
    "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans!",
    "Me: Dad, make me a sandwich! Dad: Poof, Youre a sandwich!",
    "Why did the Clydesdale give the pony a glass of water? Because he was a little horse!",
    "Me: Hey, I was thinking… My dad: I thought I smelled something burning.",
    "How do you make a Kleenex dance? Put a little boogie in it!",
    "Whenever we drive past a graveyard my dad says, Do you know why I cant be buried there? And we all say, Why not? And he says, Because Im not dead yet!",
    "Two peanuts were walking down the street. One was a salted.",
    "I used to have a job at a calendar factory but I got the sack because I took a couple of days off.",
    "How do you make holy water? You boil the hell out of it.",
    "When I went to choir practice — Dad: Dont forget a bucket. Me: Why? Dad: To carry your tune.",
    "Two guys walk into a bar, the third one ducks.",
    "We were getting fast food when the lady at the window said, Any condiments? My dad responded, Compliments? You look very nice today!",
    "A woman is on trial for beating her husband to death with his guitar collection. Judge says, First offender? She says, No, first a Gibson! Then a Fender!",
    "Anytime I do something smart my dad says, Wow, youre a fart smella…I mean smart fella!",
    "I had a dream that I was a muffler last night. I woke up exhausted!",
    "How do you tell the difference between a frog and a horny toad? A frog says, Ribbit, ribbit and a horny toad says, Rub it, rub it.",
    "On all of my medical forms growing up my dad wrote red for my blood type. To this day no one knows my actual blood type.",
    "What is Beethovens favorite fruit? A ba-na-na-na.",
    "My dads name is Phil, and whenever I finish eating and say, Dad, Im full, he always replies, No, Im full; youre Ruby.",
    "5/4 of people admit that they are bad with fractions.",
    "My dad got me with this one: Did you hear the news? FedEx and UPS are merging. Theyre going to go by the name Fed-Up from now on.",
    "A three-legged dog walks into a bar and says to the bartender, Im looking for the man who shot my paw.",
    "Every time someone bends over my dad makes a farting noise. Hes done it for almost 60 years and Im certain he has no intention of slowing down",
    "Whats Forrest Gumps password? 1forrest1",
    "I asked my dad for his best dad joke and he said, You."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetJoke');
    },
    'GetNewDadJokeIntent': function () {
        this.emit('GetJoke');
    },
    'GetJoke': function () {
        // Get a random dad joke from the dad jokes list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomJoke = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Have you heard this one before: " + randomJoke;

        this.emit(':tell', speechOutput, SKILL_NAME, randomJoke)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a dad joke, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};