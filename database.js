var arrs = [1, 1, 1, 4, 5, 1, 1, 1, 1, 7, 1, 8, 1, 9];
const arr = arrs.filter((arr) => {
  return arr !== 9;
});
// console.log(arr);

function remaining(arr, x) {
  var arrRemaining = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== x) {
      arrRemaining.push(arr[i]);
    }
  }
  return arrRemaining;
}
// console.log(remaining([1, 1, 1, 4, 5, 1, 1, 1, 1, 7, 1, 8, 1, 9], 9));

function representation(arr) {
  var temp = arr[0];
  var arrRepresent = [temp];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== temp && arrRepresent.includes(arr[i]) == false) {
      arrRepresent.push(arr[i]);
      arr[i] = temp;
    }
  }
  return arrRepresent;
}
// console.log(representation([1, 1, 1, 4, 5, 1, 4, 7, 7, 8, 1, 9]));
console.log(1);
setTimeout(function () {
  console.log(2);
}, 2000);
console.log(3);
