import express from 'express'

const PORT = process.env.PORT ?? 3000
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

app.listen(PORT, () => {
    console.log(`Server has been running on port ${PORT}...`)
})