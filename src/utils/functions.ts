import axios from "axios";

export const sendInfo = async (
  name: string,
  phone: string,
  mail: string,
  idea: string,
  info
) => {
  const url = "https://willbehome.ru/callback";
  axios.post(url, {
    info,
    name,
    phone,
    mail,
    idea,
  });
};

export const getInfo = async (): Promise<{ data: Info[] }> => {
  const promise = await axios.get(`https://willbehome.ru/callback`);
  return promise;
};
