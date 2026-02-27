const express = require('express');
const app = express();

// 🔑 SUAS KEYS (edite aqui)
const KEYS = [
    'testando',
    'quicknigger',
    'vip',
    'key30dias'
];

app.get('/keys.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(KEYS.join('\n'));
});

app.get('/check', (req, res) => {
    const key = req.query.key;
    const steamid = req.query.steamid;
    
    console.log(`🔍 Verificando: ${key} - ${steamid}`);
    
    if (KEYS.includes(key)) {
        console.log(`✅ Key ${key} usada por ${steamid}`);
        res.send('OK');
    } else {
        console.log(`❌ Tentativa inválida: ${key} - ${steamid}`);
        res.status(401).send('INVALIDA');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Servidor rodando na porta ${port}`);
});
