window.Inventory = {
  allSizes: (function(small, large) {
    var sizes = [];
    for (var i = small; i <= large; i++) {
      sizes.push(i);
      //sizes.push(i + 1.0);
    }

    return sizes;
  })(40, 46),

  allColors: ['red', 'blue', 'green', 'purple', 'brown'],

  bySize: {
    "40": [
      "red", "blue"
    ],
    "41":  [
      "red", "blue"
    ],
    "42":  [
      "red", "brown", "green", "purple", "blue"
    ],
    "43":  [
      "red", "blue"
    ],
    "44":  [
      "brown", "green", "purple"
    ],
    "45":  [
      "brown", "green", "purple"
    ],
    "46":  [
      "brown", "green", "purple"
    ]
  },

  byColor: {
    "red" : ["40", "41", "42", "43"],
    "blue" : ["40", "41", "42", "43"],
    "brown" : ["42", "44", "45", "46"],
    "purple" : ["43", "44", "45", "46" ,"42"],
    "green" : ["42", "43", "44", "45", "46"]
  }
};
