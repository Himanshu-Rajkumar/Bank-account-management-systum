// Implement a bank account management system using JavaScript objects and functions.

// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.

function BankAccount(accountNumber, name, type, balanace, status) {
    this.Accountnumber = accountNumber;
    this.Name = name;
    this.Type = type;
    this.balanace = balanace;
    this.branch = "Hazaribag";
    this.IfSC = "SBINO0174771";
    this.pincode = 825301;
    this.Branchcode = 17471;
    this.status = status;

}

// function that deposite specific amount

BankAccount.prototype.credit = function () {
    let Amount = this.balanace + 500
    this.balanace = Amount
    console.log(`Amount 500 has been credited to your bank account.
    Remanind Amount : ${Amount} `)

}

// // function that withdraw specific amount

BankAccount.prototype.withdraw = function () {
    let Amount = this.balanace - 500
    this.balanace = Amount
    console.log(`Amount 500 has been debited to your bank account.
    Remanind Amount : ${Amount} `)


}
// function for check balance
BankAccount.prototype.checkBalance = function () {
    console.log(this.balanace)

}

// function for checking and accout in active or not
BankAccount.prototype.isActive = function () {
    if (this.status == true) {
        console.log("Active")

    }
    else {
        console.log("InActive")
    }

}
BankAccount.prototype.Totalbalance = function () {

}



let User1 = new BankAccount(98237493275, "Himanshu", "XYZ", 1000, true)



User1.credit()
User1.credit()
User1.withdraw()

User1.checkBalance()
User1.isActive()
User1.isActive()

let User2 = new BankAccount(98234329934, "Rahul", "XYZ", 2000, false)

User2.credit()
User2.withdraw()
User2.withdraw()

User2.isActive()


let User3 = new BankAccount(98475988498, "Karan", "XYZ", 5000, true)
User3.credit()
User3.credit()

User3.isActive()
User3.withdraw()
User3.withdraw()
User3.withdraw()
User3.withdraw()

// Creating an array and store all User Object in it ,in Order to find TotalBalance.
let arr = []
arr.push(User1, User2, User3)
// console.log(arr)

function Total() {
    let bag = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].status == true) {
            bag = bag + arr[i].balanace
        }
    }
    return console.log(bag)

}
// This represent the total balance
Total()















