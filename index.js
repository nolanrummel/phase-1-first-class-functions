function receivesAFunction(callback) {
    console.log(callback())
}

function returnsANamedFunction() {
    const callback = () => console.log('hello')
    return callback
}

function returnsAnAnonymousFunction() {
    return () => console.log('hello')
}