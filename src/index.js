const messages = [
    "Luis",
    "Oscar",
    "Carmen",
    "Diego",
    "Ana",
    "Felipe",
    "Maria"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {
    randomMsg
}