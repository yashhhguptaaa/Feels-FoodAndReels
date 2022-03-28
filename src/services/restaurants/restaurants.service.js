import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "41.878113,-87.629799") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = (result) => {
  return camelize(result);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResource) => {
    console.log(transformedResource);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

console.log("Printing Result");
