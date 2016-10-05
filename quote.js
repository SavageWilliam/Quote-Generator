var quotes = [
  ["What we think, we become.", "Buddha"],
  ["A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.", "Sir Winston Churchill"],
  ["Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.", "Albert Einstein"],
  ["If I have seen further it is by standing on the shoulders of Giants.", "Isaac Newton"],
  ["Freedom is secured not by the fulfilling of one's desires, but by the removal of desire", "Epictetus"]

];

var colours = [
   ["#2ecc71", "#27ae62"],
   ["#1abc9c", "#16a085"],
   ["#e74c3c", "#c0392b"],
   ["#9b59b6", "#8e44ad"],
   ["#66cc66", "#17ad49"],
   ["#2A7E64", "#267359"],
   ["#4F82C4", "#6289CB"]
];




function randNum(y){
    return Math.floor(Math.random() * y.length);
}
var curCol = 0;
function randomBaseColour() {
  var ranNum = randNum(colours);
  if(ranNum===curCol){
    return randomBaseColour();
  }
  else {
    curCol=ranNum;
    return colours[ranNum];
  }
}

var curQuo = 0;
function randomQuote() {
  var ranNum = randNum(quotes)
  if(ranNum===curQuo) {
    return randomQuote();
  }
  else {
    curQuo = ranNum;
    return quotes[ranNum];
  }
}

var quoteBubble = document.getElementById("quoteBubble");

var quoteText = document.getElementById('quoteText');

var authorText =
document.getElementById('authorBubble');

var newQuote =
document.getElementById('quoteBubble');



newQuote.onclick = function() {
  var ranCol = randomBaseColour();
  var backgroundCol=
  quoteBubble.style.backgroundColor=ranCol[0];
  var authCol=
  authorText.style.backgroundColor = ranCol[1];

  var ranText = randomQuote();
  quoteText.innerHTML = ranText[0];
  authorText.innerHTML= ranText[1];
}
