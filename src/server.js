import express from "express"

const app = express()
app.use(express.json())

const response = {
    name: "fabian",
}

app.get("/", async (req, res) => {
    return res.status(200).json(response)
})

app.listen(3000, () => console.log("Server is running: http://localhost:3000"))
