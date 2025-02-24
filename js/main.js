const login = (name, printMessage) => {
    printMessage(name);
}

login("Laura", (name) =>{
    console.log("Hola " + name);
})

login("Laura", (name) => {
    console.log("Hello " + name);
})