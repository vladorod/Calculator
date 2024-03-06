import { sendInfo } from "./functions.ts";
import IMask from "imask";

document.addEventListener("DOMContentLoaded", async function () {
  const nameField = document.querySelector("#name") as Element;
  const phoneField = document.querySelector("#phone") as Element;
  const mailField = document.querySelector("#mail") as Element;
  const ideaField = document.querySelector("#idea") as Element;
  const buttonSend = document.querySelector("#send") as Element;
  const element = document.querySelector("#phone") as Element;

  // маска для телефонного номера
  const maskOptions = {
    mask: "+{7}(000)000-00-00",
    lazy: false,
  };

  const mask = IMask(element, maskOptions);

  // реакция сайта на нажатие кнопки "отправить"
  buttonSend.addEventListener("click", async () => {
    ideaField.value;
  });
});
