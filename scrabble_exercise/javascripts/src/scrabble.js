var SCORES = {
  'AEIOULNRST': 1,
  'DG': 2, 'BCMP': 3,
  'FHVWY': 4, 'K': 5,
  'JX': 8, 'QZ': 10
};

function score(letter) {
  var result;

  Object.keys(SCORES).forEach(function(key) {
    if (key.includes(letter.toUpperCase())) {
      result = key;
    }
  });

  return SCORES[result] || 0;
}

function Scrabble(word) {
  var total = 0;

  if (!word) {
    return total;
  }

  word.split('').forEach(function(letter) {
    total += score(letter);
  });

  return total;
}
