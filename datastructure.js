import chalk from "chalk";

// Bài tính hiệu 2 đường chéo: Đường chéo chính trừ đường chéo phụ
export function tinhTongDuongCheo(matrix) {
  let tongDuongCheoChinh = 0;
  let tongDuongCheoPhu = 0;

  for (let i = 0; i < matrix.length; i++) {
    tongDuongCheoChinh += matrix[i][i];
    console.log(
      `duong cheo chinh`,
      matrix[i][i]
    ); /**trước là dòng, sau là cột */
    tongDuongCheoPhu +=
      matrix[i][matrix.length - i - 1]; /** ví dụ [0][2] là dòng 1 và cột 3*/
    console.log(`duong cheo phu`, matrix[i][matrix.length - i - 1]);
  }
  return Math.abs(tongDuongCheoChinh - tongDuongCheoPhu);
}
// tinhTongDuongCheo([
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ]);

/**-------------------------------------------------------------------------------------------------------- */

// Tính tổng theo kiểu số rồi chia tổng phần từ của mảng
function tinhtongtheokieuso(params) {
  let demd = 0;
  let dema = 0;
  let dem0 = 0;

  for (let i = 0; i < params.length; i++) {
    if (params[i] > 0) {
      ++demd;
    } else if (params[i] < 0) {
      ++dema;
    } else {
      ++dem0;
    }
  }
  console.log((demd / params.length).toFixed(6));
  console.log((dema / params.length).toFixed(6));
  console.log((dem0 / params.length).toFixed(6));
}
// tinhtongtheokieuso([-4, 3, -9, 0, 4, 1]);

/**-------------------------------------------------------------------------------------------------------- */

// Chuyền 400000 thành dạng   400.000
function chuyensotientheokieuVietNam() {
  const number = 80000000;
  const formattedNumber = number.toLocaleString("vi-VN");
  console.log(formattedNumber); // Output: 400.000
}
// chuyensotientheokieuVietNam();

/**-------------------------------------------------------------------------------------------------------- */

// Thuật toán sắp xếp tử nhỏ đến lớn bằng sắp xếp nổi bọt
function bubbleSortLessToLarge(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Hoán đổi vị trí hai phần tử
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(temp);
      }
    }
    return arr;
  }
}
var array = [5, 3, 8, 2, 1, 4];
// console.log("Mảng trước khi sắp xếp:", array);
// console.log("Mảng sau khi sắp xếp:", bubbleSortLessToLarge(array));

// C2

function bubbleSort(arr) {
  var len = arr.length;
  var swapped;

  do {
    swapped = false;
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Hoán đổi hai phần tử nếu không theo thứ tự mong muốn
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        console.log(temp);
      }
    }
  } while (swapped);

  return arr;
}

// Sử dụng hàm bubbleSort để sắp xếp một mảng
var arrr = [5, 2, 8, 12, 1];
// var sortedArray = bubbleSort(arrr);
// console.log("Mảng đã sắp xếp:", sortedArray);

/**-------------------------------------------------------------------------------------------------------- */
// Thuật toán sắp xếp SelectionSort

function selectionSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      var tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }
  return `Thuật toán sắp xếp SelectionSort [${arr}]`;
}
// console.log(selectionSort([3, 2, 1, 5])); // Thuật toán sắp xếp SelectionSort

/**--------------------------------------------------------------------------------------------------------*/

// sử dụng hàm để sắp xếp một mảng
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return `Thuật toán sắp xếp InsertionSort [${arr}]`;
}

let myArr = [3, 0, 2, 5, -1, 4, 1];
// console.log(insertionSort(myArr));

/**--------------------------------------------------------------------------------------------------------*/
// Thuật toán tìm kiếm 1 phần tử trong mảng

function timKiem(arr, x) {
  // duyệt tất cả phần tử của mảng
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i; // trả lại vị trí của phần tử tìm thấy
    }
  }

  return -1; // trả lại -1 nếu không tìm thấy phần tử
}
const a = [1, 2, 3, 4, 5];
const x = 5;
const viTri = timKiem(a, x);
// console.log(viTri);

/**--------------------------------------------------------------------------------------------------------*/

// Xóa 1 phần tử trong mảng
function deleleElelemt(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      arr.splice(i, 1);
      return arr;
    }
  }
  return `Không tìm thấy phần từ muốn xóa trong mảng`;
}
const b = [1, 2, 3, 4];
const y = 1;
const Position = deleleElelemt(b, y);
// console.log(Position);

/**--------------------------------------------------------------------------------------------------------*/

// Thêm 1 phần từ vào mảng
function themMotphantuvaoMang(arr, value) {
  arr.push(value);
  return arr;
}
const c = [1, 2, 3];
const z = 4;
const ValueWantPush = themMotphantuvaoMang(c, z);
// console.log(ValueWantPush);

/**--------------------------------------------------------------------------------------------------------*/

// Sửa 1 phần từ vào mảng
function SuaMotPhantuTrongMang(arr, firts, end) {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] === firts) {
      arr[i] = end;
      return arr;
    }
  }
  return ` Giá trị bạn muốn thay đổi không có trong mảng`;
}
let myArray = [1, 2, 3, 4, 5];
let firts = 7;
let end = 6;
const EditValue = SuaMotPhantuTrongMang(myArray, firts, end);
// console.log(EditValue);

/**--------------------------------------------------------------------------------------------------------*/

// Tinh tong các phần từ trong mảng bằng reduce
var arr1 = [1, 2, 3, 4, 5];
const tong = arr1.reduce((a, b) => {
  return a + b;
}, 0);
// console.log(tong);
/**--------------------------------------------------------------------------------------------------------*/
//   CLASS TRONG JAVASCRIPT
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak(a, b) {
    console.log(a, b);
  }
}

let cat = new Animal("Tom", 3);
// cat.speak(1, 2); // "Tom says hi!"

/**--------------------------------------------------------------------------------------------------------*/
//FUNCTION CONSTRUCTOR
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person("John", 30);
// console.log(person1);
/**--------------------------------------------------------------------------------------------------------*/
//  SỐ CHÍNH PHƯƠNG

function sochinhphuong(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}
// console.log(sochinhphuong([1, 2, 3, -4, 5, 6]));

/*----------------------------------------------------------------*/

// SỐ NGUYÊN TỐ

function SoNguyenTo(n) {
  if (n < 2) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
// console.log(SoNguyenTo(4));

/*----------------------------------------------------------------*/

//*  ĐẾM SỐ LẪN XUẤT HIỆN CỦA PHẦN TỬ TRONG MẢNG
let arr = [1, 2, 3, 2, 4, 1, 5, 1];
let counts = {};

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1; //counts[num]: là key của object
}

// console.log(counts); // {1: 3, 2: 2, 3: 1, 4: 1, 5: 1}

/*----------------------------------------------------------------*/
// KIỂM TRA DÃY CÓ TĂNG KHÔNG

function DaydonDieu(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
// console.log(DaydonDieu([1, 2, 3, 5]));

/*----------------------------------------------------------------*/

//  TINH TONG CUA DAY MAX VÀ MIN TRONG MANG

//  C1 cua GOODOG
function findMinMax(arr) {
  var arrmax = arr.slice();
  var arrmin = arr.slice();
  let min = arr[0];
  let max = arr[0];
  let indexmin = 0;
  let indexmax = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      indexmin = i;
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
      indexmax = i;
    }
  }

  arrmax.splice(indexmin, 1);
  arrmin.splice(indexmax, 1);
  const tongmax = arrmax.reduce((a, b) => {
    return a + b;
  }, 0);
  const tongmin = arrmin.reduce((a, b) => {
    return a + b;
  }, 0);
  return `${tongmax} ${tongmin}`;
}
// console.log(findMinMax([1, 2, 3, 4, 5]));

//  C2 DE HIEU
function miniMaxSum(arr) {
  const maxValue = Math.max(...arr); /* SPREAD OF ES6*/
  const minValue = Math.min(...arr);
  const maxSumOfArray = arr.reduce((acc, curr) => acc + curr, 0);
  const maxSum = maxSumOfArray - minValue;
  const minSum = maxSumOfArray - maxValue;

  return `${maxSum} ${minSum}`;
}
// console.log(miniMaxSum([1, 2, 3, 4, 5]));

/*----------------------------------------------------------------*/
// CHUỂN ĐỔI THỜI GIAN

function demsophantulonnhat(arr) {
  let valueMax = Math.max(...arr);
  let demMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == valueMax) {
      ++demMax;
    }
  }
  return demMax;
}
// console.log(demsophantulonnhat([1, 2, 3, 4, 5, 5, 5]));
export default timeConversion;
function timeConversion(s) {
  // Write your code here
  let timeArray = s.split(":");
  let timeHours = Number(timeArray[0]);
  let timeCode = timeArray[2].substring(2, 4);
  let timeSecond = timeArray[2].substring(0, 2);
  let timeMinutes = Number(timeArray[1]);

  if (timeCode == "PM") {
    if (timeHours < 12) {
      timeArray[0] = (Number(timeArray[0]) + 12).toString();
    }
  }

  if (timeCode == "AM") {
    if (timeHours == 12) {
      timeArray[0] = "00";
    }
  }

  timeArray[2] = timeSecond;
  return timeArray.join(":");
}
// console.log(timeConversion("12:05:00AM"));

// --------------------------------------------------------
var spread = [1, 2, 3, 4, 5];
function learnSpread(spread, ...rest) {
  console.log(spread); /* 1 */
  console.log(rest); /* [2 3 4 5] */
}
// learnSpread(...spread);

export function sort(array) {
  let len = array.length;
  var temp;
  var swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

// console.log(sort(['Hùng','Như','Minh','Chi','Hiếu']));
// function name() {

//   for (var i = 0; i < 3; i++) {
//     // Vòng lặp bên ngoài
//     console.log("Vòng lặp bên ngoài, i =", i);
//     for (var j = 0; j < 2; j++) {
//       // Vòng lặp bên trong
//       console.log("Vòng lặp bên trong, j =", j);
//     }
//   }
// }
// name()
/*
Vòng lặp bên ngoài, i = 0
Vòng lặp bên trong, j = 0
Vòng lặp bên trong, j = 1
Vòng lặp bên ngoài, i = 1
Vòng lặp bên trong, j = 0
Vòng lặp bên trong, j = 1
Vòng lặp bên ngoài, i = 2
Vòng lặp bên trong, j = 0
Vòng lặp bên trong, j = 1
*/
console.log(
  chalk.yellowBright(
    " ---------------- LÀM VIETTEL SỐNG HÀ NỘI ---------------- "
  )
);

// --------------------------------------------------------------------------
//  CLOSURE IN JAVASCRIPT
function outerFunction() {
  var outerVariable = "Hello";

  function innerFunction() {
    /** */
    console.log(outerVariable);
  }

  return innerFunction;
}

var myClosure = outerFunction(); // Gọi outerFunction và lưu trữ kết quả (một closure) vào biến myClosure
// myClosure(); // Khi gọi myClosure, "Hello" được in ra màn hình

// --------------------------------------------------------------------------
//  CALLBACK IN JAVASCRIPT
function fetchData(callback) {
  // Giả định việc lấy dữ liệu từ API mất thời gian
  setTimeout(function () {
    var data = "Dữ liệu đã được lấy";
    callback(data); // Gọi callback và truyền dữ liệu nhận được là tham số
  }, 2000);
}

function processData(data) {
  console.log("Dữ liệu đã được xử lý: " + data);
}

// fetchData(processData); // Gọi fetchData và truyền hàm processData làm callback

// --------------------------------------------------------------------------
// PROMISE IN JAVASCRIPT

function fetchDataa() {
  return new Promise(function (resolve, reject) {
    // Giả định việc lấy dữ liệu từ API mất thời gian
    setTimeout(function () {
      var data = false;
      if (data) {
        resolve("Lấy dữ liệu thành công"); // Trả về kết quả thành công
      } else {
        reject("Lỗi khi lấy dữ liệu"); // Trả về lỗi nếu có vấn đề xảy ra
      }
    }, 2000);
  });
}

// fetchDataa()
//   .then(function (data) {
//     console.log("Dữ liệu đã được xử lý: " + data);
//   })
//   .catch(function (error) {
//     console.error("Đã xảy ra lỗi: " + error);
//   })
// ----------------------------------------------

// ASYNC/AWAIT
function fetchData3() {
  return new Promise(function (resolve, reject) {
    // Giả định việc lấy dữ liệu từ API mất thời gian
    setTimeout(function () {
      var data = false;
      if (data) {
        resolve(data); // Trả về kết quả thành công
      } else {
        reject("Lỗi khi lấy dữ liệu"); // Trả về lỗi nếu có vấn đề xảy ra
      }
    }, 2000);
  });
}

async function processDataa() {
  try {
    var data = await fetchData3(); // Đợi kết quả của Promise trước khi tiếp tục
    console.log("Dữ liệu đã được xử lý: " + data);
  } catch (error) {
    console.error("Đã xảy ra lỗi: " + error);
  }
}

// processDataa();
