function alphabeticalOrder(arr) {
    // Only change code below this line

  return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });

    // Only change code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line

  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });

  // Only change code above this line
}
nonMutatingSort(globalArray);


function splitify(str) {
    // Only change code below this line
  
  return str.split(/\W/);

    // Only change code above this line
  }
  splitify("Hello World,I-am code");



function sentensify(str) {
  // Only change code below this line
  
return str.split(/\W/).join(" ");

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");



// Only change code below this line

function urlSlug(title) {
    return title
      .split(" ")
      .filter(substr => substr !== "")
      .join("-")
      .toLowerCase();
  }
  
  // Only change code above this line



  function checkPositive(arr) {
    // Only change code below this line
  
    return arr.every(function(value) {
      return value > 0;
    });
  
    // Only change code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);



  function checkPositive(arr) {
    // Only change code below this line
  
    return arr.some(elem => elem > 0);
  
    // Only change code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);



  function add(x) {
    // Only change code below this line
  
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
  
    // Only change code above this line
  }
  add(10)(20)(30);