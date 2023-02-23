"use strict";

const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");
const headers = document.querySelectorAll(".item > h2");

const findChildren = () => {
  const num = categories.children.length;
  console.log(`Numbers of categories: ${num}`);

  const findHeaderAndChildren = (item) => {
    const headerOfItem = item.querySelector("h2");
    const listOfItem = item.querySelector("ul");
    console.log(`Category: ${headerOfItem.textContent}`);
    console.log(`Elements: ${listOfItem.children.length}`);
  };
  items.forEach((item) => findHeaderAndChildren(item));
};

findChildren();
