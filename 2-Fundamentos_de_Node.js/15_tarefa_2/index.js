const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Informe o nome:",
    },
    {
      name: "idade",
      message: "Informe a idade:",
    },
  ])
  .then((answers) => {
    console.log(answers);
    console.log(
      chalk.bgYellow.black(
        `Nome: ${answers.nome}, Idade: ${answers.idade} anos.`
      )
    );
  })
  .catch((err) => {
    console.log(err);
  });
