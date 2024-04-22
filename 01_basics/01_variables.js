const accountId = 144553
let accountEmail = "Captain@google.com"
var accountPassword = "12345"
accountCity = "New York"
let accountState

//accountId = 2 // this is not allowed because of const keyword

accountEmail = "Stark@gmail.com"
accountPassword = "1234588"
accountCity = "Miami"

console.log(accountId);

/*
prefer not use var 
because of issue in block scope and functional scope
*/

console.table([accountId ,accountEmail,accountPassword,accountCity,accountState])