// Função desse arquivo: inicializar o servidor em node.js localmente

const app = require("./src/app");
const PORT = 8080;
// 3030, 3333, 6060, 6666 8080, 8000

// app.listen(PORTA, função anonima) 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})