function outerFunction(p) {

    let a = "I'm a local variable.";

    function innerFunction() {
        console.log("Parameter of outerFunction:", p);
        console.log("Local variable:", a);
    }

    return innerFunction;
}

const result = outerFunction("Hello");


result(); 

/**
 * In this example, outerFunction takes a parameter and defines a local variable a. It then defines an innerFunction which logs both the parameter of outerFunction and the local variable. Finally, it returns the innerFunction. When outerFunction is called and executed, it returns the innerFunction, which retains access to the parameter and the local variable due to lexical scoping. So even after outerFunction has finished executing, when reslt is called later, it still has access to both the parameter and the local variable of outerFunction.
 */