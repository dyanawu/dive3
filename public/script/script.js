// SmartPhone is found in detect-browser.js
window.addEventListener('DOMContentLoaded', (e) => {
  if (SmartPhone.isAny()) {
    let resizeEle = document.querySelector(".resizethis");
    resizeEle.style.maxHeight = "65vh";

    let borderEle = document.querySelector(".unborderthis");
    borderEle.classList.remove("border-right");
  }
});
