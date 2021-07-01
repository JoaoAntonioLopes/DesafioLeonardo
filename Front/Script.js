class Validator {
    
    constructor(){
        this.validations = [
            'data-min-length', 
        ]
    }
    //iniciar validação em todos os campos
    validate(form){
        
        //pegar os inputs
        let inputs = form.getElementsByTagName("input");
        
        //transforma HTMLCollection => array
        let inputsArray = [...inputs];
        
        //loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input){
           
           //loop em todasd as validações existentes
            for (let i = 0; i < this.validations.length; i++) {
                //verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null){
                    //Limpa String para virar método
                    let method = this.validations[i].replace('data-', '').replace('-', '').replace('l', 'L');
                
                    //valor do atributo da validação
                    let value = input.getAttribute(this.validations[i]);
                    
                    //invocar o método
                    this[method](input, value);
                }
                
            }
        }, this);
    }
    //verifica se o input tem um número mínimo de caracteres
    minLength(input, minValue){
        
        let inputLength = input.value.length;
        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
        if(inputLength < minValue){
           this.printMessage(input, errorMessage);
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

    validator.validate(form);
});