const express = require('express');
const app = express();

const PORT = 9000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


