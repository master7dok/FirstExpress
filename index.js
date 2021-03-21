import express from 'express'
import path from 'path'
const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'static')))


// app.get('/', (req, res) => {
//    // res.send('<h1>Hello Express</h1>')
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })
// app.get('/features', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
// })
app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname, 'static', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server has been running on port ${PORT}...`)
})