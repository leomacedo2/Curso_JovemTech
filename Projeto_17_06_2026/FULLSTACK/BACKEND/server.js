const express = require('express')
const cors = require('cors')
const PORT = 3000
const dados = require('./dados')

const app = express()

app.use(express.json())

app.use(cors())

//Criando Endpoint RAIZ

app.get('/', (req, res) => {
    res.json({mensagem:'Rota RAIZ'})
})

//Criando Endpoint dados(Funcionários)

app.get('/funcionarios', (req, res) => {
    res.json(dados)
})

app.get('/funcionarios/:idmatricula', (req, res) => {
    const idmatricul = parseInt(req.params.idmatricula)
    let funcionarios = dados.funcionario.find(f => f.idMatricula == idmatricul)
    res.json({mensagem:'Usuario Encontrado', idMatricula:funcionarios})
})

//Ligando API

app.listen(PORT, () => {
    console.log(`API Rodando no endereço: http://localhost:${PORT}/funcionarios`)
})

