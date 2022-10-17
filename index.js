// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
//const newCats = [];
const destructivelyAppendCat = (name) => cats.push(name);
const destructivelyPrependCat = (name) => cats.unshift(name);
const destructivelyRemoveLastCat = () => cats.pop();
const destructivelyRemoveFirstCat = () => cats.shift();
const appendCat = (name) => {
  const newArr = [...cats];
  newArr.push(name);
  return newArr;
};
const prependCat = (name) => {
  const newArr = [...cats];
  newArr.unshift(name);
  return newArr;
};
const removeLastCat = () => {
  const newArr = [...cats];
  newArr.pop();
  return newArr;
};
const removeFirstCat = () => {
  const newArr = [...cats];
  newArr.shift();
  return newArr;
};

const newCat = appendCat("hop", cats);

console.log(cats);
console.log(newCat);
