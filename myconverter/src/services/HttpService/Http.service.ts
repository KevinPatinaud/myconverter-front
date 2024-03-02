import axios from "axios";

const get = async (url: string) => {
  return await axios.get(url);
};

const HTTPService = {
  get,
};

export default HTTPService;
