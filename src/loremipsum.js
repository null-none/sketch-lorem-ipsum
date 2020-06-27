const sketch = require("sketch");

const words = [
  "The sky",
  "above",
  "the port",
  "was",
  "the color of television",
  "tuned",
  "to",
  "a dead channel",
  ".",
  "All",
  "this happened",
  "more or less",
  ".",
  "I",
  "had",
  "the story",
  "bit by bit",
  "from various people",
  "and",
  "as generally",
  "happens",
  "in such cases",
  "each time",
  "it",
  "was",
  "a different story",
  ".",
  "It",
  "was",
  "a pleasure",
  "to",
  "burn",
];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function addSentences(layer, fragments) {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;
  shuffle(words);
  var sentence = words.join(" ");
  var layer = new sketch.Text({
    parent: page,
    alignment: sketch.Text.Alignment.center,
    text: sentence,
  });
  layer.adjustToFit();
  document.centerOnLayer(layer);
}


function addWords(layer, fragments) {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;
  shuffle(words);
  var layer = new sketch.Text({
    parent: page,
    alignment: sketch.Text.Alignment.center,
    text: words
  });
  layer.adjustToFit();
  document.centerOnLayer(layer);
}