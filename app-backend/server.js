const express = require('express');
const app = express();
const destinosRouter = require('./routes/destinos');

app.use(express.json());
app.use('/api/destinos', destinosRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
