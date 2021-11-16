const numbersArr = [67, 90, 100, 37, 60];

const total = numbersArr.reduce(function (accumulator, currentValue) {
  console.log(
    "accumulator is " + accumulator + " current value is " + currentValue
  );
  return accumulator + currentValue;
}, 0);

console.log("total : " + total);
