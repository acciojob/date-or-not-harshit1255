var isDate = function (input) {
  //   write your code here

  return (new Date(input) !== "Invalid Date" &&
		  !isNaN(new Date(input)));
};

// // Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
