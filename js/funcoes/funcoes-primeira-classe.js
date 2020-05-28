function getName() {
    return 'João Erick Barbosa';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);