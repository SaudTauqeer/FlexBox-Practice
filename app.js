let text1 = document.querySelector("#texty");
let text2 = document.querySelector("#cTexty");
let copyButton = document.querySelector("#copy");

copyButton.addEventListener("click", () => {
  text2.value = text1.value;
});
