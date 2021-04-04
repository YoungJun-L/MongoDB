const addSum = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("must be number");
      }
      resolve(a + b);
    }, 3000);
  });

const totalSum = async () => {
  try {
    let sum = await addSum(10, 20);
    let sum1 = await addSum(sum, 3);
    console.log(sum1);
  } catch (error) {
    if (error) console.log(error);
  }
};
totalSum();
