var Bob = function() {};

Bob.prototype.hey = function(what) {
  if (what === what.toUpperCase() && what.match(/[A-Z]/)) {
    return 'Woah, chill out!'
  }else if (what.trim().length === 0) {
    return 'Fine. Be that way!'
  } else if (what.indexOf('?') === what.length - 1) {
    return 'Sure.'
  } else {
    return 'Whatever.'
  }

};

module.exports = Bob;


var foo = {
  bar: function{} {
    return 'bar';
  }
}

foo.bar()
