const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const server = express();

mongoose.connect('mongodb+srv://jacksonpereira:jackson123@cluster0-et2lg.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

// Habilita o acesso ao servidor para algumas url's
server.use(cors());
// Diz ao servidor que a requição utiliza JSON
server.use(express.json());
// Carrega o arquivo de rotas
server.use(routes);
// Faz o servidor escutar na porta 3333
server.listen(3333);