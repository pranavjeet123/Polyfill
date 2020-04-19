/**
 * The bind() method 
 * creates a new function that, 
 * when called, has its =====>this<===== keyword set to the provided value, 
 * with a given sequence of arguments preceding any provided 
 * when the ****new function**** is called.
 */



Function.prototype.customBind = function (...args){
    let obj = this;
    let params = args.slice(1);
    return function (...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}

/**
 * 
 * Declare function before utilising it to avoid HOISTING issues.
 */
let value ={
    name:"pranavjeet Mishra"
}

function greetMe(){
    console.log(`greet ${this.name} without actually passing value into function argument`);
}
//this will not be executed ===||
// greetMe.customBind(value);  ||
       /**
        * Bind return a function which is unique as compared to CALL AND APPLY
        * 
        * SO execute it by passing it to another variable */                     


        let myWorkingBind = greetMe.customBind(value);
          myWorkingBind();