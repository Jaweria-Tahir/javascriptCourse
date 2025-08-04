const accountId = 144432
let accountEmail = "jiyatahir@gmail.com"
var accountPassword = "1234"
accountCity = "Lahore"
let accountState;

//  accountId = 2 //not allowed 
accountEmail = "hc@hc.com"
accountPassword = "1212"
accountCity = "Karachi"

// prefer not to use var due to issue in block scope and functional scope
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

