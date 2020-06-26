const sketch = require("sketch");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

export default function () {
  const document = sketch.getSelectedDocument();

  const page = document.selectedPage;

  const lorem = new LoremIpsum({
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  const layer = new sketch.Text({
    parent: page,
    alignment: sketch.Text.Alignment.center,
    text: lorem.generateWords(5),
  });

  layer.adjustToFit();

  document.centerOnLayer(layer);
}
