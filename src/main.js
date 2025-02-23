import "./style.css";

console.log("main.js loaded");

const screenController = () => {
  window.onscroll = () => {
    rotateCircle();
  };

  function rotateCircle() {
    let circle = document.querySelector(".circle");
    circle.style.transform = `rotate(${window.scrollY / 4}deg)`;
  }
};

screenController();
