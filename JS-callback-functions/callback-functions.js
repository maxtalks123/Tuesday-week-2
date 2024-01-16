console.log("hello, world");
function notifyUser() {
  console.log("notifyUser function was called!");
}
function myAwesomeFunction(onCompleteCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  onCompleteCallback();
}

myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});

myAwesomeFunction(() => {
  console.log("notifyUser function was called!");
});

function myLegendaryFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myLegendaryFunction... doing complex tasks...");
  console.log("complex task complete. I will notify the user");
  //randomly choose if success is true or false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

myLegendaryFunction(
  (data) => {
    console.log("It was successful: ", data.message);
  },
  () => {
    console.log("It failed :(");
  }
);
function onLegendarySuccess(data) {
  console.log("It was successful: ", data.message);
}
function onLegendaryFailure() {
  console.log("It failed: (");
}
myLegendaryFunction(onLegendarySuccess, onLegendaryFailure);

//Maths function
function add(a, b) {
  return a + b; //it is important i hit return so i can use later
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function subtract(a, b) {
  return a - b;
}
function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );
  return operationCallback(a, b);
}
const result = myCalculatorFunction(1, 2, add);
console.log(result);
//I need to use operationCallback to define what I want to do, whether I want to be add or multiply, I would need to use either of which I defined earlier.
const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2);

const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult);
