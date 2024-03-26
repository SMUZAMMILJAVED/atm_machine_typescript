#!/usr/bin/env node
import inquirer from 'inquirer';
let balance:number=10000;
const pin:number=12345;
console.log(`your current balance is: ${balance}`);
const answer=await inquirer.prompt([
    {
     type:'number',
     message:('Enter your pin:'),
     name:"pin"
    },
]);
if(answer.pin===pin){
    const operation=await inquirer.prompt([
        {
            message:('Which operation you want to perform'),
            type:"list",
            name:"operation",
            choices:['Check balance','With draw','deposite']
        }
    ]);
    if(operation.operation==='Check balance'){
        console.log(`Your current balance is: ${balance}`);
    }
    if(operation.operation==='With draw'){

        const amount=await inquirer.prompt([
            {
                type:'number',
                name:'amount',
                message:("Enter amount")   
            }
        ]);
        if(amount.amount>balance){
          console.log(`your withdraw amount is greater than your current balance\nYour current balance is: ${balance}`)
        }else{
        balance=balance - amount.amount;
        console.log(`${amount.amount} is withdral from your account\nYour current balance is: ${balance}`);}
    }
    if(operation.operation==='deposite'){
        const amount=await inquirer.prompt([
            {
                type:'number',
                name:'amount',
                message:("Enter amount")   
            }
        ])
        balance=balance + amount.amount;
        console.log(`${amount.amount} is deposite to your account\nYour current balance is: ${balance}`);
    }

}
else{
    console.log('wrong pin');
}
