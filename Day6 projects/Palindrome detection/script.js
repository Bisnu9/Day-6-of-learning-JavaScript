// Palindrome detection: Check if a given word is a palindrome.

let user = prompt("Type a string");

let reverse = user.split('').reverse().join('');
if(user === reverse){
    console.log(user , " is a palindrome");
}else{
    console.log(user ," not a palindrome");
}

