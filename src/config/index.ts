interface Config {
  validator: {
    validatorError: {
      target: boolean;
      value: boolean;
    };
  };
}

export const config: Config = {
  validator: {
    validatorError: {
      target: false,
      value: false,
    },
  },
};
