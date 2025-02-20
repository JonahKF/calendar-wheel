import "./style.css";
import { sekkiData, getAllDatesInYear } from "./data.js";

const screenController = () => {
  const datesRing = document.querySelector(".dates-ring");
  const currentYear = new Date().getFullYear();
  const allDates = getAllDatesInYear(currentYear);

  // Create date items
  allDates.forEach((date, index) => {
    const angle = (index * 360) / 365;
    const dateElement = document.createElement("div");
    dateElement.className = "date-item";
    dateElement.textContent = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    dateElement.dataset.date = date.toISOString();
    dateElement.style.transform = `rotate(${angle}deg) translate(300px, -0.5em)`;
    datesRing.appendChild(dateElement);
  });

  window.onscroll = () => {
    rotateWheel();
  };

  function rotateWheel() {
    const datesRing = document.querySelector(".dates-ring");

    const dateRotation = (window.scrollY / 20) % 360;
    datesRing.style.transform = `rotate(${dateRotation}deg)`;

    const dayOfYear = Math.floor((dateRotation / 360) * 365);
    const currentDate = allDates[dayOfYear];
    console.log(currentDate);
  }
};

screenController();
