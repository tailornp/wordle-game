const words = [
  "apple",
  "house",
  "table",
  "chair",
  "plant",
  "water",
  "smile",
  "bread",
  "stone",
  "light",
  "green",
  "happy",
  "sweet",
  "beach",
  "clock",
  "drink",
  "music",
  "sugar",
  "grass",
  "heart",
  "fruit",
  "laugh",
  "floor",
  "sleep",
  "cloud",
  "money",
  "sound",
  "river",
  "train",
];

function getWord() {
  let wordlistLength = words.length;
  let randomIndex = Math.floor(Math.random() * wordlistLength);
  return words[randomIndex];
}
export { getWord };
