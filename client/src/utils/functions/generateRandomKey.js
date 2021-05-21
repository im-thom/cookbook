import { v4 as uuidv4 } from "uuid";

const generateRandomKey = () => {
  return uuidv4();
};

export default generateRandomKey;
