let lastUserActivityTime;
const posts = [];
let count = 0;

const user = {
  name: "John",
  lastUserActivityTime: "22-06-23",
};

console.log(`Welcome`);

// const createPost = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push({
//         title: `Post${++count}`,
//       });
//       resolve(posts);
//     }, 4000);
//   });
// };

// const updateLastUserActivityTime = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       user.lastUserActivityTime = new Date().getTime();
//       resolve(user.lastUserActivityTime);
//     }, 1000);
//   });
// };

// const deletePost = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (posts.length > 0) {
//         posts.pop();
//         resolve(posts);
//       } else {
//         reject("ERROR");
//       }
//     }, 3000);
//   });
// };

// const userUpdates = () => {
//   Promise.all([createPost(), updateLastUserActivityTime()]).then(
//     ([posts, time]) => {
//       console.log("posts>>>", posts);
//       console.log("userLastActivityTime", time);
//     }
//   );
//   Promise.all([createPost(), updateLastUserActivityTime()]).then(
//     ([posts, time]) => {
//       console.log("posts>>>", posts);
//       console.log("userLastActivityTime", time);
//       deletePost()
//         .then((msg) => console.log(msg))
//         .catch((err) => console.log(err));
//     }
//   );
// };

const userUpdate = async () => {
  const createPost = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push({
          title: `Post${++count}`,
        });
        resolve(posts);
      }, 4000);
    });
  };

  const deletePost = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          posts.pop();
          resolve(posts);
        } else {
          reject("ERROR");
        }
      }, 3000);
    });
  };

  const updateLastUserActivityTime = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastUserActivityTime = new Date().getTime();
        resolve(user.lastUserActivityTime);
      }, 1000);
    });
  };
  let [updatedPost, time] = await Promise.all([
    createPost(),
    updateLastUserActivityTime(),
  ]);
  console.log("added new post");
  console.log(`updated posts >>>`, updatedPost);
  console.log(`lastActivityTime ${time}`);

  [updatedPost, time] = await Promise.all([
    createPost(),
    updateLastUserActivityTime(),
  ]);
  console.log("added new post");
  console.log(`updated posts >>>`, updatedPost);
  console.log(`lastActivityTime ${time}`);

  try {
    updatedPost = await deletePost();
    console.log("Last post deleted");
    console.log(`updated posts>>>`, updatedPost);
  } catch (err) {
    console.log(err);
  }
  try {
    updatedPost = await deletePost();
    console.log("Last post deleted");
    console.log(`updated posts>>>`, updatedPost);
  } catch (err) {
    console.log(err);
  }
};

userUpdate();
console.log(`Thank you`);
