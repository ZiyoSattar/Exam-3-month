// REVERSE NAME

function reverseName(rev) {
  let splitName = rev.split(" ");
  let reverseResult = splitName.reverse();

  let joinName = reverseResult.join(" ");

  return joinName;
}

let result = reverseName("");
console.log(`reverseName("") ni ichiga yozing`);
console.log(result);

// END


// Double words

function doubleWords(words) {
  let word = "";
  for (var i = 0; i < words.length; i++) {
    word += words[i] + words[i];
  }
  return word;
}

let resultWords = doubleWords("");
console.log(`doubleWords("") ni ichiga yozing`);
console.log(resultWords);

// END


// Root or noroot number

function rootedNumber(rootedNumbers) {
  let arr = [];

  for (let num of rootedNumbers) {
    if (Math.sqrt(num) % 1 == 0) {
      arr.push(Math.sqrt(num));
    } else {
      arr.push(num * num);
    }
  }
  return console.log(arr);
}
console.log(`rootedNumber([]) = shu yerga son yozing`);
rootedNumber([]);

//END