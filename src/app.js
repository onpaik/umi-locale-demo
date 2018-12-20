/* eslint-disable no-console */
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
  plugins: [],
};
