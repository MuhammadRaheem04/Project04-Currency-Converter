#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1.00,
    CNY: 7.24,
    INR: 83.67,
    PKR: 278.50,
    JPY: 154.86,
    Germany_EUR: 0.92,
    GBP: 0.78,
    France_EUR: 0.92,
    BRL: 5.29,
    ItalyEuro: 0.92,
    Russian_Ruble: 88.82,
    Mexican_Peso: 17.84,
    Indonesian_Rupiah: 16284,
    South_Korean_Won: 1374.36,
    Canadian_Dollar: 1.37,
    Spain_Euro: 0.92,
    Argentine_Peso: 896.96,
    Australian_Dollar: 1.50,
    Colombian_Peso: 3926.51,
    Nigerian_Naira: 1468.90,
    Egyptian_Pound: 47.45
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from currency ",
        choices: ['USD', 'INR', 'PKR', 'Germany_EUR', 'France_EUR', 'BRL', 'ItalyEuro',
            'Russian_Ruble', 'Mexican_Peso', 'Indonesian_Rupiah', 'South_Korean_Won', 'Canadian_Dollar',
            'GBP', 'JPY', 'Spain_Euro', 'Argentine_Peso', 'Australian_Dollar', 'Colombian_Peso',
            'Nigerian_Naira', 'Egyptian_Pound', 'CNY']
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency ",
        choices: ['USD', 'INR', 'PKR', 'Germany_EUR', 'France_EUR', 'BRL', 'ItalyEuro',
            'Russian_Ruble', 'Mexican_Peso', 'Indonesian_Rupiah', 'South_Korean_Won', 'Canadian_Dollar',
            'GBP', 'JPY', 'Spain_Euro', 'Argentine_Peso', 'Australian_Dollar', 'Colombian_Peso',
            'Nigerian_Naira', 'Egyptian_Pound', 'CNY']
    },
    {
        name: "amount",
        type: "number",
        message: "Enter from amount ",
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
// let conversionAmount = toAmount / fromAmount
// let convertedAmount = amount * conversionAmount
console.log(convertedAmount);
