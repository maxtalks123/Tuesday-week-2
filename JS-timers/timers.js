console.log("Hello,world");

let secret = document.getElementById("secret-message");
let secretBtn = document.getElementById("btn");
secretBtn.addEventListener("click", showSecret);

function showSecret() {
  setTimeout(function () {
    secret.classList.remove("secret");
    setTimeout(function () {
      secret.classList.add("secret");
    }, 1000);
  }, 1000);
}

showSecret();
// function secretMessage() {
//     function message() {
//         document.body.appendChild("This is a disappearing message")
//     }
//     setTimeout(message)
// document.getElementById("btn").style.display = "none";}, 5000);}

// function secretMessageAppear() {
//   const newDiv = document.createElement("div");
//   const message = document.createTextNode("This is a disappearing message!");
//   newDiv.appendChild(message);
// }
// secretMessageAppear();
// const btn = document.getElementById("btn");
// btn.addEventListener("click", secretMessageAppear);
//function
// create element for message
//set timer for message to disappear
// set timer for message
//put disappearing part for message
//run function
