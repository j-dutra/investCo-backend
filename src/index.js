const express = require('express')
const router = require('./controller/controller')

const app = express()
const port = 3000;
app.use(express.json())
app.use("/", router)
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
