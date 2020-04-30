// SmartPhone is found in detect-browser.js
window.addEventListener('DOMContentLoaded', (e) => {
  if (SmartPhone.isAny()) {
    console.log("here");
    let ele = document.querySelector(".resizethis");
    ele.style.maxHeight = "65vh";
  } else {
    console.log("nothing to do, not mobile");
  }
});
