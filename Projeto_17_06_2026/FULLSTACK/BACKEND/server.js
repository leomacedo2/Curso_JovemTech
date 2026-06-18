const express = require('express')
const cors = require('cors')
const PORT = 3000
const dados = require('./dados')

const app = express()

app.use(express.json())
app.use(cors())

// Criando Endpoint RAIZ
app.get('/', (req, res) => {
    res.json({mensagem:'Rota RAIZ'})
})

// Criando Endpoint dados(Funcionários)
app.get('/funcionarios', (req, res) => {
    res.json(dados)
})

// Ligando API
app.listen(PORT, () => {
    // console.log(`API Rodando no endereço: http://localhost:${PORT}/funcionarios`)
    console.log(`API Rodando no endereço: http://localhost:${PORT}`)
})


