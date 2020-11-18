let num = 0;
let lnum = 1;
let temp = num;

console.log(num);
console.log(num + lnum);
for (let i = 0; i < 9; i++) {
  temp = num;
  num = lnum;
  lnum = temp + lnum;
  console.log(lnum);
}