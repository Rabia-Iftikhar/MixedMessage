
let inspirational_quotes = ['What lies behind you and what lies in front of you, pales in comparison to what lies inside of you. --> Ralph Waldo Emerson',
                            "If opportunity doesn't knock, build a door. --> Milton Berle",
                             "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. --> Jimmy Dean"];


let randomNumberGenerator = inspirational_quotes => {
    let randomNumber = Math.floor(Math.random() * inspirational_quotes.length);
    return randomNumber;
}
 
let randomQuoteNumber = randomNumberGenerator(inspirational_quotes);
console.log(inspirational_quotes[randomQuoteNumber]);