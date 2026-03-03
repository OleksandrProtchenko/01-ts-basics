console.log("====== Task 6 ======");
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]); // 1
getFirstElement<string>(["a", "b", "c"]); // "a"
getFirstElement<boolean>([true, false, true]); // true

const first = getFirstElement<number>([1, 2, 3]); // 1
const second = getFirstElement<string>(["a", "b", "c"]); // "a"
const third = getFirstElement<boolean>([true, false, true]); // true
console.log(first); // 1
console.log(second); // "a"
console.log(third); // true
