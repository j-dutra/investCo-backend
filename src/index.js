const express = require('express')
const controler = require('./controller/controller')

const app = express()
const port = 3000;
app.use(express.json())
app.use("/user", controler)
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
