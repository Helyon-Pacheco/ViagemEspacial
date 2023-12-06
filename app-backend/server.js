const express = require('express');
const cors = require('cors');
const app = express();
const destinosRouter = require('./routes/destinos');
const authRoutes = require('./routes/auth');
const sequelize = require('./config/database');

app.use(express.json());

app.use(cors());

app.use('/api/auth', authRoutes);

// Rotas
app.use('/api/destinos', destinosRouter);

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        return sequelize.sync();
    })
    .then(() => {
        console.log('Modelos sincronizados com o banco de dados.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
