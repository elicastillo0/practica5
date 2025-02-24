
const operation = (numero1, numero2, op) => {
    return op(numero1, numero2)
}
operation(1, 3, (a, b) => a + b)