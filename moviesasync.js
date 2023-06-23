console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTicks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("ticket");
      }, 3000);
    });
  };

  const ticket = await promiseWifeBringingTicks();

  console.log("husband: we should go in");
  console.log("wife:no i am hungry");

  const getPopcorn = () => {
    return new Promise((resolve, reject) => resolve(`popcorn`));
  };
  let popcorn = await getPopcorn();

  console.log(`husband:I got some ${popcorn}`);
  console.log("wife: I need butter on them");

  const getButter = () => {
    return new Promise((resolve, reject) => resolve(`butter`));
  };
  let butter = await getButter();

  console.log(`husband: Here is your ${butter} on the popcorn`);
  console.log(`husband: Now can we go inside?`);
  console.log(`wife: I still need drinks`);

  const getColdDrinks = () => {
    return new Promise((resolve, reject) => resolve(`coke`));
  };
  let drink = await getColdDrinks();

  console.log(`husband: here is your ${drink}`);
  console.log(`wife: Lets go in we are late`);
  console.log(`husband: right *grins*`);

  return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
