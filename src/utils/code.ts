import { sendInfo } from "./functions.ts";
import IMask, { FactoryArg, MaskedOptions } from "imask";

document.addEventListener("DOMContentLoaded", async function () {
  const nameField = document.querySelector("#name") as Element;
  const mailField = document.querySelector("#mail") as Element;
  const ideaField = document.querySelector("#idea") as Element;
  // const buttonSend = document.querySelector("#sendForm") as Element;
  const element = document.querySelector("#phone") as HTMLInputElement;
  const contactForm = document.querySelector("#formContact") as Element;

  // маска для телефонного номера
  const maskOptions: FactoryArg = {
    mask: "+{7}(000)000-00-00",
    lazy: false,
  };
  const mask = IMask(element, maskOptions);
  element.value = "";
  mask.updateValue();
  console.log(contactForm);
  // реакция сайта на нажатие кнопки "отправить"
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await sendInfo(
      nameField.value,
      mask.value,
      mailField.value,
      ideaField.value
    );
  });
});
