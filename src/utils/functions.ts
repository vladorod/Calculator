import axios from "axios";

export const sendInfo = (
  name: string,
  phone: string,
  mail: string,
  idea: string
) => {
  const url = "/wp-json/dabudetdom/v1/application";
  axios.post(url, {
    name,
    phone,
    mail,
    idea,
  });
};
