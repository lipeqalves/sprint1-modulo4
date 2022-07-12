
import inquirer from "inquirer";

let lista = [];
function getPropiedades(){
    inquirer.prompt(
        {
        type: 'input',
        name: 'propriedades',
        message: "Digite uma propiedade CSS, ou Sair para finalizar a lista: ",
        validate(answers) {
            if(!answers) {
                return "O Lista não pode estar vazia, Digite uma propriedade"
            }
            return true
        }
        }).then(answers => {
            if(answers.propriedades.toLowerCase() != "sair"){
            lista.push(answers.propriedades);
            getPropiedades();
        
            }else{
            lista.sort();
            console.log(lista);
            }
        })
}
getPropiedades();

