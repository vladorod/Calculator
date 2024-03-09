import { sendInfo } from "./functions.ts";
import IMask, { FactoryArg, MaskedOptions } from "imask";

document.addEventListener("DOMContentLoaded", async function () {
  const nameField = document.querySelector("#name") as HTMLInputElement;
  const mailField = document.querySelector("#mail") as HTMLInputElement;
  const ideaField = document.querySelector("#idea") as HTMLInputElement;
  // const buttonSend = document.querySelector("#sendForm") as Element;
  const phoneField = document.querySelector("#phone") as HTMLInputElement;
  const contactForm = document.querySelector("#formContact") as Element;

  // маска для телефонного номера
  const maskOptions: FactoryArg = {
    mask: "+{7}(000)000-00-00",
    lazy: false,
  };
  const mask = IMask(phoneField, maskOptions);
  phoneField.value = "";
  mask.updateValue();

  // реакция сайта на нажатие кнопки "отправить"
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (phoneField.value.match(/_/ig)) {
      phoneField.setCustomValidity("Некоректный номер");
      phoneField.reportValidity();
    } else {
      phoneField.setCustomValidity("");
      sendInfo(nameField.value, phoneField.value, mailField.value, ideaField.value)
    }
  });
});
