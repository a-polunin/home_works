function countChar(string, char, index=0, counter=0) {
  if(index > string.length) {
    return counter
  }
  if(string[index] === char){
    return countChar(string,char,index+1, counter+1)
  } else {
    return countChar(string,char,index+1, counter)
  }
}


console.log(countChar('fdsasdfasdf', 'f') === 3)