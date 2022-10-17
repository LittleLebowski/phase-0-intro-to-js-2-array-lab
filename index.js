// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
//const newCats = [];
const destructivelyAppendCat = (name) => cats.push(name);
const destructivelyPrependCat = (name) => cats.unshift(name);
const destructivelyRemoveLastCat = () => cats.pop();
const destructivelyRemoveFirstCat = () => cats.unshift();
const appendCat = (name, arr) => {
  const newArr = [...arr];
  newArr.push(name);
  console.log(newArr);
  return newArr;
};
const prependCat = (name) => {};
const removeLastCat = () => {};
const removeFirstCat = () => {};

const newCat = appendCat("hop", cats);

console.log(cats);
console.log(newCat);
