let myVar = '30 Days Of JavaScripts';
console.log(myVar);

// length of string 

console.log(myVar.length);

// all string char convert to uppercase

console.log(myVar.toUpperCase());

// all string char convert to lower case 

console.log(myVar.toLowerCase());

// using substring or substr() method

console.log(myVar.substr(0,1));

console.log(myVar.substring(0,1));

console.log(myVar.substr(3,myVar.length));

// using includes() 

console.log(myVar.includes('Script'));

// using split() method

console.log(myVar.split(' '));

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(','));

console.log(myVar.replace('JavaScripts', 'Python'))
console.log(myVar.charAt(15))
console.log(myVar.charCodeAt('J'))

console.log(myVar.indexOf(0))

console.log(myVar.lastIndexOf())

console.log(myVar.trim(' '))

console.log(myVar.startsWith('3'))

console.log(myVar.endsWith('s'))

console.log(myVar.match('a'))
console.log(myVar.concat('30', 'Days', 'Python'))
console.log(myVar.repeat(2))

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")