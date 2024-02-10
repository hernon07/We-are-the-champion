const userInput = document.getElementById("user-input");
const publishBtn = document.getElementById("publish-btn");

const container = document.getElementById("container");

publishBtn.addEventListener("click", function () {
  const div = document.createElement("div");
  div.classList.add("endorsement");
  div.textContent = userInput.value;

  container.appendChild(div);

  userInput.value = "";
});
