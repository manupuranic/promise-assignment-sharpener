console.log("person1: shows ticket");
console.log("person2: shows ticket");

const promiseWifeBringingTicks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });
};

const getPopcorn = () => {
  return new Promise((resolve, reject) => {
    promiseWifeBringingTicks().then((t) => {
      console.log("husband: we should go in");
      console.log("wife:no i am hungry");
      resolve(`${t} popcorn`);
    });
  });
};

const getButter = () => {
  return new Promise((res, rej) => {
    getPopcorn().then((t) => {
      console.log("wife: I need butter");
      res(`${t} butter`);
    });
  });
};

const getColdDrinks = () => {
  return new Promise((res, rej) => {
    getButter().then((t) => {
      console.log("wife: I need a drink");
      console.log("husband: Here we go we have everything now");
      res(`${t} drink`);
    });
  });
};

getColdDrinks().then((t) => {
  console.log(t);
});

console.log("person4: shows ticket");
console.log("person5: shows ticket");
