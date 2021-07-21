import {sendUser} from './UserRegister.js';


export class Validator {
    
    constructor(){
        this.validations = [
            'data-min-length',
            'max',
        ]
    }
    //iniciar validação em todos os campos
    validate(form){
        let objeto = {};
        //pegar os inputs
        let inputs = form.getElementsByTagName("input");
        
        //transforma HTMLCollection => array
        let inputsArray = [...inputs];
        //loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input){
            
            //loop em todas as validações existentes
            for (let i = 0; i < this.validations.length; i++) {
                let attVal = this.validations[i];
                //verifica se a validação atual existe no input
                if(input.getAttribute(attVal) != null){
                    
                    //valor do atributo da validação
                    let value = input.getAttribute(attVal);
                    
                    //invocar o método
                    this[methodName[attVal]](input, value);
                    
                }
                
            }
            objeto[input.name] = input.value;
        }, this);
        
        return objeto;
    }
    //verifica se o input tem um número mínimo de caracteres
    minLength(input, minValue){
        
        let inputLength = input.value.length;
        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
        if(inputLength < minValue){
            this.printMessage(input, errorMessage);
        }
    }
    //verifica idade mínima do usuário
    minAge(input, maxValue){
        let inputValue = input.value;
        let errorMsg = 'É necessário ter no mínimo 18 anos';
        if(inputValue > maxValue){
            this.printMessage(input,errorMsg);
        }
    }
    //método para imprimir erros na tela
    printMessage(input, msg){
        let template = document.querySelector('.error-validation').cloneNode(true);
        
        template.textContent = msg;
        let inputParent = input.parentNode;
        
        template.classList.remove('template');
        
        inputParent.appendChild(template);
    }
}




let form = document.getElementById("register-form");
let submit = document.getElementById("registrar");

let validator = new Validator();
//evento de disparo
submit.addEventListener("click", function(e) {
    e.preventDefault();
    let inputs = validator.validate(form);
    sendUser(inputs)
    .then((response)=>{
        alert(response);
    })
    .catch((err)=>{
        console.error(err);
    })
});

let methodName = {
    'data-min-length': 'minLength',
    'max': 'minAge'
}

