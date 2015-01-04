
function words(sentence) {
  var a = sentence.split(/\s/);
  var result = {};
  for(var i=0; i < a.length; i++) {
    var word = a[i];
    result[word] = count(a, word);
  }
  return result;
}

function count(array, word) {
  var m = 0;
  for(var i=0; i < array.length; i++) {
    var item = array[i];
    if (item === word) {
      m++;
    }
  }
  return m;
}

module.exports = words;
