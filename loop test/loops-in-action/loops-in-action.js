const calulateButton = document.querySelector("#calculator button");
let para = document.getElementById("calculated-sum");
function calculateSum() {
  let inputNumber = document.getElementById("user-number");
  let actualValue = inputNumber.value;
  let sum = 0;
  for (let i = 0; i <= actualValue; i++) {
    sum = sum + i;
  }
  para.innerText = sum;
  para.style.display = "block";
}
const inputTag = document.getElementById("user-number");
calulateButton.addEventListener("click", calculateSum);

//highlight links
const highLightLinks = document.querySelector("#highlight-links button");
function highLightLink() {
  const anchorElement = document.querySelectorAll("#highlight-links a");
  for (const anchor of anchorElement) {
    anchor.classList.add("highlight");
  }
}
highLightLinks.addEventListener("click", highLightLink);

//Display user
const dummyUserData = { firstName: "paul", lastName: "anges", age: "20" };
const displayUserDataButton = document.querySelector("#user-data button");
function displayUserData() {
  const outputEle = document.getElementById("output-user-data");
  outputEle.innerHTML = "";
  for (const prop in dummyUserData) {
    const newListEle = document.createElement("li");
    const outputText = prop.toUpperCase() + ":" + dummyUserData[prop];
    newListEle.textContent = outputText;
    outputEle.append(newListEle);
  }
}
displayUserDataButton.addEventListener("click", displayUserData);

//roll dice
const rollDiceButton = document.querySelector("#statistics button");

function rollDice() {
    return Math .floor(Math.random() *6);
}

function DerivenNumberOfDiceRolls() {
  const targetNumber = document.getElementById("user-target-number");
  const enteredNumber = targetNumber.value;
  const diceRollsListEle = document.getElementById("dice-rolls");
  diceRollsListEle.innerHTML = "";

  let hasRolledTarget = false;
  let numberOfRolls = 0;
  while (!hasRolledTarget) {
    const rolledNumber = rollDice();
    numberOfRolls++;
    const newRollListEle=document.createElement('li');
    const outputText="Roll"+numberOfRolls + ": "+rolledNumber;
    newRollListEle.textContent=outputText;
    diceRollsListEle.append(newRollListEle);
    if (rolledNumber == enteredNumber) {
      hasRolledTarget = true;
    }
  }
  const totalRolls = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "ouput-target-number"
  );

  outputTargetNumberElement.textContent = enteredNumber;
  totalRolls.textContent=numberOfRolls;
}
rollDiceButton.addEventListener("click", DerivenNumberOfDiceRolls);
