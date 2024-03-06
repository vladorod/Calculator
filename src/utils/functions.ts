import axios from "axios";

export const sendInfo = async (
  name: string,
  phone: string,
  mail: string,
  idea: string
) => {
  const url = "https://willbehome.ru/callback";
  axios.post(url, {
    name,
    phone,
    mail,
    idea,
  });
};
