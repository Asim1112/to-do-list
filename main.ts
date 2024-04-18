#! /usr/bin/env node

import inquirer from "inquirer"


let todo = [];
let condition = true;

  

    while(condition) {

    let myTo_do = await inquirer.prompt

    (       
    [    
    {
    
    name: "addTo_do",
    type: "input",
    message: "what you want to add in your to-do?",
    
    },
    {

    name: "addMore",
    type: "confirm",
    message: "do you want to add more?",
    default: "false"

    }
    ]
    );
  
    todo.push(myTo_do.addTo_do);
    condition = myTo_do.addMore;
    console.log(todo);



    }