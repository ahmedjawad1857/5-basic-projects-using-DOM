const addButton = document.getElementById("add");
const isStatus = document.getElementById("relation");
let flag = false; // Initialize flag

addButton.addEventListener("click", () => {
  // Toggle flag
  flag = !flag;

  // Update status text and styles based on the flag value
  const status = flag ? "Friends" : "Stranger";
  const color = flag ? "green" : "red";
  const buttonText = flag ? "Remove Friend" : "Add Friend";

  isStatus.textContent = status;
  isStatus.style.color = color;
  addButton.textContent = buttonText;
});
