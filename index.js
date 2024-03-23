import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { messsage: "enter your first number", type: "number", name: "firstNumber" },
    { messsage: "enter your Second number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
if (answer.operators === "Addition") {
    console.log("your value is " + (answer.firstNumber + answer.SecondNumber));
}
else if (answer.operators === "Substraction") {
    console.log("your value is " + (answer.firstNumber - answer.SecondNumber));
}
else if (answer.operators === "Multiplication") {
    console.log("your value is " + (answer.firstNumber * answer.SecondNumber));
}
else if (answer.operators === "Division") {
    console.log("your value is " + (answer.firstNumber / answer.SecondNumber));
}
else {
    console.log("please select a operator");
}
