// server.js - Servidor de Keys ASTRAL SOFTWARE
const express = require('express');
const app = express();

// 🔑 SUAS KEYS (edite aqui à vontade)
const KEYS = [
    'testando',
    'quicknigger',
    'vip',
    'key30dias'
];

// ==========================================
// ROTA GET /keys.txt (pra ver as keys)
// ==========================================
app.get('/keys.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(KEYS.join('\n'));
});

// ==========================================
// ROTA GET /check (pra consultar key via GET)
// ==========================================
app.get('/check', (req, res) => {
    const key = req.query.key;
    const steamid = req.query.steamid;
    
    console.log(`🔍 GET: ${key} - ${steamid}`);
    
    if (KEYS.includes(key)) {
        console.log(`✅ Key ${key} usada por ${steamid}`);
        res.send('OK');
    } else {
        console.log(`❌ Tentativa inválida: ${key} - ${steamid}`);
        res.status(401).send('INVALIDA');
    }
});

// ==========================================
// ROTA POST /check (pra consultar key via POST)
// ==========================================
app.post('/check', express.json(), (req, res) => {
    const key = req.body.key;
    const steamid = req.body.steamid;
    
    console.log(`🔍 POST: ${key} - ${steamid}`);
    
    if (KEYS.includes(key)) {
        console.log(`✅ Key ${key} usada por ${steamid}`);
        res.send('OK');
    } else {
        console.log(`❌ Tentativa inválida: ${key} - ${steamid}`);
        res.status(401).send('INVALIDA');
    }
});

// ==========================================
// ROTA RAIZ (só pra testar se o servidor tá no ar)
// ==========================================
app.get('/', (req, res) => {
    res.send('🚀 ASTRAL SOFTWARE - SERVIDOR DE KEYS ONLINE');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Servidor rodando na porta ${port}`);
    console.log(`🔑 Keys carregadas: ${KEYS.join(', ')}`);
});
