const gTTS = require('gtts');
const player = require('play-sound')(opts={});

var insuts = ["testing", "you suck", "hurtful words", "loser", "try again", "you smell"];
const insult = insuts[Math.floor(Math.random()*insuts.length)];
console.log(insult);
var gtts = new gTTS(insult, 'en');
gtts.save('Voice.mp3');
setTimeout(function () {player.play('Voice.mp3')}, 300);

