// BÀI TẬP LEETCODE

import chalk from "chalk";

/**---------------------------------------------------------------------- */
console.log(
  chalk.yellowBright(
    "------------------ Hãy nói theo cách của bạn !----------------------"
  )
);

// TWOSUM

var twoSum = function (nums, target) {
  var temp;
  for (let i = 1; i < nums.length; i++) {
    temp = nums[i - 1];
    console.log(temp);
    for (var j = i; j < nums.length; j++) {
      if (temp + nums[j] != target) {
        console.log(`Chưa tìm được giá trị cần tìm với`, i - 1, j);
      } else {
        return [i - 1, j];
      }
    }
  }
};
// console.log(twoSum([0,1,2,3],3))

/**------------------------------------------------------------------- */
// KIEM TRA CÓ CÙNG DẤU NGOẶC KHÔNG
function kiemTraDauNgoac(bieuThuc) {
  const stack = []; // Khởi tạo ngăn xếp
  for (let i = 0; i < bieuThuc.length; i++) {
    const dau = bieuThuc[i];
    if (dau === "(") {
      stack.push("("); // Đẩy dấu ngoặc mở vào ngăn xếp
    } else if (dau === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        return false; // Nếu không có dấu ngoặc mở hoặc không khớp, trả về false
      }
    }
  }

  return stack.length === 0; // Trả về true nếu tất cả dấu ngoặc đều khớp
}

const bieuThuc1 = "([)]";
// console.log(kiemTraDauNgoac(bieuThuc1));  // Kết quả: true
/**------------------------------------------------------------------ */
// MERGE 2 MẢNG
var mergeTwoLists = function (list1, list2) {
  let List3 = [...list1, ...list2];
  let swapped;
  let temp;
  do {
    swapped = false;
    for (let i = 0; i < List3.length - 1; i++) {
      if (List3[i] > List3[i + 1]) {
        temp = List3[i];
        List3[i] = List3[i + 1];
        List3[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return List3;
};
// console.log(mergeTwoLists([],[0]));
/**------------------------------------------------------------------------------ */
// maxProfit
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const currentProfit = currentPrice - minPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }
  return maxProfit;
};
// console.log(maxProfit([7, 1, 3, 6, 4]));
const arr = [3, 7, 8, 9, 2, 3, 7, 9, 5];
function linear_Search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}
console.log(linear_Search(arr, 7));
