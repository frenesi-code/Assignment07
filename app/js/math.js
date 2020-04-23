//STEP 1

function Step1() {
  let number = prompt("Enter a negative or positive number:");
  console.log(Math.abs(number));
}

Step1();

//STEP 2

function Step2() {
  let number = prompt("Enter a number with a decimal:");
  console.log(Math.ceil(number));
}

Step2();

//STEP 3

function Step3() {
  let number = prompt("Enter a number with a decimal:");
  console.log(Math.floor(number));
}

Step3();

//STEP 4

function Step4() {
  let number = prompt(
    "Choose 5 numbers, separated by commas (ex: 1, 2, 3, 4, 5):"
  );
  let numberSplit = number.split(",");
  let arr = Array.from(numberSplit);
  console.log(arr);
  console.log(
    "The largest number is " +
      Math.max.apply(null, arr) +
      " and the smallest number is " +
      Math.min.apply(null, arr)
  );
}

Step4();

//STEP 5

function Step5() {
  let number = prompt("Enter any number:");
  console.log(Math.sqrt(number));
}
