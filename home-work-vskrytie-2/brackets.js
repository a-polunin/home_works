const str1 = '({[]()()})'
const str2 = '({[]})'
const str3 = '(()(()))'
const str4 = '(()))(()))'
const str5 = '(()))][[]]](()))'
const str6 = '(()[]{}()()[]{})'
const str7 = '({)}'
const str8 = '}{}[]{'
function brackets(str) {
  const pairs = { 
    ')':'(', 
    '}':'{', 
    ']':'['
  }
  return !str.split('').reduce((accum, currValue) => {
    if (pairs[currValue] === accum[accum.length - 1]) {
      return accum.slice(0, -1)
    }
    return accum.concat(currValue)
  }).length
}

console.log(brackets(str1), '===', true)
console.log(brackets(str2), '===', true)
console.log(brackets(str3), '===', true)
console.log(brackets(str4), '===', false)
console.log(brackets(str5), '===', false)
console.log(brackets(str6), '===', true)
console.log(brackets(str7), '===', false)
console.log(brackets(str8), '===', false)

// Anton
function brackets(str) {
  let reg = str.replace(/\(\)/g, '').replace(/\[\]/g, '').replace(/{}/g, '');
  if (reg.match(/\(\)/i) || reg.match(/\[\]/i) || reg.match(/{}/i)) {
    return brackets(reg);
  } else if (reg.length == 0) {
    return true;
  } else return false;
}

// Artem
// function brackets(str) {
//   const reg = /(\(\))|(\[\])|(\{\})/g;
//     if (str.length) {
//       try {
//         str = str.replace(reg, '');
//         return brackets(str);
//       } catch (e) {
//         return false;
//       }
//     }
//     return true;

  // const reg = /(\(\))|(\[\])|({})/g;
  // if (str.length) {
  //   if (~str.search(reg)) {
  //     str = str.replace(reg, '');
  //     console.log(str)
  //     brackets(str);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
// }

// //Grisha
// function brackets(string, index, arr) {
//   index === undefined ? index = 0 : null;
//   arr === undefined ? arr = [] : null;

  // const origin = '()[]{}'
//   const currPos = origin.indexOf(string[index])

//   if (currPos % 2 === 0) {
//     arr.push(currPos + 1)
//   } else {
//     if (arr.pop() !== currPos) {
//       return false
//     }
//   }

//   if (string[index + 1] === undefined) {
//     return arr.length === 0
//   } else {
//     return brackets(string, index + 1, arr)
//   }
// }