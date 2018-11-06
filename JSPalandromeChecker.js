function palindrome(str) {

  let regexRemove = /[a-z0-9]/ig;
  let strCopy = str.match(regexRemove).join('');
  let revStr = '';
  for(let i = strCopy.length - 1; i >= 0; i--){
    revStr += strCopy[i];
  }

  return strCopy.toLowerCase() === revStr.toLowerCase();
} 



console.log(palindrome("A man, a plan, a canal. Panama")); //returns true