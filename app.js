
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumber = function () {
  return Math.floor(Math.random() * colors.length);
};
