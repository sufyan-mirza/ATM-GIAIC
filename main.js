// ATM USING INQUIRER
import inquirer from "inquirer";
let data = await inquirer.prompt([
    {
        type: 'string',
        name: 'cardHolder',
        message: 'enter the name of card holder'
    },
    {
        type: 'number',
        name: 'pincode',
        message: 'enter the four digit pincode'
    },
    {
        type: 'list',
        name: 'typeAccount',
        message: 'choose the type given below',
        choices: ["current", "saving"]
    },
    {
        type: 'list',
        name: 'transction',
        message: 'choose the type of transction',
        choices: ["FAST CASH", "WITHDRAWL"]
    },
    {
        type: 'list',
        name: 'amount',
        message: 'choose the amount',
        choices: ["500", "1000", "3000", "5000", "10000"],
        when(data) {
            return data.transction === "FAST CASH";
        }
    },
    {
        type: 'number',
        name: 'Amount',
        message: 'enter the amount you want to with drawl',
        when(data) {
            return data.transction === "WITHDRAWL";
        }
    }
]);
// whe use if statement to use atm
if (data.pincode) {
    const balance = Math.floor(Math.random() * 100000);
    console.log(balance);
    const EnterAmount = data.amount | data.Amount;
    if (EnterAmount <= balance) {
        const remaining = balance - EnterAmount;
        console.log(`you have done successfull transction of ${EnterAmount} and now you current balance is ${remaining}`);
    }
    else {
        console.log("you enter insufficient amount");
    }
}
