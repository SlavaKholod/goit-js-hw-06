"use strict";

const categories = document.querySelector("#categories");
const item = document.querySelector(".item");

// const findNumOfCategories = () => {
//   const num = categories.children.length;
//   console.log(`Numbers of categories: ${num}`);
// };

const findChildren = () => {
  const num = categories.children.length;
  console.log(`Numbers of categories: ${num}`);
};

findChildren();
