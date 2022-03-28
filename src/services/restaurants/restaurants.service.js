import { mocks } from "./mock";

export const restaurantsRequest = (location = "41.878113,-87.629799") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

restaurantsRequest()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

console.log("Printing Result");
