import Validator from "fastest-validator";

const v = new Validator();

export const checkFactory = (schema) => {
  return v.compile(schema);
};

export default v;
